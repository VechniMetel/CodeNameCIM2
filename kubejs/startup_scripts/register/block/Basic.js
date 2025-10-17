StartupEvents.registry("block", (event) => {
	/**
	 * 
	 * @param {String} name 注册id
	 * @param {"basic" | "detector" | "slab" | "stairs" | "fence" | "wall" | "fence_gate" | "pressure_plate" | "button" | "falling" | "crop" | "cardinal" | "carpet" | "animatable" | "custommachinery"} type 注册类型
	 */
	function addBlock(name, type) {
		if (type === undefined) {
			return event.create(`${global.namespace}:${name}`)
		}
		return event.create(`${global.namespace}:${name}`, type)
	}

	// 催生器
	addBlock("accelerator")
		.soundType(SoundType.METAL)
		.hardness(4)
		.resistance(4)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["wooden"])
		.tagBlock(global.WRENCH_PICKUP)
		.requiresTool(true)

	// 背景
	addBlock("green_screen")
		.lightLevel(15)

	// 锇砖瓦
	addBlock("osmium_tile")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["iron"])
		.requiresTool(true)

	// 泥炭
	addBlock("peat_block")
		.soundType(SoundType.MUD)
		.hardness(1)
		.resistance(1)
		.tagBlock(global.ToolType["shovel"])
		.tagBlock(global.MiningLevel["wooden"])
		.tagBlock("minecraft:dirt")
		.tag("minecraft:stone")

	// 油页岩
	addBlock("oil_shale")
		.soundType(SoundType.DEEPSLATE)
		.hardness(15)
		.resistance(15)
		.tagBlock(global.MiningLevel["nether"])
		.tagBlock(global.ToolType["pickaxe"])
		.requiresTool(true)

	// 压缩末地粉块
	addBlock("compression_end_stone_dust_block")
		.soundType(SoundType.SAND)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["wooden"])
		.requiresTool(true)

	// 燃烧介质块
	addBlock("combustion_medium_block")
		.soundType(SoundType.STONE)
		.hardness(3)
		.resistance(3)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["stone"])

	// 坩埚底座
	addBlock("crucible_base")
		.textureAll(`${global.namespace}:block/crucible/top`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["iron"])
		.requiresTool(true)

	// 坩埚风口
	addBlock("crucible_tuyere")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["iron"])
		.requiresTool(true)

	// 青铜外壳
	addBlock("bronze_casing")
		.textureAll(`${global.namespace}:block/casing/bronze/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.WRENCH_PICKUP)

	// 耐压外壳
	addBlock("pressure_resistance_casing")
		.textureAll(`${global.namespace}:block/casing/pressure_resistance/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.WRENCH_PICKUP)

	// 陨石外壳
	addBlock("sky_stone_casing")
		.textureAll(`${global.namespace}:block/casing/ae2/smart`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.WRENCH_PICKUP)

	// 高级计算外壳
	addBlock("computing_casing")
		.textureAll(`${global.namespace}:block/casing/ae2/computing_top`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.WRENCH_PICKUP)

	// 雷达
	addBlock("radar")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(5)
		.resistance(5)
		.tagBlock(global.WRENCH_PICKUP)
		.box(6, 0, 6, 10, 16, 10, true)

	// 辐射沙
	addBlock("radsand")
		.textureAll(`${global.namespace}:block/radsand`)
		.soundType(SoundType.SAND)
		.hardness(0.5)
		.resistance(0.5)
		.tagBlock("minecraft:sand")
		.tagBlock(global.ToolType["shovel"])

	// 破损钻头
	addBlock("broken_andesite_drill_head")
		.model(`${global.namespace}:block/drill/broken_andesite_drill_head`)
		.soundType(SoundType.STONE)
		.hardness(3)
		.resistance(3)
		.box(2, 1, 2, 14, 3, 14, true)
		.box(3, 3, 3, 13, 6, 13, true)
		.box(4, 6, 4, 12, 9, 12, true)
		.box(5, 9, 5, 11, 12, 11, true)
		.box(6, 12, 6, 10, 15, 10, true)
		.box(7, 15, 7, 9, 18, 9, true)
		.box(6, 1, 1, 10, 7, 3, true)
		.box(6, 1, 13, 10, 7, 15, true)
		.box(13, 1, 6, 15, 7, 10, true)
		.box(1, 1, 6, 3, 7, 10, true)
		.box(4, 0, 4, 12, 1, 6, true)
		.box(4, 0, 10, 12, 1, 12, true)
		.box(10, 0, 6, 12, 1, 10, true)
		.box(4, 0, 6, 6, 1, 10, true)
		.requiresTool()
		.notSolid()
		.tagBlock(global.MiningLevel["wooden"])
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.WRENCH_PICKUP)
		.tag(`${global.namespace}:broken_drill_heads`)

	addBlock("broken_copper_drill_head")
		.model(`${global.namespace}:block/drill/broken_copper_drill_head`)
		.soundType(SoundType.METAL)
		.hardness(3)
		.resistance(3)
		.box(2, 1, 2, 14, 3, 14, true)
		.box(3, 3, 3, 13, 6, 13, true)
		.box(4, 6, 4, 12, 9, 12, true)
		.box(5, 9, 5, 11, 12, 11, true)
		.box(6, 12, 6, 10, 15, 10, true)
		.box(7, 15, 7, 9, 18, 9, true)
		.box(6, 1, 1, 10, 7, 3, true)
		.box(6, 1, 13, 10, 7, 15, true)
		.box(13, 1, 6, 15, 7, 10, true)
		.box(1, 1, 6, 3, 7, 10, true)
		.box(4, 0, 4, 12, 1, 6, true)
		.box(4, 0, 10, 12, 1, 12, true)
		.box(10, 0, 6, 12, 1, 10, true)
		.box(4, 0, 6, 6, 1, 10, true)
		.requiresTool()
		.notSolid()
		.tagBlock(global.MiningLevel["stone"])
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.WRENCH_PICKUP)
		.tag(`${global.namespace}:broken_drill_heads`)

	addBlock("broken_brass_drill_head")
		.model(`${global.namespace}:block/drill/broken_brass_drill_head`)
		.soundType(SoundType.METAL)
		.hardness(4)
		.resistance(3)
		.box(2, 1, 2, 14, 3, 14, true)
		.box(3, 3, 3, 13, 6, 13, true)
		.box(4, 6, 4, 12, 9, 12, true)
		.box(5, 9, 5, 11, 12, 11, true)
		.box(6, 12, 6, 10, 15, 10, true)
		.box(7, 15, 7, 9, 18, 9, true)
		.box(6, 1, 1, 10, 7, 3, true)
		.box(6, 1, 13, 10, 7, 15, true)
		.box(13, 1, 6, 15, 7, 10, true)
		.box(1, 1, 6, 3, 7, 10, true)
		.box(4, 0, 4, 12, 1, 6, true)
		.box(4, 0, 10, 12, 1, 12, true)
		.box(10, 0, 6, 12, 1, 10, true)
		.box(4, 0, 6, 6, 1, 10, true)
		.requiresTool()
		.notSolid()
		.tagBlock(global.MiningLevel["stone"])
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.WRENCH_PICKUP)
		.tag(`${global.namespace}:broken_drill_heads`)
})