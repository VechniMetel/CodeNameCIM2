ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	// 机壳
	tconstruct.casting_basin("create:andesite_casing")
		.fluid(Fluid.of("cmi:molten_andesite_alloy", 90))
		.cast("#minecraft:logs")
		.cooling_time(40)
		.cast_consumed(true)

	tconstruct.casting_basin("create:copper_casing")
		.fluid(Fluid.of("tconstruct:molten_copper", 90))
		.cast("#forge:treated_wood")
		.cooling_time(40)
		.cast_consumed(true)

	tconstruct.casting_basin("create:brass_casing")
		.fluid(Fluid.of("tconstruct:molten_brass", 90))
		.cast("#minecraft:logs")
		.cooling_time(40)
		.cast_consumed(true)

	tconstruct.casting_basin("create:railway_casing")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 90))
		.cast("create:brass_casing")
		.cooling_time(40)
		.cast_consumed(true)
})