global.addCreateMetalRecipes = (event, metal) => {
	const { create } = event.recipes
	const ingot = global.getFirstItem(`#forge:ingots/${metal}`)
	if (ingot.isEmpty()) return

	if (!global.tagIsEmpty(`#create:crushed_raw_materials/${metal}`)) {
		const crushed = global.getFirstItem(`#create:crushed_raw_materials/${metal}`)
		if (!crushed.isEmpty()) {
			if (!global.tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
				create.crushing([crushed.withCount(9), Item.of("create:experience_nugget", 9).withChance(0.75)], `#forge:storage_blocks/raw_${metal}`)
			}
			if (!global.tagIsEmpty(`#forge:raw_materials/${metal}`)) {
				create.crushing([crushed, Item.of("create:experience_nugget").withChance(0.75)], `#forge:raw_materials/${metal}`)
			}
			if (!global.tagIsEmpty(`#forge:ores/${metal}`)) {
				create.crushing([crushed, crushed.withChance(0.75), Item.of("create:experience_nugget").withChance(0.75), Item.of("minecraft:cobblestone").withChance(0.125)], `#forge:ores/${metal}`)
			}
		}
	}
	
	if (!global.tagIsEmpty(`#forge:plates/${metal}`)) {
		const plate = global.getFirstItem(`#forge:plates/${metal}`)
		if (!plate.isEmpty()) {
			create.pressing(plate, ingot)
		}
	}
	
	if (!global.tagIsEmpty(`#forge:rods/${metal}`)) {
		const rod = global.getFirstItem(`#forge:rods/${metal}`)
		if (!rod.isEmpty()) {
			event.recipes.createaddition.rolling(rod.withCount(2), ingot)
		}
	}
}