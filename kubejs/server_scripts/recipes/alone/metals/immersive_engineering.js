global.addImmersiveEngineeringMetalRecipes = (event, metal) => {
	const { immersiveengineering } = event.recipes
	const ingot = global.getFirstItem(`#forge:ingots/${metal}`)

	if (ingot.isEmpty()) return

	if (!global.tagIsEmpty(`#forge:ores/${metal}`)) {
		immersiveengineering.arc_furnace(ingot.withCount(2), `#forge:ores/${metal}`, [], "#forge:slag", 200, 102400, [])
	}
	if (!global.tagIsEmpty(`#forge:raw_materials/${metal}`)) {
		immersiveengineering.arc_furnace(ingot, `#forge:raw_materials/${metal}`, [ingot.withChance(0.5)], "#forge:slag", 900, 230400, [])
	}
	if (!global.tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
		immersiveengineering.arc_furnace(ingot.withCount(13), `#forge:storage_blocks/raw_${metal}`, [ingot.withChance(0.5)], "#forge:slag", 1800, 204800, [])
	}

	if (!global.tagIsEmpty(`#forge:dusts/${metal}`)) {
		const dust = global.getFirstItem(`#forge:dusts/${metal}`)
		if (!dust.isEmpty()) {
			immersiveengineering.crusher(dust, `#forge:ingots/${metal}`, [], 6000)
			if (!global.tagIsEmpty(`#forge:raw_materials/${metal}`)) {
				immersiveengineering.crusher(dust, `#forge:raw_materials/${metal}`, [dust.withChance(0.333)], 6000)
			}
			if (!global.tagIsEmpty(`#forge:ores/${metal}`)) {
				immersiveengineering.crusher(dust.withCount(2), `#forge:ores/${metal}`, [], 6000)
			}
			if (!global.tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
				immersiveengineering.crusher(dust.withCount(12), `#forge:storage_blocks/raw_${metal}`, [], 6000)
			}
		}
	}

	if (!global.tagIsEmpty(`#forge:plates/${metal}`)) {
		const plate = global.getFirstItem(`#forge:plates/${metal}`)
		if (!plate.isEmpty()) {
			immersiveengineering.metal_press(plate, ingot, "immersiveengineering:mold_plate")
		}
	}
	if (!global.tagIsEmpty(`#forge:rods/${metal}`)) {
		const rod = global.getFirstItem(`#forge:rods/${metal}`)
		if (!rod.isEmpty()) {
			immersiveengineering.metal_press(rod.withCount(2), ingot, "immersiveengineering:mold_rod")
		}
	}
	if (!global.tagIsEmpty(`#forge:gears/${metal}`)) {
		const gear = global.getFirstItem(`#forge:gears/${metal}`)
		if (!gear.isEmpty()) {
			immersiveengineering.metal_press(gear, Item.of(ingot, 4), "immersiveengineering:mold_gear")
		}
	}
}