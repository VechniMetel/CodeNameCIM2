ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.mixing(Fluid.of("immersiveengineering:redstone_acid", 250), [
		"#forge:dusts/redstone",
		Fluid.of("minecraft:water", 250)
	])

	// 聚烯烃
	event.custom({
		"type": "immersiveindustry:chemical",
		"input_fluids": [
			{
				"tag": "forge:ethene",
				"amount": 1000
			}
		],
		"outputs": [
			{
				"item": "mekanism:hdpe_sheet",
				"count": 1
			}
		],
		"time": 200
	})
})