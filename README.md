## Minecraft 基岩版命令更新日志

本日志由 [ProjectXero](mailto:projectxero@163.com) 维护，记录 Minecraft 携带版与基岩版命令语法的变更。

希望催更的可联系维护者，并且附上你想更新版本的正版 Android 版本安装包或 Split-Apk 压缩包。

目前最新版本的命令列表可参阅[最新版本命令列表](#最新版本命令列表)。

中国版的版本号与国际版的版本对照表可参阅[中国版所对应的国际版一览](#中国版所对应的国际版一览)。

此日志不收录未在 Android 平台上发布的版本。此外还有部分版本由于一些原因没有记录，参见下方[本日志未记录的版本](#本日志未记录的版本)。

1.2 以下版本有部分命令未被记录，因为部分命令对 [WebSocket 服务器](https://github.com/XeroAlpha/mcpews) 不可见。

本列表以 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 协议发布。

目前本日志包含的最新版本:
- 正式版（Release） : `1.21.111.1`
- 预览版（Preview）: `26.0.23`

## 26.0

### 26.0.23

添加 `packstack` 命令。
```
/packstack <stackType: stackType> [verbose: verbose] [exclude-vanilla: exclude-vanilla]
```

## 1.21

### 1.21.120.24

`camera` 命令支持 `attach_to_entity` 与 `detach_from_entity` 子命令。（需要启用特定实验性玩法）

```
/camera <players: target> attach_to_entity <entity: target>
/camera <players: target> detach_from_entity
```

### 1.21.100.25

`camera` 命令的 `fov_clear` 与 `fov_set` 子命令无需启用特定实验性玩法。

```
/camera <players: target> fov_clear [fovEaseTime: float] [fovEaseType: Easing]
/camera <players: target> fov_set <fov_value: float> [fovEaseTime: float] [fovEaseType: Easing]
```

### 1.21.100.23

`camera` 命令的 `fov_clear` 与 `fov_set` 子命令添加 `fovEaseTime` 与 `fovEaseType` 参数。（需要启用特定实验性玩法）

```
/camera <players: target> fov_clear [fovEaseTime: float] [fovEaseType: Easing]
/camera <players: target> fov_set <fov_value: float> [fovEaseTime: float] [fovEaseType: Easing]
```

### 1.21.100.20

`camera` 命令支持 `fov_clear` 与 `fov_set` 子命令。（需要启用特定实验性玩法）

```
/camera <players: target> fov_clear
/camera <players: target> fov_set <fov_value: float>
```

### 1.21.90.23

`controlscheme` 命令无需启用特定实验性玩法。

```
/controlscheme <players: target> clear
/controlscheme <players: target> set <control scheme: controlscheme>
```

### 1.21.90.21

`place jigsaw` 与 `place structure` 子命令添加 `liquidSettings` 参数。

```
/place jigsaw <pool: filepath> <jigsawTarget: string> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: LiquidSettings]
/place structure <structure: string> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: LiquidSettings]
```

### 1.21.80.27

添加 `controlscheme` 命令。（需要启用特定实验性玩法）

```
/controlscheme <players: target> clear
/controlscheme <players: target> set <control scheme: controlscheme>
```

### 1.21.80.25

`camera` 命令的 `entity_offset` 与 `view_offset` 子命令可以与 `ease` 子命令一同使用。

```
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
```

### 1.21.80.22

`place jigsaw` 与 `place structure` 子命令无需启用特定实验性玩法。

```
/place jigsaw <pool: filepath> <jigsawTarget: string> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean] [includeEntities: Boolean]
/place structure <structure: string> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean] [includeEntities: Boolean]
```

### 1.21.70.23

`aimassist` 命令无需启用特定实验性玩法。

```
/aimassist <players: target> clear
/aimassist <players: target> set [x angle: float] [y angle: float] [max distance: float] [target mode: AimAssistTargetMode] [preset id: string]
```

### 1.21.70.22

`place feature` 与 `place featurerule` 子命令无需启用特定实验性玩法。

```
/place feature <feature: features> [position: x y z]
/place featurerule <featurerule: featureRules> [position: x y z]
```

### 1.21.70.20

移除 `set_movement_authority` 命令。

### 1.21.60.25

`camera` 命令的 `remove_target`、`target_entity` 与 `target_center_offset` 子命令无需启用特定实验性玩法。

```
/camera <players: target> remove_target
/camera <players: target> target_entity <entity: target>
/camera <players: target> target_entity <entity: target> target_center_offset <xTargetCenterOffset: float> <yTargetCenterOffset: float> <zTargetCenterOffset: float>
```

### 1.21.60.24

`script` 命令添加 `diagnostics startcapture` 与 `diagnostics stopcapture` 子命令。

```
/script diagnostics startcapture
/script diagnostics stopcapture
```

### 1.21.60.23

`loot` 命令的 `mine` 来源无需启用特定实验性玩法。

```
/loot give <players: target> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot insert <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot spawn <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
```

添加 `place feature` 与 `place featurerule` 子命令。（需要启用特定实验性玩法）

```
/place feature <feature: features> [position: x y z]
/place featurerule <featurerule: featureRules> [position: x y z]
```

`place jigsaw` 与 `place structure` 子命令添加 `includeEntities` 参数。（需要启用特定实验性玩法）

```
/place jigsaw <pool: filepath> <jigsawTarget: string> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean] [includeEntities: Boolean]
/place structure <structure: string> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean] [includeEntities: Boolean]
```

移除 `script` 命令的 `watchdog exportstats` 子命令。

### 1.21.50.26

添加 `place jigsaw` 与 `place structure` 子命令。（需要启用特定实验性玩法）

```
/place jigsaw <pool: filepath> <jigsawTarget: string> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean]
/place structure <structure: string> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean]
```

### 1.21.50.25

添加 `aimassist` 命令。（需要启用特定实验性玩法）

```
/aimassist <players: target> clear
/aimassist <players: target> set [x angle: float] [y angle: float] [max distance: float] [target mode: AimAssistTargetMode] [preset id: string]
```

添加 `set_movement_authority` 命令。

```
/set_movement_authority <client|server>
```

### 1.21.50.20

添加 `loot` 命令的 `mine` 来源。（需要启用特定实验性玩法）

```
/loot give <players: target> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot insert <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot spawn <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
```

`schedule` 命令添加 `delay` 子命令。

```
/schedule delay add <function: filepath> <time: int> [replace|append]
/schedule delay add <function: filepath> <time: int>D [replace|append]
/schedule delay add <function: filepath> <time: int>S [replace|append]
/schedule delay add <function: filepath> <time: int>T [replace|append]
/schedule delay clear <function: filepath>
```

### 1.21.40.22

`camera` 命令的 `entity_offset` 与 `view_offset` 子命令无需启用特定实验性玩法。

```
/camera <players: target> set <preset: string> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
```

### 1.21.40.20

`effect` 命令支持 `infinite` 持续时间。

```
/effect <player: target> <effect: Effect> infinite [amplifier: int] [hideParticles: Boolean]
```

`effect` 命令支持清除指定的效果。

```
/effect <player: target> clear [effect: Effect]
```

`schedule` 命令支持 `clear` 一系列子命令。

```
/schedule clear <function: filepath>
/schedule on_area_loaded clear function <function: filepath>
/schedule on_area_loaded clear tickingarea <name: string> [function: filepath]
```

`camera` 命令支持 `entity_offset` 子命令。（需要启用特定实验性玩法）

```
/camera <players: target> set <preset: string> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
```

### 1.21.30.22

`reload` 命令添加 `reload_all` 参数。

```
/reload [all: reload_all]
```

### 1.21.20.22

`camera` 命令支持 `remove_target`、`target_entity` 与 `target_center_offset` 子命令。（需要启用特定实验性玩法）

```
/camera <players: target> remove_target
/camera <players: target> target_entity <entity: target>
/camera <players: target> target_entity <entity: target> target_center_offset <xTargetCenterOffset: float> <yTargetCenterOffset: float> <zTargetCenterOffset: float>
```

### 1.21.10.23

`spreadplayers` 命令添加 `maxHeight` 参数。

```
/spreadplayers <x: value> <z: value> <spreadDistance: float> <maxRange: float> <victim: target> [maxHeight: value]
```

### 1.21.10.22

`camera` 命令支持 `view_offset` 子命令。（需要启用特定实验性玩法）

```
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float>
```

移除 `volumearea` 命令。

## 1.20

### 1.20.80.23

`hud` 命令无需启用特定实验性玩法。

### 1.20.60.23

添加 `hud` 命令。（需要启用特定实验性玩法）

```
/hud <target: target> <visible: HudVisibility> [hud_element: HudElement]
```

### 1.20.50.21

`recipe` 命令启用教育版选项时后再次可用。

### 1.20.40.24

`recipe` 命令启用教育版选项时不再可用。

### 1.20.40.23

`recipe` 命令启用教育版选项后也可用。

### 1.20.20.22

`camera` 命令无需启用特定实验性玩法。

```
/camera <players: target> clear
/camera <players: target> fade
/camera <players: target> fade color <red: int> <green: int> <blue: int>
/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float>
/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>
/camera <players: target> set <preset: string> [default: default]
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> [default: default]
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> pos <position: x y z>
/camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> pos <position: x y z> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value>
```

### 1.20.20.21

`recipe` 命令无需启用特定实验性玩法。（启用教育版选项时除外）

```
/recipe give <victim: target> <recipe: string>
/recipe take <victim: target> <recipe: string>
```

### 1.20.20.20

`scriptevent` 命令无需启用特定实验性玩法。

```
/scriptevent <messageId: string> <message: message>
```

更改 `recipe` 命令的参数顺序。（需要启用特定实验性玩法且不开启教育版选项）

```
/recipe give <victim: target> <recipe: string>
/recipe take <victim: target> <recipe: string>
```

### 1.20.10.23

`camera` 命令支持 `facing` 子命令。（需要启用特定实验性玩法）

```
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtPosition: x y z>
```

### 1.20.10.21

添加 `recipe` 命令。（需要启用特定实验性玩法且不开启教育版选项）

```
/recipe <victim: target> give <recipe: string>
/recipe <victim: target> take <recipe: string>
```

### 1.20.10.20

`camera` 命令中的颜色参数改为整数形式。（需要启用特定实验性玩法）

```
/camera <players: target> fade color <red: int> <green: int> <blue: int>
/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>
```

### 1.20.0.22

添加 `camera` 命令。（需要启用特定实验性玩法）

```
/camera <players: target> clear
/camera <players: target> fade
/camera <players: target> fade color <red: float> <green: float> <blue: float>
/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float>
/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: float> <green: float> <blue: float>
/camera <players: target> set <preset: string> [default: default]
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> [default: default]
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> pos <position: x y z>
/camera <players: target> set <preset: string> pos <position: x y z> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value>
```

## 1.19

### 1.19.80.22

添加 `gametest` 命令的 `runsetuntilfail` 子命令与 `stopall` 子命令。

```
/gametest runsetuntilfail [tag: string] [rotationSteps: int]
/gametest stopall
```

### 1.19.80.21

`clone` 命令中方块状态变为可选。

```
/clone <begin: x y z> <end: x y z> <destination: x y z> filtered <cloneMode: CloneMode> <tileName: Block> [blockStates: block states]
```

为部分方块状态相关的命令添加了省略方块状态的用法。

```
/fill <from: x y z> <to: x y z> <tileName: Block> [oldBlockHandling: FillMode]
/fill <from: x y z> <to: x y z> <tileName: Block> replace [replaceTileName: Block] [replaceBlockStates: block states]
/setblock <position: x y z> <tileName: Block> [replace|destroy|keep]
```

为了和省略方块状态的用法相区分，将冲突的用法中的方块状态改为必需。

```
/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states> [oldBlockHandling: FillMode]
/setblock <position: x y z> <tileName: Block> <blockStates: block states> [replace|destroy|keep]
```

添加 `inputpermission` 命令。

```
/inputpermission query <targets: target> <permission: permission> [state: state]
/inputpermission set <targets: target> <permission: permission> <state: state>
```

移除 `teleport` 命令在传送自身至指定实体的用法中的 `checkForBlocks` 参数。

```
/teleport <destination: target>
/tp <destination: target>
```

### 1.19.80.20

`summon` 命令支持 `facing` 用法。

```
/summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtEntity: target> [spawnEvent: string] [nameTag: string]
/summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtPosition: x y z> [spawnEvent: string] [nameTag: string]
```

### 1.19.70.23

再次添加 `summon` 命令的 `yRot` 与 `xRot` 参数。

```
/summon <entityType: EntityType> [spawnPos: x y z] [yRot: value] [xRot: value] [spawnEvent: string] [nameTag: string]
```

### 1.19.70.21

移除方块数据值相关用法。

```
/clone <begin: x y z> <end: x y z> <destination: x y z> filtered <cloneMode: CloneMode> <tileName: Block> <tileData: int>
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <data: int> [chainedCommand: ExecuteChainedOption_0]
/fill <from: x y z> <to: x y z> <tileName: Block> <tileData: int> replace [replaceTileName: Block] [replaceDataValue: int]
/fill <from: x y z> <to: x y z> <tileName: Block> [tileData: int] [oldBlockHandling: FillMode]
/setblock <position: x y z> <tileName: Block> [tileData: int] [replace|destroy|keep]
/testforblock <position: x y z> <tileName: Block> [dataValue: int]
```

`script` 命令在无脚本加载时再次可用。（**无需**启用特定实验性玩法）

### 1.19.60.26

`script` 命令在无脚本加载时再次可用。（**需要**启用特定实验性玩法）

### 1.19.60.22

添加 `scriptevent` 命令。（需要启用特定实验性玩法）

```
/scriptevent <messageId: string> <message: message>
```

### 1.19.50.23

`execute` 命令的新用法无需启用特定实验性玩法。

```
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <blockStates: block states> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <data: int> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> blocks <begin: x y z> <end: x y z> <destination: x y z> <scan mode: BlocksScanMode> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> entity <target: target> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> score <target: target> <objective: string> <operation: compare operator> <source: target> <objective: string> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> score <target: target> <objective: string> matches <range: integer range> [chainedCommand: ExecuteChainedOption_0]
/execute align <axes: string> <chainedCommand: ExecuteChainedOption_0>
/execute anchored <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
/execute as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute at <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute facing <position: x y z> <chainedCommand: ExecuteChainedOption_0>
/execute facing entity <origin: target> <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
/execute in <dimension: Dimension> <chainedCommand: ExecuteChainedOption_0>
/execute positioned <position: x y z> <chainedCommand: ExecuteChainedOption_0>
/execute positioned as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute rotated <yaw: value> <pitch: value> <chainedCommand: ExecuteChainedOption_0>
/execute rotated as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute run <command: command>
```

### 1.19.40.23

暂时移除 `summon` 命令的 `yRot` 与 `xRot` 参数。

添加 `execute` 命令的 `anchored` 子命令与 `in` 子命令。（需要启用特定实验性玩法）

```
/execute anchored <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
/execute in <dimension: Dimension> <chainedCommand: ExecuteChainedOption_0>
```

### 1.19.40.22

`gametest` 命令无需启用特定实验性玩法。

```
/gametest clearall
/gametest create <testName: string> [width: int] [height: int] [depth: int]
/gametest pos
/gametest run <testName: string> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]
/gametest run <testName: string> [rotationSteps: int]
/gametest runset [tag: string] [rotationSteps: int]
/gametest runthese
/gametest runthis
```

### 1.19.40.21

`summon` 命令支持 `yRot` 与 `xRot` 参数。

```
/summon <entityType: EntityType> [spawnPos: x y z] [yRot: value] [xRot: value] [spawnEvent: string] [nameTag: string]
```

添加 `execute` 命令的 `align` 子命令与 `facing` 子命令。（需要启用特定实验性玩法）

```
/execute align <axes: string> <chainedCommand: ExecuteChainedOption_0>
/execute facing <position: x y z> <chainedCommand: ExecuteChainedOption_0>
/execute facing entity <origin: target> <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
```

`script` 命令不再在无脚本加载时可用。（需要启用特定实验性玩法）

### 1.19.40.20

添加 `loot` 命令的 `replace block` 目标。

```
/loot replace block <position: x y z> slot.container <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
```

添加 `execute` 命令的 `rotated` 子命令。（需要启用特定实验性玩法）

```
/execute rotated <yaw: value> <pitch: value> <chainedCommand: ExecuteChainedOption_0>
/execute rotated as <origin: target> <chainedCommand: ExecuteChainedOption_0>
```

### 1.19.30.22

添加 `script` 命令 `watchdog` 子命令的 `exportstats` 用法。（需要启用特定实验性玩法）

```
/script watchdog exportstats
```

### 1.19.30.20

移除 `locate` 命令的旧版语法。

```
/locate <feature: Structure> [useNewChunksOnly: Boolean]
```

`structure` 命令支持 `waterlogged` 参数。 

```
/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [animationMode: StructureAnimationMode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]
/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]
```

### 1.19.10.23

更改 `locate` 命令的语法。

```
/locate <feature: Structure> [useNewChunksOnly: Boolean]
/locate biome <biome: Biome>
/locate structure <structure: Structure> [useNewChunksOnly: Boolean]
```

### 1.19.10.20

`execute` 命令改为子命令链调用形式。（需要启用特定实验性玩法）

```
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <blockStates: block states> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <data: int> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> blocks <begin: x y z> <end: x y z> <destination: x y z> <scan mode: BlocksScanMode> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> entity <target: target> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> score <target: target> <objective: string> <operation: compare operator> <source: target> <objective: string> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> score <target: target> <objective: string> matches <range: integer range> [chainedCommand: ExecuteChainedOption_0]
/execute as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute at <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute positioned <position: x y z> <chainedCommand: ExecuteChainedOption_0>
/execute positioned as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute run <command: command>
```

### 1.19.0.30

添加 `script` 命令的 `profiler` 子命令（需要启用特定实验性玩法）。

```
/script profiler start
/script profiler stop
```

### 1.19.0.28

添加 `loot` 命令的 `replace entity` 目标。

```
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
```

### 1.19.0.20（主版本更新）

更改 `gametest` 命令的测试枚举类型（需要启用特定实验性玩法）。

```
/gametest run <testName: string> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]
/gametest run <testName: string> [rotationSteps: int]
/gametest runset [tag: string] [rotationSteps: int]
```

`script` 命令 ` debugger` 子命令的 `host` 与 `port` 参数改为可选（需要启用特定实验性玩法）。

```
/script debugger connect [host: string] [port: int]
```

## 1.18

### 1.18.30.20

添加 `loot` 命令的 `insert` 目标。

```
/loot insert <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot insert <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
```

### 1.18.20.27

暂时移除 `placefeature` 命令。

```
/placefeature <featureName: Features> [position: x y z]
/placefeature <featureRule: featureRules> [position: x y z]
```

移除 `gametest` 命令 `clearall` 子命令的 `radius` 参数（需要启用特定实验性玩法）。

```
/gametest clearall
```

### 1.18.20.25

添加 `placefeature` 命令。

```
/placefeature <featureName: Features> [position: x y z]
/placefeature <featureRule: featureRules> [position: x y z]
```

### 1.18.20.21

添加 `loot` 命令的 `give` 目标。

```
/loot give <players: target> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot give <players: target> loot <loot_table: string> [<tool>|mainhand|offhand: string]
```

`tickingarea` 支持 `preload` 子命令与 `preload` 参数。

```
/tickingarea add <from: x y z> <to: x y z> [name: string] [preload: Boolean]
/tickingarea add circle <center: x y z> <radius: int> [name: string] [preload: Boolean]
/tickingarea preload <name: string> [preload: Boolean]
/tickingarea preload <position: x y z> [preload: Boolean]
```

添加 `volumearea` 命令（需要启用特定实验性玩法）。

```
/volumearea add <identifier: string> <from: x y z> <to: x y z> [name: string]
/volumearea list [all-dimensions: VolumeAreaAllDimensions]
/volumearea remove <name: string>
/volumearea remove <position: x y z>
/volumearea remove_all
```

### 1.18.10.26

添加 `damage` 命令。

```
/damage <target: target> <amount: int> <cause: DamageCause> entity <damager: target>
/damage <target: target> <amount: int> [cause: DamageCause]
```

### 1.18.10.24

添加 `loot` 命令的 `kill` 来源。

```
/loot spawn <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: string]
```

### 1.18.10.21

重新添加 `loot` 命令。

```
/loot spawn <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
```

### 1.18.0.22

暂时移除 `loot` 命令。

```
/loot spawn <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
```

### 1.18.0.21

添加 `loot` 命令。

```
/loot spawn <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
```

### 1.18.0.20（主版本更新）

`testforblock` 支持 `blockStates` 参数，用于设置方块状态。

```
/testforblock <position: x y z> <tileName: Block> [blockStates: block states]
```

## 1.17

### 1.17.30.23

添加 `script` 命令与 `debugger` 子命令（需要启用特定实验性玩法）。

```
/script debugger close
/script debugger connect <host: string> <port: int>
/script debugger listen <port: int>
```

### 1.17.30.22

`locate` 命令支持 `useNewChunksOnly` 参数，用于设置是否仅定位在未生成的区块的结构。

```
/locate <feature: Feature> [useNewChunksOnly: Boolean]
```

### 1.17.20.23

`particle` 命令的 `position` 参数改为可选。

```
/particle <effect: string> [position: x y z]
```

### 1.17.10.22

添加 `dialogue` 命令。

```
/dialogue change <npc: target> <sceneName: string> [players: target]
/dialogue open <npc: target> <player: target> [sceneName: string]
```

### 1.17.0.50（主版本更新）

调整命令展示先后顺序。

## 1.16

### 1.16.230.50

将 `gametest` 命令的 `runall` 子命令重命名为 `runset` 子命令（需要启用特定实验性玩法）。

```
/gametest runset [tag: GameTestTag] [rotationSteps: int]
```

### 1.16.220.50

`gametest` 命令支持 `stopOnFailure` 与 `repeatCount` 参数（需要启用特定实验性玩法）。

```
/gametest run <testName: GameTestName> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]
```

### 1.16.210.60

添加 `gametest` 命令（需要启用特定实验性玩法）。

```
/gametest runthis
/gametest run <testName: GameTestName> [rotationSteps: int]
/gametest runall [tagTag: GameTestTag] [rotationSteps: int]
/gametest clearall [radius: int]
/gametest pos
/gametest create <testName: string> [width: int] [height: int] [depth: int]
/gametest runthese
```

### 1.16.210.58

移除 `mixer` 命令。

```
/mixer <stop: string>
/mixer <scene: string> <sceneName: string>
/mixer <start: string> <version: int> [shareCode: string]
```

### 1.16.210.54

添加 `camerashake` 的 `stop` 子命令。

```
/camerashake stop [player: target]
```

重新添加 ~~`mixer`~~ 命令。**（已在1.16.210.58中移除）**

```
/mixer <stop: string>
/mixer <scene: string> <sceneName: string>
/mixer <start: string> <version: int> [shareCode: string]
```

添加 `structure` 命令的 `delete` 子命令。

```
/structure delete <name: string>
```

### 1.16.210.53

`clone`、`fill` 与 `setblock` 命令支持方块状态参数。

```
/clone <begin: x y z> <end: x y z> <destination: x y z> filtered <cloneMode: CloneMode> <tileName: Block> <blockStates: block states>
/fill <from: x y z> <to: x y z> <tileName: Block> [blockStates: block states] [oldBlockHandling: FillMode]
/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states> replace [replaceTileName: Block] [replaceBlockStates: block states]
/setblock <position: x y z> <tileName: Block> [blockStates: block states] [replace|destroy|keep]
```

暂时移除 `mixer` 命令。

### 1.16.100.60

`structure` 命令支持 `animationMode` 与 `animationSeconds` 参数，用于设置加载结构时的动画。

```
/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [animationMode: StructureAnimationMode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [integrity: float] [seed: string]
```

|`animationMode` 的值|动画类型|
|:-:|:-:|
|`block_by_block`|逐个方块加载|
|`layer_by_layer`|逐层加载|

### 1.16.100.59

`camerashake` 支持 `shakeType` 参数，用于设置摇晃的类型。

```
/camerashake add <player: target> [intensity: float] [seconds: float] [shakeType: CameraShakeType]
```

|`shakeType` 的值|摇晃类型|
|:-:|:-:|
|`positional`|（原来的行为）平移镜头摇晃|
|`rotational`|旋转镜头摇晃|

添加 `schedule` 命令。

```
/schedule on_area_loaded add <from: x y z> <to: x y z> <function: filepath>
/schedule on_area_loaded add circle <center: x y z> <radius: int> <function: filepath>
/schedule on_area_loaded add tickingarea <name: string> <function: filepath>
```

### 1.16.100.58

添加 `music` 命令。

```
/music queue <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]
/music play <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]
/music stop [fadeSeconds: float]
/music volume <volume: float>
```

### 1.16.100.57

添加 `camerashake` 命令。

```
/camerashake add <player: target> [intensity: float] [seconds: float]
```

添加 `clearspawnpoint` 命令。

```
/clearspawnpoint [player: target]
```

添加 `event` 命令。

```
/event entity <target: target> <eventName: string>
```

### 1.16.100.54

添加 `fog` 命令。

```
/fog <victim: target> push <fogId: string> <userProvidedId: string>
/fog <victim: target> <mode: delete> <userProvidedId: string>
```

### 1.16.100.52

添加 `playanimation` 命令。

```
/playanimation <entity: target> <animation: string> [next_state: string] [blend_out_time: float] [stop_expression: string] [controller: string]
```

添加 `ride` 命令。

```
/ride <riders: target> start_riding <ride: target> [teleportRules: TeleportRules] [howToFill: FillType]
/ride <riders: target> stop_riding
/ride <rides: target> evict_riders
/ride <rides: target> summon_rider <entityType: EntityType> [spawnEvent: string] [nameTag: string]
/ride <riders: target> summon_ride <entityType: EntityType> [rideRules: RideRules] [spawnEvent: string] [nameTag: string]
```

添加 `structure` 命令。

```
/structure save <name: string> <from: x y z> <to: x y z> [saveMode: StructureSaveMode]
/structure save <name: string> <from: x y z> <to: x y z> [includeEntities: Boolean] [saveMode: StructureSaveMode] [includeBlocks: Boolean]
/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [integrity: float] [seed: string]
```

### 1.16.0.57

添加 `kick` 命令。

```
/kick <name: target> <reason: message>
```

`replaceitem` 支持 `oldItemHandling` 参数，用于设置旧物品的处理方式。

```
/replaceitem block <position: x y z> slot.container <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]
/replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]
```

|`oldItemHandling` 的值|旧物品的处理方式|
|:-:|:-:|
|`destroy`|（原来的行为）直接替换为目标物品|
|`keep`|如果目标格子被占据，则不替换该格内的物品|

移除 `videostream` 与 `videostreamaction` 命令。

```
/videostream <serverUri: string> <screenshotSendFrequency: value>
/videostream <serverUri: string> <screenshotSendFrequency: value> <desiredResolutionX: int> <desiredResolutionY: int>
```

## 1.13

### 1.13.0.18

优化 `summon` 生成命名生物的命令语法。

```
/summon <entityType: EntityType> [spawnPos: x y z] [spawnEvent: string] [nameTag: string]
/summon <entityType: EntityType> <nameTag: string> [spawnPos: x y z]
```

### 1.13.0.13

优化命令语法描述。

### 1.13.0.9

`summon` 命令支持 `nameTag` 参数，用于生成命名的实体。**（1.13.0.18中修改语法，移除 `named` 标志符）**

```
/summon <entityType: EntityType> [spawnPos: x y z] [spawnEvent: string] [named: string]
/summon <entityType: EntityType> named <nameTag: string> [spawnPos: x y z]
```

`function` 不再支持内部预定义函数调用。

```
/function <name: string>
```

### 1.13.0.1（主版本更新）

`teleport`（别名 `tp`）支持 `checkForBlocks` 参数，用于设置是否检查区块已加载。

```
/teleport <destination: x y z> [true|false]
/teleport <destination: x y z> [yRot: value] [xRot: value] [true|false]
/teleport <destination: x y z> facing <lookAtPosition: x y z> [true|false]
/teleport <destination: x y z> facing <lookAtEntity: target> [true|false]
/teleport <victim: target> <destination: x y z> [yRot: value] [xRot: value] [true|false]
/teleport <victim: target> <destination: x y z> [true|false]
/teleport <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [true|false]
/teleport <victim: target> <destination: x y z> facing <lookAtEntity: target> [true|false]
/teleport <destination: target> [true|false]
/teleport <victim: target> <destination: target> [true|false]
/tp <destination: x y z> [true|false]
/tp <destination: x y z> [yRot: value] [xRot: value] [true|false]
/tp <destination: x y z> facing <lookAtPosition: x y z> [true|false]
/tp <destination: x y z> facing <lookAtEntity: target> [true|false]
/tp <victim: target> <destination: x y z> [yRot: value] [xRot: value] [true|false]
/tp <victim: target> <destination: x y z> [true|false]
/tp <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [true|false]
/tp <victim: target> <destination: x y z> facing <lookAtEntity: target> [true|false]
/tp <destination: target> [true|false]
/tp <victim: target> <destination: target> [true|false]
```

## 1.12

### 1.12.0.2（主版本更新）

`summon` 命令支持 `spawnEvent` 参数，用于设置生成实体的实体事件。

```
/summon <entityType: EntityType> [spawnPos: x y z] [spawnEvent: string]
```

~~`videostream`~~ 命令支持 `desiredResolutionX` 与 `desiredResolutionY` 参数，用于设置截屏分辨率。**（该命令已在1.16.0.57中移除）**

```
/videostream <serverUri: string> <screenshotSendFrequency: value> <desiredResolutionX: int> <desiredResolutionY: int>
```

## 1.11

### 1.11.0.5

移除 `worldage` 命令。

```
/worldage add <amount: int>
/worldage set <amount: int>
/worldage query
```

### 1.11.0.3

添加 `mobevent` 命令。

```
/mobevent <minecraft:pillager_patrols_event|minecraft:wandering_trader_event|events_enabled> [true|false]
```

### 1.11.0.1（主版本更新）

添加 ~~`worldage`~~ 命令。**（已在1.11.0.5中移除）**

```
/worldage add <amount: int>
/worldage set <amount: int>
/worldage query
```

## 1.10

### 1.10.0.3（主版本更新）

添加 ~~`videostream`~~ 与 ~~`videostreamaction`~~ 命令。**（已在1.16.0.57中移除）**

```
/videostream <serverUri: string> <screenshotSendFrequency: value>
/videostreamaction <none|close>
```

优化部分命令语法描述。

## 1.9

### 1.9.0.3

优化 `function` 命令语法描述。

### 1.9.0.2

添加 `tag` 命令。

```
/tag <entity: target> <add|remove> <name: string>
/tag <entity: target> list
```

添加 `titleraw` 命令。

```
/titleraw <player: target> clear
/titleraw <player: target> reset
/titleraw <player: target> <title|subtitle|actionbar> <raw json titleText: json>
/titleraw <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>
```

### 1.9.0.0（主版本更新）

添加 `tellraw` 命令。

```
/tellraw <target: target> <raw json message: json>
```

## 1.8

### 1.8.0.10

添加 `function` 命令。

```
/function <name: unknown>
/function <name: string>
```

### 1.8.0.8（主版本更新）

添加 `particle` 与 `reload` 命令。

```
/particle <effect: string> <position: x y z>
/reload
```

优化 `gamerule` 命令的语法。

```
/gamerule <rule: string> [true|false]
/gamerule <rule: string> [value: int]
```

## 1.7

### 1.7.0.2（主版本更新）

添加 `scoreboard` 命令。

```
/scoreboard objectives add <objective: string> dummy [displayName: string]
/scoreboard objectives remove <objective: string>
/scoreboard objectives list
/scoreboard objectives setdisplay <list|sidebar> [objective: string] [ascending|descending]
/scoreboard objectives setdisplay belowname [objective: string]
/scoreboard players list [playername: target]
/scoreboard players reset <player: target> [objective: string]
/scoreboard players test <player: target> <objective: string> <min: wildcard int> [max: wildcard int]
/scoreboard players random <player: target> <objective: string> <min: int> <max: int>
/scoreboard players <add|remove|set> <player: target> <objective: string> <count: int>
/scoreboard players operation <targetName: target> <targetObjective: string> <operation: operator> <selector: target> <objective: string>
```

## 1.5

### 1.5.0.4

添加 `ability` 等 5 个用法（需启用教育版选项）。

```
/ability <player: target> <mayfly|mute|worldbuilder> <true|false>
/ability <player: target> [mayfly|mute|worldbuilder]
/immutableworld [true|false]
/wb
/worldbuilder
```

## 1.4

### 1.2.14.2

`gamerule` 命令支持设置整型游戏规则。

```
/gamerule maxcommandchainlength [value: int]
```

## 1.2

### 1.2.5.12

添加 ~~`mixer`~~ 命令。**（已在1.16.210.58中移除）**

```
/mixer <stop: string>
/mixer <scene: string> <sceneName: string>
/mixer <start: string> <version: int> [shareCode: string]
```

### 1.2.0.18

移除 `detect` 命令，同时重新加入 `execute` 命令的 `detect` 模式。

```
/detect <position: x y z> <block: Block> <data: int> <command: command>
/execute <origin: target> <position: x y z> detect <detectPos: x y z> <block: Block> <data: int> <command: command>
```

### 1.2.0.2（主版本更新）

添加 `alwaysday` 等 14 个用法。

```
/alwaysday [true|false]
/connect <serverUri: text>
/daylock [true|false]
/detect <position: x y z> <block: Block> <data: int> <command: command>
/tickingarea add <from: x y z> <to: x y z> [name: string]
/tickingarea add circle <center: x y z> <radius: int> [name: string]
/tickingarea remove <position: x y z>
/tickingarea remove <name: string>
/tickingarea remove_all
/tickingarea list [all-dimensions]
/tp <destination: x y z> facing <lookAtPosition: x y z>
/tp <destination: x y z> facing <lookAtEntity: target>
/tp <victim: target> <destination: x y z> facing <lookAtPosition: x y z>
/tp <victim: target> <destination: x y z> facing <lookAtEntity: target>
```

移除 `execute` 的 `detect` 模式。

```
/execute <origin: target> <position: x y z> <detect: string> <detectPos: x y z> <detectBlock: string> <detectData: int> <command: string>
```

移除 `executeasself` 与 `transferserver` 命令。

```
/executeasself <command: string>
/transferserver <server: string> <port: int>
```

整理 `gamerule` 命令的用法，并移除对设置整型游戏规则的支持。

```
/gamerule
/gamerule <rule: BoolGameRule> [true|false]
```

`clone` 等命令支持枚举类型参数。

## 1.1

### 1.1.0.3

添加 `setmaxplayers` 命令。

```
/setmaxplayers <maxPlayers: int>
```

### 1.1.0.0（主版本更新）

整理 `fill` 命令的用法。

```
/fill <from: x y z> <to: x y z> <tileName: string> <tileData: int> <oldBlockHandling: string> <replaceTileName: string> <replaceDataValue: int>
/fill <from: x y z> <to: x y z> <tileName: string> [tileData: int] [oldBlockHandling: string]
```

`give` 命令与 `replaceitem` 命令支持 `components` 参数，用于设置获得物品的物品组件。

```
/give <player: target> <itemName: string> [amount: int] [data: int] [components: components]
/replaceitem <block: string> <position: x y z> <slotType: string> <slotId: int> <itemName: string> [amount: int] [data: int] [components: components]
/replaceitem <entity: string> <target: target> <slotType: string> <slotId: int> <itemName: string> [amount: int] [data: int] [components: components]
```

## 1.0

### 1.0.5.3

> 由于 1.0.5.3 未被记录，以下内容均为根据前后版本情况及相关新闻推测。

移除 `particle` 命令。

### 1.0.5.0

> 由于 1.0.5.0 未被记录，以下内容均为根据前后版本情况及相关新闻推测。

添加 `clear` 等 22 条用法。

```
/clear [player: target] [itemName: string] [data: int] [maxCount: int]
/difficulty <difficulty: int>
/difficulty <difficulty: string>
/effect <player: target> <clear: string>
/effect <player: target> <effect: string> [seconds: int] [amplifier: int] [hideParticles: bool]
/gamerule <rule: string> <value: bool>
/gamerule <rule: string> <value: int>
/gamerule [rule: string]
/me <action: string>
/particle <name: string> <position: x y z> <size: x y z> <speed: float> [count: int]
/playsound <sound: string> <player: target> [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]
/replaceitem <block: string> <position: x y z> <slotType: string> <slotId: int> <itemName: string> [amount: int] [data: int]
/replaceitem <entity: string> <target: target> <slotType: string> <slotId: int> <itemName: string> [amount: int] [data: int]
/spreadplayers <x: rotation> <z: rotation> <spreadDistance: float> <maxRange: float> <victim: target>
/stopsound <player: target> [sound: string]
/testfor <victim: target>
/title <player: target> <actionbar: string> <titleText: string>
/title <player: target> <clear: string>
/title <player: target> <reset: string>
/title <player: target> <subtitle: string> <titleText: string>
/title <player: target> <times: string> <fadeIn: int> <stay: int> <fadeOut: int>
/title <player: target> <title: string> <titleText: string>
```

### 1.0.3.0

添加 ~~`transferserver`~~ 命令。**（已在1.2.0.2中移除）**

```
/transferserver <server: string> <port: int>
```

### 1.0.0.1

更改 `tp` 命令的 `x-rot` 与 `y-rot` 参数的类型。

```
/tp <destination: x y z> [y-rot: rotation] [x-rot: rotation]
/tp <victim: target> <destination: x y z> [y-rot: rotation] [x-rot: rotation]
```

### 1.0.0.0

移除 `list` 命令的 `details` 参数。

```
/list
```

重新加入 `locate` 命令。

`summon` 命令的 `spawnPos` 参数变为可选。

```
/summon <entityType: string> [spawnPos: x y z]
```

### 0.17.0.2

移除 `locate` 命令。

### 0.17.0.1（主版本更新）

将 `execute` 省略目标实体的用法独立为 ~~`executeasself`~~ 命令。**（已在1.2.0.2中移除）**

```
/executeasself <command: string>
```

添加 `locate` 命令。

```
/locate <feature: string>
```

## 0.16

### 0.15.90.8

添加 `enchant` 命令。

```
/enchant <player: target> <enchantmentId: int> [level: int]
/enchant <player: target> <enchantmentName: string> [level: int]
```

### 0.15.90.7

移除 `clearfixedinv` 与 `setfixedinvslot` 命令。

移除 `give` 省略玩家的用法。

```
/give <itemName: string> [amount: int] [data: int]
```

### 0.15.90.0（主版本更新）

添加 `clearfixedinv` 等 38 条用法。

```
/clearfixedinv 
/clone <begin: x y z> <end: x y z> <destination: x y z> [maskMode: string] [cloneMode: string] [tileName: string] [tileData: int]
/deop <player: target>
/execute <command: string>
/execute <origin: target> <position: x y z> <command: string>
/execute <origin: target> <position: x y z> <detect: string> <detectPos: x y z> <detectBlock: string> <detectData: int> <command: string>
/fill <from: x y z> <to: x y z> <tileName: string> [tileData: int] [oldBlockHandling: string] [replaceTileName: string] [replaceDataValue: int]
/gamemode <gameMode: int> [player: target]
/gamemode <gameMode: string> [player: target]
/give <itemName: string> [amount: int] [data: int]
/give <player: target> <itemName: string> [amount: int] [data: int]
/help <command: string>
/help [page: int]
/kill [target: target]
/list [details: string]
/op <player: target>
/say <message: string>
/setblock <position: x y z> <tileName: string> [tileData: int] [oldBlockHandling: string]
/setfixedinvslot <fixedinvslotnum: int> <itemName: string> [data: int]
/setworldspawn [spawnPoint: x y z]
/spawnpoint [player: target] [spawnPos: x y z]
/summon <entityType: string> <spawnPos: x y z>
/tell <recipient: target> <message: string>
/testforblock <position: x y z> <tileName: string> [dataValue: int]
/testforblocks <begin: x y z> <end: x y z> <destination: x y z> [mode: string]
/time add <amount: int>
/time query <time: string>
/time set <time: int>
/time set <time: string>
/toggledownfall 
/tp <destination: target>
/tp <destination: x y z> [y-rot: int] [x-rot: int]
/tp <victim: target> <destination: target>
/tp <victim: target> <destination: x y z> [y-rot: int] [x-rot: int]
/weather <type: string> [duration: int]
/wsserver <serverUri: string>
/xp <amount: int> <player: target>
/xp <amount: int>L <player: target>
```

## 最新版本命令列表

版本：26.0.23

```
/? <page: int>
/? [command: CommandName]
/aimassist <players: target> clear
/aimassist <players: target> set [x angle: float] [y angle: float] [max distance: float] [target mode: AimAssistTargetMode] [preset id: string]
/alwaysday [lock: Boolean]
/camera <players: target> clear
/camera <players: target> fade
/camera <players: target> fade color <red: int> <green: int> <blue: int>
/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float>
/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>
/camera <players: target> fov_clear [fovEaseTime: float] [fovEaseType: Easing]
/camera <players: target> fov_set <fov_value: float> [fovEaseTime: float] [fovEaseType: Easing]
/camera <players: target> remove_target
/camera <players: target> set <preset: string> [default: default]
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> [default: default]
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> pos <position: x y z>
/camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtEntity: target>
/camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtPosition: x y z>
/camera <players: target> set <preset: string> pos <position: x y z> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> rot <xRot: value> <yRot: value> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float>
/camera <players: target> set <preset: string> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>
/camera <players: target> target_entity <entity: target>
/camera <players: target> target_entity <entity: target> target_center_offset <xTargetCenterOffset: float> <yTargetCenterOffset: float> <zTargetCenterOffset: float>
/camerashake add <player: target> [intensity: float] [seconds: float] [shakeType: CameraShakeType]
/camerashake stop [player: target]
/clear [player: target] [itemName: Item] [data: int] [maxCount: int]
/clearspawnpoint [player: target]
/clone <begin: x y z> <end: x y z> <destination: x y z> [maskMode: MaskMode] [cloneMode: CloneMode]
/clone <begin: x y z> <end: x y z> <destination: x y z> filtered <cloneMode: CloneMode> <tileName: Block> [blockStates: block states]
/connect <serverUri: text>
/controlscheme <players: target> clear
/controlscheme <players: target> set <control scheme: controlscheme>
/damage <target: target> <amount: int> <cause: DamageCause> entity <damager: target>
/damage <target: target> <amount: int> [cause: DamageCause]
/daylock [lock: Boolean]
/deop <player: target>
/dialogue change <npc: target> <sceneName: string> [players: target]
/dialogue open <npc: target> <player: target> [sceneName: string]
/difficulty <difficulty: Difficulty>
/difficulty <difficulty: int>
/effect <player: target> <effect: Effect> [seconds: int] [amplifier: int] [hideParticles: Boolean]
/effect <player: target> <effect: Effect> infinite [amplifier: int] [hideParticles: Boolean]
/effect <player: target> clear [effect: Effect]
/enchant <player: target> <enchantmentId: int> [level: int]
/enchant <player: target> <enchantmentName: Enchant> [level: int]
/event entity <target: target> <eventName: string>
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <blockStates: block states> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> blocks <begin: x y z> <end: x y z> <destination: x y z> <scan mode: BlocksScanMode> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> entity <target: target> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> score <target: target> <objective: string> <operation: compare operator> <source: target> <objective: string> [chainedCommand: ExecuteChainedOption_0]
/execute <subcommand: Option_If_Unless> score <target: target> <objective: string> matches <range: integer range> [chainedCommand: ExecuteChainedOption_0]
/execute align <axes: string> <chainedCommand: ExecuteChainedOption_0>
/execute anchored <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
/execute as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute at <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute facing <position: x y z> <chainedCommand: ExecuteChainedOption_0>
/execute facing entity <origin: target> <eyes|feet> <chainedCommand: ExecuteChainedOption_0>
/execute in <dimension: Dimension> <chainedCommand: ExecuteChainedOption_0>
/execute positioned <position: x y z> <chainedCommand: ExecuteChainedOption_0>
/execute positioned as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute rotated <yaw: value> <pitch: value> <chainedCommand: ExecuteChainedOption_0>
/execute rotated as <origin: target> <chainedCommand: ExecuteChainedOption_0>
/execute run <command: command>
/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states> [oldBlockHandling: FillMode]
/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states> replace [replaceTileName: Block] [replaceBlockStates: block states]
/fill <from: x y z> <to: x y z> <tileName: Block> [oldBlockHandling: FillMode]
/fill <from: x y z> <to: x y z> <tileName: Block> replace [replaceTileName: Block] [replaceBlockStates: block states]
/fog <victim: target> <mode: delete> <userProvidedId: string>
/fog <victim: target> push <fogId: string> <userProvidedId: string>
/function <name: filepath>
/gamemode <gameMode: GameMode> [player: target]
/gamemode <gameMode: int> [player: target]
/gamerule
/gamerule <rule: BoolGameRule> [value: Boolean]
/gamerule <rule: IntGameRule> [value: int]
/gametest clearall
/gametest create <testName: string> [width: int] [height: int] [depth: int]
/gametest pos
/gametest run <testName: string> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]
/gametest run <testName: string> [rotationSteps: int]
/gametest runset [tag: string] [rotationSteps: int]
/gametest runsetuntilfail [tag: string] [rotationSteps: int]
/gametest runthese
/gametest runthis
/gametest stopall
/give <player: target> <itemName: Item> [amount: int] [data: int] [components: json]
/help <page: int>
/help [command: CommandName]
/hud <target: target> <visible: HudVisibility> [hud_element: HudElement]
/inputpermission query <targets: target> <permission: permission> [state: state]
/inputpermission set <targets: target> <permission: permission> <state: state>
/kick <name: target> <reason: message>
/kill [target: target]
/list
/locate biome <biome: Biome>
/locate structure <structure: string> [useNewChunksOnly: Boolean]
/loot give <players: target> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot give <players: target> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot give <players: target> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot insert <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot insert <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot insert <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot replace block <position: x y z> slot.container <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/loot spawn <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: string]
/loot spawn <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: string]
/loot spawn <position: x y z> mine <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: string]
/me <message: message>
/mobevent <event: MobEvent> [value: Boolean]
/msg <target: target> <message: message>
/music play <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]
/music queue <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]
/music stop [fadeSeconds: float]
/music volume <volume: float>
/op <player: target>
/packstack <stackType: stackType> [verbose: verbose] [exclude-vanilla: exclude-vanilla]
/particle <effect: string> [position: x y z]
/place feature <feature: features> [position: x y z]
/place featurerule <featurerule: featureRules> [position: x y z]
/place jigsaw <pool: filepath> <jigsawTarget: string> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: LiquidSettings]
/place structure <structure: string> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: LiquidSettings]
/playanimation <entity: target> <animation: string> [next_state: string] [blend_out_time: float] [stop_expression: string] [controller: string]
/playsound <sound: string> [player: target] [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]
/recipe give <player: target> <recipe: string>
/recipe take <player: target> <recipe: string>
/reload [all: reload_all]
/replaceitem block <position: x y z> slot.container <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]
/replaceitem block <position: x y z> slot.container <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]
/replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]
/replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]
/ride <riders: target> start_riding <ride: target> [teleportRules: TeleportRules] [howToFill: FillType]
/ride <riders: target> stop_riding
/ride <riders: target> summon_ride <entityType: EntityType> [rideRules: RideRules] [spawnEvent: string] [nameTag: string]
/ride <rides: target> evict_riders
/ride <rides: target> summon_rider <entityType: EntityType> [spawnEvent: string] [nameTag: string]
/say <message: message>
/schedule clear <function: filepath>
/schedule delay add <function: filepath> <time: int> [replace|append]
/schedule delay add <function: filepath> <time: int>D [replace|append]
/schedule delay add <function: filepath> <time: int>S [replace|append]
/schedule delay add <function: filepath> <time: int>T [replace|append]
/schedule delay clear <function: filepath>
/schedule on_area_loaded add <from: x y z> <to: x y z> <function: filepath>
/schedule on_area_loaded add circle <center: x y z> <radius: int> <function: filepath>
/schedule on_area_loaded add tickingarea <name: string> <function: filepath>
/schedule on_area_loaded clear function <function: filepath>
/schedule on_area_loaded clear tickingarea <name: string> [function: filepath]
/scoreboard objectives add <objective: string> dummy [displayName: string]
/scoreboard objectives list
/scoreboard objectives remove <objective: string>
/scoreboard objectives setdisplay <list|sidebar> [objective: string] [ascending|descending]
/scoreboard objectives setdisplay belowname [objective: string]
/scoreboard players <set|add|remove> <player: target> <objective: string> <count: int>
/scoreboard players list [playername: target]
/scoreboard players operation <targetName: target> <targetObjective: string> <operation: operator> <selector: target> <objective: string>
/scoreboard players random <player: target> <objective: string> <min: int> <max: int>
/scoreboard players reset <player: target> [objective: string]
/scoreboard players test <player: target> <objective: string> <min: wildcard int> [max: wildcard int]
/script debugger close
/script debugger connect [host: string] [port: int]
/script debugger listen <port: int>
/script diagnostics startcapture
/script diagnostics stopcapture
/script profiler start
/script profiler stop
/scriptevent <messageId: string> <message: message>
/setblock <position: x y z> <tileName: Block> <blockStates: block states> [replace|destroy|keep]
/setblock <position: x y z> <tileName: Block> [replace|destroy|keep]
/setmaxplayers <maxPlayers: int>
/setworldspawn [spawnPoint: x y z]
/spawnpoint [player: target] [spawnPos: x y z]
/spreadplayers <x: value> <z: value> <spreadDistance: float> <maxRange: float> <victim: target> [maxHeight: value]
/stopsound <player: target> [sound: string]
/structure delete <name: string>
/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [animationMode: StructureAnimationMode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]
/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]
/structure save <name: string> <from: x y z> <to: x y z> [includeEntities: Boolean] [saveMode: StructureSaveMode] [includeBlocks: Boolean]
/structure save <name: string> <from: x y z> <to: x y z> [saveMode: StructureSaveMode]
/summon <entityType: EntityType> <nameTag: string> [spawnPos: x y z]
/summon <entityType: EntityType> [spawnPos: x y z] [yRot: value] [xRot: value] [spawnEvent: string] [nameTag: string]
/summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtEntity: target> [spawnEvent: string] [nameTag: string]
/summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtPosition: x y z> [spawnEvent: string] [nameTag: string]
/tag <entity: target> <add|remove> <name: string>
/tag <entity: target> list
/teleport <destination: target>
/teleport <destination: x y z> [checkForBlocks: Boolean]
/teleport <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean]
/teleport <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean]
/teleport <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean]
/teleport <victim: target> <destination: target> [checkForBlocks: Boolean]
/teleport <victim: target> <destination: x y z> [checkForBlocks: Boolean]
/teleport <victim: target> <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean]
/teleport <victim: target> <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean]
/teleport <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean]
/tell <target: target> <message: message>
/tellraw <target: target> <raw json message: json>
/testfor <victim: target>
/testforblock <position: x y z> <tileName: Block> [blockStates: block states]
/testforblocks <begin: x y z> <end: x y z> <destination: x y z> [masked|all]
/tickingarea add <from: x y z> <to: x y z> [name: string] [preload: Boolean]
/tickingarea add circle <center: x y z> <radius: int> [name: string] [preload: Boolean]
/tickingarea list [all-dimensions: AllDimensions]
/tickingarea preload <name: string> [preload: Boolean]
/tickingarea preload <position: x y z> [preload: Boolean]
/tickingarea remove <name: string>
/tickingarea remove <position: x y z>
/tickingarea remove_all
/time add <amount: int>
/time query <time: TimeQuery>
/time set <amount: int>
/time set <time: TimeSpec>
/title <player: target> <title|subtitle|actionbar> <titleText: message>
/title <player: target> clear
/title <player: target> reset
/title <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>
/titleraw <player: target> <titleLocation: TitleRawSet> <raw json titleText: json>
/titleraw <player: target> clear
/titleraw <player: target> reset
/titleraw <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>
/toggledownfall
/tp <destination: target>
/tp <destination: x y z> [checkForBlocks: Boolean]
/tp <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean]
/tp <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean]
/tp <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean]
/tp <victim: target> <destination: target> [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean]
/w <target: target> <message: message>
/weather <clear|rain|thunder> [duration: int]
/weather query
/wsserver <serverUri: text>
/xp <amount: int> [player: target]
/xp <amount: int>L [player: target]
```

启用教育版选项后还会添加以下命令语法：
```
/ability <player: target> <ability: Ability> <value: Boolean>
/ability <player: target> [ability: Ability]
/immutableworld [value: Boolean]
/wb
/worldbuilder
```

启用创建者照相机的实验性功能（Experimental Creator Camera Features）后还会添加以下命令语法：
```
/camera <players: target> attach_to_entity <entity: target>
/camera <players: target> detach_from_entity
```

## 中国版所对应的国际版一览

> 发布日期以 TapTap 平台与 AppStore 的数据为准，仅统计正式版
> 待补充。

|中国版版本|发布日期|对应国际版版本|
|---|---|---|
|2.1.5.162567|2022-04-15|1.17.3.0.0|
|2.0.0.153450|2022-01-21|1.17.2.0.0|
|1.25.5.146956|2021-11-18|1.16.203.2.0|
|1.24.5.141220|2021-09-17|1.16.202.2.0|
|1.23.5.129766|2021-06-29|1.16.201.2.0|
|1.22.10.122057|2021-04-04|1.16.12.2.0|
|1.21.5.115731|2021-01-27|1.16.10.2.0|
|1.20.5.109731|2020-11-26|1.14.32.0.0|
|1.19.10.105182|2020-09-21|1.14.31.0.0|
|1.18.10.99153|2020-07-16|1.14.30.0.0|
|1.17.5.91142|2020-04-28|1.13.4.0.0|
|1.16.5.84547|2020-01-15|1.13.3.0.0|
|1.15.0.75495|2019-10-08|1.12.0.28.1|
|1.14.0.68012|2019-07-03|1.11.4.2|
|1.13.0.64213|2019-05-10|1.9.1.15|
|1.12.4.60355|2019-04-03|1.9.0.15|
|1.11.0.55312|2019-01-23|1.8.1.1|
|1.10.0.52467|2018-12-19|1.7.0.13|
|1.8.0.47903|2018-09-26|1.6.2.0|
|1.7.0.45722|2018-08-08|1.5.2.0|
|1.6.1.43535|2018-07-05|1.4.1.5|
|1.0.0.35545|2018-01-24|1.2.5.50|
|在此之前的版本|2017-11-23|1.1.3.52|

## 本日志未记录的版本

|版本|未包含原因|
|---|---|
|1.0.5.0|启动后程序崩溃|
|1.0.5.3|启动后程序崩溃|
|1.8.0.8|打开聊天界面后程序崩溃|
|1.12.0.27|无法进入游戏主界面|
|1.12.0.28|无法进入游戏主界面|
|1.16.200.54|进入主界面后程序崩溃|
|1.21.50.22|测试版发成正式版了|
