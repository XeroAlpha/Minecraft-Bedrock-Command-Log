import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { basename, join as joinPath } from 'path';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

function stringArrayToMultiline(obj: unknown) {
    const traverse = (obj: unknown, depth: number) => {
        if (depth < 0) return obj;
        if (
            Array.isArray(obj)
            && obj.length > 1
            && obj.every((e) => typeof e === 'string' && !e.includes('\n'))
        ) {
            return obj.join('\n') + '\n';
        }
        if (typeof obj === 'object' && obj !== null) {
            for (const [key, value] of Object.entries(obj)) {
                const newValue = traverse(value, depth - 1);
                if (newValue !== value) {
                    (obj as any)[key] = newValue;
                }
            }
        }
        return obj;
    };
    return traverse(obj, 32);
}

function compareVersion(a: string, b: string) {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    const minLength = Math.min(aParts.length, bParts.length);
    for (let i = 0; i < minLength; i++) {
        const compareResult = aParts[i] - bParts[i];
        if (compareResult !== 0) {
            return compareResult;
        }
    }
    return aParts.length - bParts.length;
}

interface VersionCommands {
    versionName: string;
    commands: string[];
}

function readCommands(basePath: string) {
    const files = readdirSync(basePath);
    const commands = files.map<VersionCommands>((file) => ({
        versionName: basename(file, '.txt'),
        commands: readFileSync(joinPath(basePath, file), 'utf-8').trim().split('\n'),
    }));
    commands.sort((a, b) => compareVersion(a.versionName, b.versionName));
    return commands;
}
const vanillaVersions = readCommands('./versions/vanilla');
const educationVersions = readCommands('./versions/education');
const experimentVersions = readCommands('./versions/experiment');

function removeVanillaCommands(list: VersionCommands[]) {
    const newArr = list.map(({ versionName, commands }) => {
        const vanillaCommands = vanillaVersions.find((e) => versionName === e.versionName)?.commands;
        if (vanillaCommands) {
            const addedCommands = commands.filter((c) => !vanillaCommands.includes(c));
            const removedCommands = vanillaCommands.filter((c) => !commands.includes(c));
            return {
                versionName,
                commands: [...addedCommands, ...removedCommands.map((c) => `-${c}`)],
            };
        }
        return null;
    }).filter((e) => e !== null);
    list.splice(0, list.length, ...newArr);
}
removeVanillaCommands(educationVersions);
removeVanillaCommands(experimentVersions);

const sameCommands = (parseYaml(readFileSync('./sameCommands.yaml', 'utf-8')) as string[])
    .map((e) => e.trim().split('\n'));

function analyzeRenaming(added: string[], removed: string[]) {
    const probablyRenamed: [old: string, new: string][] = [];
    const mapper = (str: string): [splits: string[], raw: string] => [str.split(/(\w+(?:\s+\w+)*)/g), str];
    const addedMapped = added.map(mapper);
    const removedMapped = removed.map(mapper);
    for (const [addedSplits, addedRaw] of addedMapped) {
        const matchedRemoved = removedMapped.filter(([removedSplits]) => {
            if (removedSplits.length !== addedSplits.length) {
                return false;
            }
            return removedSplits.every((piece, index) =>
                index === 1 || index % 2 === 0 ? piece === addedSplits[index] : true
            );
        });
        if (matchedRemoved.length > 0) {
            const selectedMatchedRemoved = matchedRemoved[0];
            probablyRenamed.push([
                selectedMatchedRemoved[1],
                addedRaw,
            ]);
            const matchedRemovedMappedIndex = removedMapped.indexOf(selectedMatchedRemoved);
            removedMapped.splice(matchedRemovedMappedIndex, 1);
        }
    }
    return probablyRenamed;
}

interface VersionLog {
    added?: string[];
    removed?: string[];
    exclusiveAdded?: string[];
    exclusiveRemoved?: string[];
    renamed?: { old: string; new: string }[];
}

type LogEntry = {
    min?: string;
    max?: string;
    exclusiveMax?: string;
    exclude?: string[];
} | {
    include: string;
};

type LogEntryContinuous = Exclude<LogEntry, { include: string }>;

interface Changelog {
    versions: {
        [version: string]: VersionLog;
    };
    log: { commands: string[]; changelog: LogEntry[] }[];
    probablyRenamed: {
        [version: string]: [old: string, new: string][];
    };
}

