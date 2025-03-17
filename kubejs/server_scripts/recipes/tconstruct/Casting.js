// TODO
ServerEvents.recipes((event) => {
	// iron
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"tag": "minecraft:logs"
		},
		"cooling_time": 50,
		"fluid": {
			"amount": 180,
			"fluid": "tconstruct:molten_iron"
		},
		"result": "ue_addons:incomplete_iron_mechanism"
	})

	// copper
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"tag": "minecraft:logs"
		},
		"cooling_time": 50,
		"fluid": {
			"amount": 180,
			"fluid": "tconstruct:molten_copper"
		},
		"result": "ue_addons:incomplete_copper_mechanism"
	})

	// gold
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"tag": "minecraft:logs"
		},
		"cooling_time": 50,
		"fluid": {
			"amount": 180,
			"fluid": "tconstruct:molten_gold"
		},
		"result": "ue_addons:incomplete_gold_mechanism"
	})
	
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"item": "ue_addons:wooden_mechanism"
		},
		"cast_consumed": true,
		"cooling_time": 57,
		"fluid": {
			"amount": 90,
			"fluid": "tconstruct:molten_gold"
		},
		"result": "ue_addons:mechanism_cast",
		"switch_slots": true
	})
})