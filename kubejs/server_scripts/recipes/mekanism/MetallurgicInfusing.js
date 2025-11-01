ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 灌注合金
	mekanism.metallurgic_infusing(
		"mekanism:alloy_infused",
		"#forge:ingots/signalum"
	).chemicalInput({ infuse_type: "mekanism:redstone", amount: 10 })

	// 高级控制电路
	mekanism.metallurgic_infusing(
		"#forge:circuits/advanced",
		"cmi:incomplete_advanced_control_circuit"
	).chemicalInput({ infuse_type: "mekanism:redstone", amount: 40 })

	// 强化合金
	mekanism.metallurgic_infusing(
		"mekanism:alloy_reinforced",
		"#forge:ingots/etrium"
	).chemicalInput({ infuse_type: "mekanism:diamond", amount: 40 })

	// 碳化硅
	mekanism.metallurgic_infusing(
		"cmi:silicon_carbide",
		"#forge:silicon"
	).chemicalInput({ infuse_type: "mekanism:carbon", amount: 40 })
})