import * as cheerio from 'cheerio';
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import got from 'got';
import { join } from 'path';
import { stringify as stringifyYaml } from 'yaml';

const GIT_PATH = join('.', 'caidlist');
const BASE_PATH = join(GIT_PATH, 'version');

function convertVersionName(version: string) {
    const parts = version.split('.');
    if (parts[0] === '1' && Number(parts[1]) >= 26) {
        return parts.slice(1).join('.');
    }
    return version;
}

function updateCommands() {
    [
        ['beta', 'vanilla'],
        ['beta', 'education'],
        ['beta', 'experiment'],
        ['release', 'vanilla'],
        ['release', 'education'],
        ['release', 'experiment'],
    ].forEach(([versionType, branchId]) => {
        const sourcePath = join(BASE_PATH, versionType, 'autocompletion', branchId, 'mcpews.json');
        const source = eval(`(${readFileSync(sourcePath, 'utf-8')})`);
        const targetPath = join('.', 'versions', branchId, convertVersionName(source.packageVersion) + '.txt');
        const isNew = !existsSync(targetPath);
        if (isNew) {
            writeFileSync(targetPath, source.result.commandList.join('\n'));
            console.log(targetPath);
        }
    });
}

function git(args: string) {
    return execSync(`git ${args}`, { cwd: GIT_PATH });
}

function syncIDList() {
    git('fetch');
    const commitLines = git(`log --format="@@@@@%H\t%cI\t%B" master..origin/master`)
        .toString('utf-8')
        .trim()
        .split('@@@@@')
        .slice(1);
    const commits = commitLines.map((commitStr) => {
        const [hash, date, ...message] = commitStr.split('\t');
        return {
            hash,
            date: new Date(date),
            message: message.join('\t').trim(),
        };
    });
    commits.reverse();
    updateCommands();
    for (const commit of commits) {
        git(`reset --hard ${commit.hash}`);
        console.log(`${commit.hash.slice(0, 7)}: ${commit.message.trim()}`);
        updateCommands();
    }
}

async function syncOnlineVersions() {
    const internalVersionRaw = await got('https://zh.minecraft.wiki/w/Module:Internal_version/Versions?action=raw')
        .text();
    const validRegExp = /^android\('main', \d+, \d+, \d+, '.*?', '(.+?)', (?:\d+|'.*?')\)(?: -- (.+))?$/;
    const versions = internalVersionRaw
        .split('\n')
        .map((ln) => ln.match(validRegExp))
        .filter((match) => match !== null)
        .map(([_, page, versionName]) =>
            [page, /^[\d./]+$/.test(versionName) ? versionName : page.replace(/(基岩|携带)版/, '')] as const
        );
    const versionToPage: Record<string, string> = {};
    for (const [page, versionName] of versions) {
        if (versionName.includes('/')) {
            const splited = versionName.split('/');
            const pre = splited[0].slice(0, splited[0].lastIndexOf('.') + 1);
            splited[0] = splited[0].slice(pre.length);
            for (const e of splited) {
                versionToPage[`${pre}${e}`] = page;
            }
        } else {
            versionToPage[versionName] = page;
        }
    }

    const bedrockReleasesRendered = await got('https://zh.minecraft.wiki/w/基岩版版本记录?action=render').text();
    const $ = cheerio.load(bedrockReleasesRendered);
    const releaseVersionToPage: Record<string, string> = {};
    for (const node of $('td>a:first-child').toArray()) {
        const el = $(node);
        const version = el.text().trim().replace('Alpha ', '');
        const page = decodeURIComponent(el.attr('href')!.replace('https://zh.minecraft.wiki/w/', ''))
            .replace('携带版Alpha_', '携带版');
        if (version !== 'Demo') {
            releaseVersionToPage[version] = page;
        }
    }
    const releaseVersionPages = Object.values(releaseVersionToPage);
    writeFileSync(
        './onlineVersions.yaml',
        stringifyYaml({
            versionToPage,
            releaseVersionToPage,
            releaseVersions: Object.keys(versionToPage).filter((k) => releaseVersionPages.includes(versionToPage[k])),
        }, { lineWidth: 0 }),
    );
}

syncIDList();
await syncOnlineVersions();
