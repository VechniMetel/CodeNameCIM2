global.addThermalMetalRecipes = (event, metal) => {
	const { thermal } = event.recipes
	const ingot = global.getFirstItem(`#forge:ingots/${metal}`)
	if (ingot.isEmpty()) return

	if (!global.tagIsEmpty(`#forge:ores/${metal}`)) {
		thermal.smelter([ingot.withCount(2), Item.of("thermal:rich_slag").withChance(0.2)], `#forge:ores/${metal}`)
	}
	if (!global.tagIsEmpty(`#forge:raw_materials/${metal}`)) {
		thermal.smelter([ingot.withChance(1.5)], `#forge:raw_materials/${metal}`)
	}
	
	if (!global.tagIsEmpty(`#forge:dusts/${metal}`)) {
		const dust = global.getFirstItem(`#forge:dusts/${metal}`)
		if (!dust.isEmpty()) {
			thermal.pulverizer(dust, ingot).energy(2000)
			thermal.smelter(ingot, dust).energy(1600)
			if (!global.tagIsEmpty(`#forge:raw_materials/${metal}`)) {
				thermal.pulverizer(dust.withChance(1.25), `#forge:raw_materials/${metal}`)
			}
			if (!global.tagIsEmpty(`#forge:ores/${metal}`)) {
				thermal.pulverizer(dust.withCount(2), `#forge:ores/${metal}`)
			}
		}
	}

	if (!global.tagIsEmpty(`#forge:plates/${metal}`)) {
		const plate = global.getFirstItem(`#forge:plates/${metal}`)
		if (!plate.isEmpty()) {
			thermal.press(plate, ingot)
			thermal.smelter(ingot, plate).energy(1600)
		}
	}
	if (!global.tagIsEmpty(`#forge:rods/${metal}`)) {
		const rod = global.getFirstItem(`#forge:rods/${metal}`)
		if (!rod.isEmpty()) {
			thermal.press(rod.withCount(2), [ingot, "thermal_extra:press_rod_die"])
		}
	}
	if (!global.tagIsEmpty(`#forge:gears/${metal}`)) {
		const gear = global.getFirstItem(`#forge:gears/${metal}`)
		if (!gear.isEmpty()) {
			thermal.press(gear, [Item.of(ingot, 4), "thermal:press_gear_die"])
			thermal.smelter(Item.of(ingot, 4), gear)
		}
	}
	if (!global.tagIsEmpty(`#forge:coins/${metal}`)) {
		const coin = global.getFirstItem(`#forge:coins/${metal}`)
		if (!coin.isEmpty()) {
			thermal.press(coin.withCount(3), [ingot, "thermal:press_coin_die"])
			if (!global.tagIsEmpty(`#forge:nuggets/${metal}`)) {
				const nugget = global.getFirstItem(`#forge:nuggets/${metal}`)
				if (!nugget.isEmpty()) {
					thermal.press(coin, [nugget.withCount(3), "thermal:press_coin_die"]).energy(800)
					thermal.smelter(nugget.withCount(3), coin).energy(800)
				}
			}
		}
	}
}