function makeChangelog(versions: VersionCommands[]) {
    const versionLogs: Changelog['versions'] = {};
    const logMap: { [command: string]: LogEntry[] } = {};
    const probablyRenamedMap: Changelog['probablyRenamed'] = {};
    let current: string[] = [];
    let prevVersion = '';
    for (const { versionName, commands } of versions) {
        const added = commands.filter((c) => !current.includes(c));
        const removed = current.filter((c) => !commands.includes(c));
        const renamed = sameCommands
            .map((commands) => {
                const from = commands.find((c) => removed.includes(c));
                const to = commands.find((c) => added.includes(c));
                if (from && to) {
                    added.splice(added.indexOf(to), 1);
                    removed.splice(removed.indexOf(from), 1);
                    return { old: from, new: to };
                }
                return undefined;
            })
            .filter((e) => e !== undefined);
        const probablyRenamed = analyzeRenaming(added, removed);
        if (probablyRenamed.length > 0) {
            probablyRenamedMap[versionName] = probablyRenamed;
        }
        if (added.length > 0 || removed.length > 0 || renamed.length > 0) {
            const currentVersionLog = { renamed, added, removed };
            versionLogs[versionName] = currentVersionLog;
            const prevVersionLog = versionLogs[prevVersion];
            if (prevVersionLog) {
                const prevExclusiveAdded = prevVersionLog.added!.filter((c) => removed.includes(c));
                const prevExclusiveRemoved = prevVersionLog.removed!.filter((c) => added.includes(c));
                if (prevExclusiveAdded.length > 0) {
                    prevVersionLog.exclusiveAdded = prevExclusiveAdded;
                    prevVersionLog.added = prevVersionLog.added!.filter((c) => !prevExclusiveAdded.includes(c));
                    currentVersionLog.removed = currentVersionLog.removed.filter((c) =>
                        !prevExclusiveAdded.includes(c)
                    );
                }
                if (prevExclusiveRemoved.length > 0) {
                    prevVersionLog.exclusiveRemoved = prevExclusiveRemoved;
                    prevVersionLog.removed = prevVersionLog.removed!.filter((c) => !prevExclusiveRemoved.includes(c));
                    currentVersionLog.added = currentVersionLog.added.filter((c) => !prevExclusiveRemoved.includes(c));
                }
            }
        }
        current = commands;
        prevVersion = versionName;
    }
    prevVersion = '';
    for (const [versionName, changes] of Object.entries(versionLogs)) {
        if (changes.added!.length === 0) {
            delete changes.added;
        }
        if (changes.removed!.length === 0) {
            delete changes.removed;
        }
        if (changes.renamed!.length === 0) {
            delete changes.renamed;
        }
        if (Object.keys(changes).length === 0) {
            delete versionLogs[versionName];
        } else {
            if (changes.added) {
                for (const command of changes.added) {
                    const logs = logMap[command] ?? (logMap[command] = []);
                    logs.push({ min: versionName, max: undefined, exclusiveMax: undefined });
                }
            }
            if (changes.removed) {
                for (const command of changes.removed) {
                    const logs = logMap[command] ?? (logMap[command] = []);
                    const lastInterval = (logs[logs.length - 1] ?? (logs[0] = {})) as LogEntryContinuous;
                    lastInterval.max = prevVersion;
                    lastInterval.exclusiveMax = versionName;
                }
            }
            if (changes.exclusiveAdded) {
                for (const command of changes.exclusiveAdded) {
                    const logs = logMap[command] ?? (logMap[command] = []);
                    logs.push({ include: versionName });
                }
            }
            if (changes.exclusiveRemoved) {
                for (const command of changes.exclusiveRemoved) {
                    const logs = logMap[command] ?? (logMap[command] = []);
                    const lastInterval = (logs[logs.length - 1] ?? (logs[0] = {})) as LogEntryContinuous;
                    const exclude = lastInterval.exclude ?? (lastInterval.exclude = []);
                    exclude.push(versionName);
                }
            }
        }
        prevVersion = versionName;
    }

    const changelogItems: Changelog['log'] = [];
    const changelogLookup: Record<string, typeof changelogItems[number]> = {};
    for (const [command, changelog] of Object.entries(logMap)) {
        const key = JSON.stringify(changelog);
        let item = changelogLookup[key];
        if (!item) {
            item = { commands: [], changelog };
            changelogLookup[key] = item;
            changelogItems.push(item);
        }
        item.commands.push(command);
    }
    return {
        versions: versionLogs,
        commands: changelogItems,
        probablyRenamed: Object.keys(probablyRenamedMap).length > 0 ? probablyRenamedMap : undefined,
    };
}

function mergeVersionLog(map: {
    [branch: string]: {
        [version: string]: VersionLog;
    };
}) {
    const mergedVersions: {
        [version: string]: {
            [branch: string]: VersionLog;
        };
    } = {};
    for (const [branch, versions] of Object.entries(map)) {
        for (const [versionName, changes] of Object.entries(versions)) {
            let mergedVersion = mergedVersions[versionName];
            if (!mergedVersion) {
                mergedVersion = {};
                mergedVersions[versionName] = mergedVersion;
            }
            mergedVersion[branch] = changes;
        }
    }
    return Object.fromEntries(Object.entries(mergedVersions).sort(([a], [b]) => compareVersion(a, b)));
}

function makeChangelogs(
    output: string,
    vanillaVersions: VersionCommands[],
    educationVersions: VersionCommands[],
    experimentVersions: VersionCommands[],
) {
    const van = makeChangelog(vanillaVersions);
    const edu = makeChangelog(educationVersions);
    const exp = makeChangelog(experimentVersions);

    writeFileSync(
        output,
        stringifyYaml(
            stringArrayToMultiline({
                versions: mergeVersionLog({
                    vanilla: van.versions,
                    education: edu.versions,
                    experiment: exp.versions,
                }),
                commands: {
                    vanilla: van.commands,
                    education: edu.commands,
                    experiment: exp.commands,
                },
                probablyRenamed: {
                    vanilla: van.probablyRenamed,
                    education: edu.probablyRenamed,
                    experiment: exp.probablyRenamed,
                },
            }),
            null,
            { lineWidth: 0 },
        ),
    );
}

const releaseVersions = (parseYaml(readFileSync('./onlineVersions.yaml', 'utf-8')).releaseVersions as string[]);

function filterReleaseVersions(versions: VersionCommands[]) {
    return versions.filter((e) => releaseVersions.includes(e.versionName));
}

function filterPreviewVersions(versions: VersionCommands[]) {
    return versions.filter((e) => !releaseVersions.includes(e.versionName));
}

makeChangelogs('changelog.yaml', vanillaVersions, educationVersions, experimentVersions);
makeChangelogs(
    'changelog_release.yaml',
    filterReleaseVersions(vanillaVersions),
    filterReleaseVersions(educationVersions),
    filterReleaseVersions(experimentVersions),
);
makeChangelogs(
    'changelog_preview.yaml',
    filterPreviewVersions(vanillaVersions),
    filterPreviewVersions(educationVersions),
    filterPreviewVersions(experimentVersions),
);
