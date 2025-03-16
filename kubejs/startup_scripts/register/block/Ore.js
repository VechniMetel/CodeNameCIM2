StartupEvents.registry("block", (event) => {

	// 挖掘等级
	let miningLevel = {
		wooden: "minecraft:needs_wooden_tool",
		stone: "minecraft:needs_stone_tool",
		iron: "minecraft:needs_iron_tool",
		gold: "minecraft:needs_gold_tool",
		diamond: "minecraft:needs_diamond_tool",
		nether: "forge:needs_netherite_tool"
	}

	let pickaxe = "minecraft:mineable/pickaxe"

	function addAloneOreBlock(name, level) {
		event.create(`${global.namespace}:${name}_ore`)
			.textureAll(`${global.namespace}:block/ore/${name}/ore`)
			.soundType(SoundType.STONE)
			.hardness(3)
			.resistance(3)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/dense")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)

		event.create(`${global.namespace}:deepslate_${name}_ore`)
			.textureAll(`${global.namespace}:block/ore/${name}/deepslate`)
			.soundType(SoundType.DEEPSLATE)
			.hardness(4.4)
			.resistance(4.5)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/deepslate")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)
	}


	addAloneOreBlock("quartz", "iron")
})