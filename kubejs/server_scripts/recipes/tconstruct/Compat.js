ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	// 机壳
	tconstruct.casting_basin("create:andesite_casing")
		.fluid(Fluid.of("cmi:molten_andesite_alloy", 45))
		.cast("#minecraft:logs")
		.cooling_time(40)
		.cast_consumed(true)

	tconstruct.casting_basin("create:copper_casing")
		.fluid(Fluid.of("tconstruct:molten_copper", 45))
		.cast("#forge:treated_wood")
		.cooling_time(40)
		.cast_consumed(true)

	tconstruct.casting_basin("create:brass_casing")
		.fluid(Fluid.of("tconstruct:molten_brass", 45))
		.cast("#minecraft:logs")
		.cooling_time(40)
		.cast_consumed(true)

	tconstruct.casting_basin("create:railway_casing")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 45))
		.cast("create:brass_casing")
		.cooling_time(40)
		.cast_consumed(true)

	// 不稳定红石
	tconstruct.melting(Fluid.of("thermal:redstone", 100))
		.ingredient("#forge:dusts/redstone")
		.time(20 * 5)
		.temperature(800)

	tconstruct.melting(Fluid.of("thermal:redstone", 900))
		.ingredient("#forge:storage_blocks/redstone")
		.time(20 * 5)
		.temperature(800)
})