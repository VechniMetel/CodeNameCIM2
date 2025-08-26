global.addVanillaMetalRecipes = (event, metal) => {
	let { shaped, shapeless, smelting, blasting } = event.recipes
	let ingot = global.getFirstItem(`#forge:ingots/${metal}`)

	if (ingot.isEmpty()) {
		return
	}

	// 块、锭、粒合成
	if (!global.tagIsEmpty(`#forge:storage_blocks/${metal}`)) {
		let metalBlock = global.getFirstItem(`#forge:storage_blocks/${metal}`)
		if (!metalBlock.isEmpty()) {
			shapeless(ingot.withCount(9), [metalBlock])
			shaped(metalBlock, [
				"AAA",
				"AAA",
				"AAA"
			], {
				"A": ingot
			})
		}
	}
	if (!global.tagIsEmpty(`#forge:nuggets/${metal}`)) {
		let nugget = global.getFirstItem(`#forge:nuggets/${metal}`)
		if (!nugget.isEmpty()) {
			shapeless(ingot, [Item.of(nugget, 9)])
			shapeless(nugget.withCount(9), [ingot])
		}
	}

	// 烧炼
	if (!global.tagIsEmpty(`#create:crushed_raw_materials/${metal}`)) {
		smelting(ingot, `#create:crushed_raw_materials/${metal}`)
		blasting(ingot, `#create:crushed_raw_materials/${metal}`)
	}
	if (!global.tagIsEmpty(`#forge:dusts/${metal}`)) {
		smelting(ingot, `#forge:dusts/${metal}`)
		blasting(ingot, `#forge:dusts/${metal}`)
	}
}