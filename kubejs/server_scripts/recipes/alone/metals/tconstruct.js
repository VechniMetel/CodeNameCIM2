global.addTconMetalRecipes = (event, metal) => {
	const { tconstruct } = event.recipes
	const TEMPERATURE = 800
	const fluidMods = ["cmi", "thermalconstruct", "tconstruct"]

	let tconFluid = ""
	for (const modid of fluidMods) {
		let fluidId = `${modid}:molten_${metal}`
		if (Fluid.exists(fluidId)) {
			tconFluid = fluidId
			break
		}
	}

	if (!tconFluid) {
		return
	}

	// 熔融
	if (!global.tagIsEmpty(`#forge:ingots/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 90), `#forge:ingots/${metal}`, TEMPERATURE).time(60)
	if (!global.tagIsEmpty(`#forge:nuggets/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 10), `#forge:nuggets/${metal}`, TEMPERATURE).time(20)
	if (!global.tagIsEmpty(`#forge:storage_blocks/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 810), `#forge:storage_blocks/${metal}`, TEMPERATURE).time(180)
	if (!global.tagIsEmpty(`#forge:plates/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 90), `#forge:plates/${metal}`, TEMPERATURE).time(60)
	if (!global.tagIsEmpty(`#forge:dusts/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 90), `#forge:dusts/${metal}`, TEMPERATURE).time(60)
	if (!global.tagIsEmpty(`#forge:rods/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 45), `#forge:rods/${metal}`, TEMPERATURE).time(30)
	if (!global.tagIsEmpty(`#forge:gears/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 360), `#forge:gears/${metal}`, TEMPERATURE).time(150)
	if (!global.tagIsEmpty(`#forge:coins/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 30), `#forge:coins/${metal}`, TEMPERATURE).time(30)
	if (!global.tagIsEmpty(`#forge:raw_materials/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 90), `#forge:raw_materials/${metal}`, TEMPERATURE).time(90)
	if (!global.tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 810), `#forge:storage_blocks/raw_${metal}`, TEMPERATURE).time(360)
	if (!global.tagIsEmpty(`#forge:ores/${metal}`)) tconstruct.melting(Fluid.of(tconFluid, 180), `#forge:ores/${metal}`, TEMPERATURE).time(150)

	// 铸造
	const castAndMelt = (outputTag, castTag, fluidAmount, time) => {
		if (!global.tagIsEmpty(outputTag)) {
			let outputItem = global.getFirstItem(outputTag)
			if (!outputItem.isEmpty()) {
				tconstruct.casting_table(outputItem, castTag, Fluid.of(tconFluid, fluidAmount), time)
				tconstruct.casting_table(outputItem, castTag.replace("multi_use", "single_use"), Fluid.of(tconFluid, fluidAmount), time).castConsumed()
			}
		}
	}

	castAndMelt(`#forge:ingots/${metal}`, "#tconstruct:casts/multi_use/ingot", 90, 60)
	castAndMelt(`#forge:nuggets/${metal}`, "#tconstruct:casts/multi_use/nugget", 10, 20)
	castAndMelt(`#forge:plates/${metal}`, "#tconstruct:casts/multi_use/plate", 90, 60)
	castAndMelt(`#forge:rods/${metal}`, "#tconstruct:casts/multi_use/rod", 45, 30)
	castAndMelt(`#forge:gears/${metal}`, "#tconstruct:casts/multi_use/gear", 360, 150)
	castAndMelt(`#forge:coins/${metal}`, "#tconstruct:casts/multi_use/coin", 30, 30)

	if (!global.tagIsEmpty(`#forge:storage_blocks/${metal}`)) {
		let blockItem = global.getFirstItem(`#forge:storage_blocks/${metal}`)
		if (!blockItem.isEmpty()) {
			tconstruct.casting_basin(blockItem, Fluid.of(tconFluid, 810), 180)
		}
	}
}