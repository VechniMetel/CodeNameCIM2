global.addMekanismMetalRecipes = (event, metal) => {
	const { mekanism } = event.recipes
	const ingot = global.getFirstItem(`#forge:ingots/${metal}`)
	if (ingot.isEmpty()) return

	if (!global.tagIsEmpty(`#forge:dusts/${metal}`)) {
		const dust = global.getFirstItem(`#forge:dusts/${metal}`)
		if (!dust.isEmpty()) {
			mekanism.crushing(dust, ingot)
			if (!global.tagIsEmpty(`#forge:raw_materials/${metal}`)) {
				mekanism.enriching(dust.withCount(4), `3x #forge:raw_materials/${metal}`)
			}
			if (!global.tagIsEmpty(`#forge:ores/${metal}`)) {
				mekanism.enriching(dust.withCount(2), `#forge:ores/${metal}`)
			}
			if (!global.tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
				mekanism.enriching(dust.withCount(12), `#forge:storage_blocks/raw_${metal}`)
			}
		}
	}
}