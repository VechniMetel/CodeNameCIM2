ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.crucible(Fluid.of("tconstruct:seared_stone", 250), "tconstruct:grout")
		.energy(2000)
		.id("kubejs:thermal/crucible/grout_to_seared_stone")

	thermal.crucible(Fluid.of("tconstruct:scorched_stone", 250), "tconstruct:nether_grout")
		.energy(2000)
		.id("kubejs:thermal/crucible/nether_grout_to_scorched_stone")

	thermal.crucible(Fluid.of("tconstruct:liquid_soul", 1000), "#minecraft:soul_fire_base_blocks")
		.energy(2000)
		.id("kubejs:thermal/crucible/soul_fire_base_to_liquid_soul")

	thermal.crucible(Fluid.of("tconstruct:liquid_soul", 1000), "tconstruct:soul_glass")
		.energy(2000)
		.id("kubejs:thermal/crucible/soul_glass_to_liquid_soul")

	thermal.crucible(Fluid.of("tconstruct:liquid_soul", 250), "tconstruct:soul_glass_pane")
		.energy(500)
		.id("kubejs:thermal/crucible/soul_glass_pane_to_liquid_soul")
})