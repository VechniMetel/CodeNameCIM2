ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	// 德尔塔溶液
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [
			{
				"base_ingredient": {
					"item": "cmi:blackstone_source_alpha"
				},
				"count": 1
			},
			{
				"base_ingredient": {
					"item": "cmi:blackstone_source_beta"
				},
				"count": 1
			},
			{
				"base_ingredient": {
					"item": "cmi:blackstone_source_gamma"
				},
				"count": 1
			}
		],
		"result_fluids": [
			{
				"fluid": "cmi:delta_unstable_solution",
				"amount": 500
			},
		],
		"time": 600
	})

	// 粗制铂微粒
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"fluid": {
			"tag": "cmi:delta_unstable_solution",
			"amount": 1000
		},
		"result_fluid": {
			"fluid": "cmi:turbid_waste_liquid",
			"amount": 1000
		},
		"input": {
			"item": "cmi:compression_end_stone_dust_block"
		},
		"result": {
			"item": "cmi:raw_platinum_particles",
			"count": 2
		},
		"large_only": true,
		"time": 600
	})

	// 钢齿轮镀铬
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"input": {
			"tag": "forge:gears/steel"
		},
		"fluid": {
			"tag": "forge:solutions/chromium/chloride",
			"amount": 1000
		},
		"result_fluid": {
			"fluid": "cmi:hydrochloric_acid",
			"amount": 500
		},
		"result": {
			"item": "cmi:chrome-plated_steel_gear",
			"count": 1
		},
		"large_only": true,
		"time": 100
	})

	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"input": {
			"tag": "forge:gears/steel"
		},
		"fluid": {
			"tag": "forge:solutions/chromium/sulfate",
			"amount": 1000
		},
		"result_fluid": {
			"fluid": "mekanism:sulfuric_acid",
			"amount": 500
		},
		"result": {
			"item": "cmi:chrome-plated_steel_gear",
			"count": 1
		},
		"large_only": true,
		"time": 100
	})


	// 熔融铂
	event.custom({
		"type": "immersiveindustry:chemical",
		"input_fluids": [
			{
				"tag": "forge:redstone_acid",
				"amount": 500
			},
			{
				"tag": "cmi:platinum_solution",
				"amount": 500
			},
			{
				"tag": "cmi:delta_unstable_solution",
				"amount": 500
			}
		],
		"result_fluids": [
			{
				"fluid": "tconstruct:molten_platinum",
				"amount": 1500
			}
		],
		"time": 300
	})

	// 钢锭
	immersiveengineering.arc_furnace("#forge:ingots/steel")
		.input("#forge:ingots/iron")
		.energy(10240)
		.slag("#forge:slag")
		.time(20)

	// 钢块
	immersiveengineering.arc_furnace("#forge:storage_blocks/steel")
		.input("#forge:storage_blocks/iron")
		.energy(10240)
		.slag("#forge:slag")
		.time(100)

	// 生石灰
	immersiveengineering.blast_furnace("4x cmi:lime")
		.input("create:limestone")
		.time(30)
})