StartupEvents.registry("block", (event) => {
	event.create(`${global.namespace}:the_accelerator_of_mechanism_power`)
		.soundType(SoundType.METAL)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["wooden"])
		.requiresTool(true)

	let machineBlockRegister = [
		"andesite",
		"brass",
		"copper",
		"me",
		"mekanism"
	]
	machineBlockRegister.forEach((type) => {
		event.create(`${global.namespace}:${type}_machine`, "cardinal")
			.soundType(SoundType.METAL)
			.tagBlock(global.toolType["pickaxe"])
			.tagBlock(global.miningLevel["wooden"])
			.requiresTool(true)
			.notSolid()
	})

	// 锇砖瓦
	event.create(`${global.namespace}:osmium_tile`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 压缩末地粉块
	event.create(`${global.namespace}:compression_end_stone_dust_block`)
		.soundType(SoundType.SAND)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["wooden"])
		.requiresTool(true)

	// 坩埚底座
	event.create(`${global.namespace}:crucible_base`)
		.textureAll(`${global.namespace}:block/crucible/top`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 坩埚风口
	event.create(`${global.namespace}:crucible_tuyere`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)
})