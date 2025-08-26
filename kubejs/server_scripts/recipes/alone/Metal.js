ServerEvents.recipes((event) => {
	let {
		create,
		thermal,
		immersiveengineering,
		mekanism,
		shaped,
		shapeless,
		smelting,
		blasting,
		tconstruct
	} = event.recipes

	const TEMPERATURE = 800

	const getFirstItem = (tag) => {
		return Ingredient.of(tag).getFirst()
	}

	const tagIsEmpty = (tag) => {
		return Ingredient.of(tag).isEmpty()
	}

	if (!global.metalGroup || !Array.isArray(global.metalGroup)) {
		return
	}

	const uniqueMetalGroup = global.metalGroup.filter((value, index, self) => {
		return self.indexOf(value) === index
	})

	const addTconMelting = (event, tconFluid, tag, amount, time) => {
		if (!tagIsEmpty(tag)) {
			tconstruct.melting(Fluid.of(tconFluid, amount), tag, TEMPERATURE).time(time)
		}
	}

	const addTconCastingTable = (event, outputTag, castTag, tconFluid, amount, time) => {
		if (!tagIsEmpty(outputTag)) {
			const outputItem = getFirstItem(outputTag)
			if (!outputItem.isEmpty() && outputItem.id) {
				tconstruct.casting_table(outputItem, castTag, Fluid.of(tconFluid, amount), time)
				tconstruct.casting_table(outputItem, castTag.replace("multi_use", "single_use"), Fluid.of(tconFluid, amount), time).castConsumed()
			}
		}
	}

	const addTconCastingBasin = (event, outputTag, tconFluid, amount, time) => {
		if (!tagIsEmpty(outputTag)) {
			const outputItem = getFirstItem(outputTag)
			if (!outputItem.isEmpty() && outputItem.id) {
				tconstruct.casting_basin(outputItem, "", Fluid.of(tconFluid, amount), time)
			}
		}
	}

	const addTconOreMelting = (event, tconFluid, tag, amount, time) => {
		if (!tagIsEmpty(tag)) {
			tconstruct.melting(Fluid.of(tconFluid, amount), tag, TEMPERATURE).time(time)
		}
	}

	const fluidMods = [
		"cmi",
		"thermalconstruct",
		"tconstruct"
	]

	uniqueMetalGroup.forEach((metal) => {
		try {
			if (!metal || typeof metal !== "string" || metal.trim() === "") {
				return
			}

			let tconFluid = ""
			for (const modid of fluidMods) {
				let fluidId = `${modid}:molten_${metal}`
				if (Fluid.exists(fluidId)) {
					tconFluid = fluidId
					break
				}
			}

			if (tconFluid) {
				addTconMelting(event, tconFluid, `#forge:ingots/${metal}`, 90, 60)
				addTconMelting(event, tconFluid, `#forge:nuggets/${metal}`, 10, 20)
				addTconMelting(event, tconFluid, `#forge:storage_blocks/${metal}`, 810, 180)
				addTconMelting(event, tconFluid, `#forge:plates/${metal}`, 90, 60)
				addTconMelting(event, tconFluid, `#forge:dusts/${metal}`, 90, 60)
				addTconMelting(event, tconFluid, `#forge:rods/${metal}`, 45, 30)
				addTconMelting(event, tconFluid, `#forge:gears/${metal}`, 360, 150)
				addTconMelting(event, tconFluid, `#forge:coins/${metal}`, 30, 30)

				addTconCastingTable(event, `#forge:ingots/${metal}`, "#tconstruct:casts/multi_use/ingot", tconFluid, 90, 60)
				addTconCastingTable(event, `#forge:nuggets/${metal}`, "#tconstruct:casts/multi_use/nugget", tconFluid, 10, 20)
				addTconCastingBasin(event, `#forge:storage_blocks/${metal}`, tconFluid, 810, 180)
				addTconCastingTable(event, `#forge:plates/${metal}`, "#tconstruct:casts/multi_use/plate", tconFluid, 90, 60)
				addTconCastingTable(event, `#forge:rods/${metal}`, "#tconstruct:casts/multi_use/rod", tconFluid, 45, 30)
				addTconCastingTable(event, `#forge:gears/${metal}`, "#tconstruct:casts/multi_use/gear", tconFluid, 360, 150)
				addTconCastingTable(event, `#forge:coins/${metal}`, "#tconstruct:casts/multi_use/coin", tconFluid, 30, 30)

				addTconOreMelting(event, tconFluid, `#forge:raw_materials/${metal}`, 90, 90)
				addTconOreMelting(event, tconFluid, `#forge:storage_blocks/raw_${metal}`, 810, 360)
				addTconOreMelting(event, tconFluid, `#forge:ores/${metal}`, 180, 150)
			}

			let ingot = getFirstItem(`#forge:ingots/${metal}`)
			if (ingot.isEmpty()) {
				return
			}

			if (!tagIsEmpty(`#forge:storage_blocks/${metal}`)) {
				let metalBlock = getFirstItem(`#forge:storage_blocks/${metal}`)
				if (!metalBlock.isEmpty()) {
					shapeless(ingot.withCount(9), [
						metalBlock
					])
					shaped(metalBlock, [
						"AAA",
						"AAA",
						"AAA"
					], {
						"A": ingot
					})
				}
			}
			if (!tagIsEmpty(`#forge:nuggets/${metal}`)) {
				let nugget = getFirstItem(`#forge:nuggets/${metal}`)
				if (!nugget.isEmpty()) {
					shapeless(ingot, [
						Item.of(nugget, 9)
					])
					shapeless(nugget.withCount(9), [
						ingot
					])
				}
			}
			if (!tagIsEmpty(`#forge:ores/${metal}`)) {
				thermal.smelter([
					ingot.withCount(2),
					Item.of("thermal:rich_slag").withChance(0.2)
				], `#forge:ores/${metal}`)
				immersiveengineering.arc_furnace(ingot.withCount(2), `#forge:ores/${metal}`).time(200).energy(102400).slag("#forge:slag")
			}
			if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
				let raw = getFirstItem(`#forge:raw_materials/${metal}`)
				if (!raw.isEmpty() && !tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
					let rawBlock = getFirstItem(`#forge:storage_blocks/raw_${metal}`)
					if (!rawBlock.isEmpty()) {
						shapeless(raw.withCount(9), [
							rawBlock
						])
						shaped(rawBlock, [
							"AAA",
							"AAA",
							"AAA"
						], {
							"A": raw
						})
					}
				}
				thermal.smelter([ingot.withChance(1.5)], `#forge:raw_materials/${metal}`)
				immersiveengineering.arc_furnace(ingot, `#forge:raw_materials/${metal}`).time(900).energy(230400).slag("#forge:slag").secondaries([ingot.withChance(0.5)])
			}
			if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
				immersiveengineering.arc_furnace(ingot.withCount(13), `#forge:storage_blocks/raw_${metal}`).time(1800).energy(204800).slag("#forge:slag").secondaries([ingot.withChance(0.5)])
			}
			if (!tagIsEmpty(`#create:crushed_raw_materials/${metal}`)) {
				let crushed = getFirstItem(`#create:crushed_raw_materials/${metal}`)
				if (!crushed.isEmpty()) {
					if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
						create.crushing([
							crushed.withCount(9),
							Item.of("create:experience_nugget", 9).withChance(0.75)
						], `#forge:storage_blocks/raw_${metal}`)
					}
					if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
						create.crushing([
							crushed,
							Item.of("create:experience_nugget").withChance(0.75)
						], `#forge:raw_materials/${metal}`)
					}
					if (!tagIsEmpty(`#forge:ores/${metal}`)) {
						create.crushing([
							crushed,
							crushed.withChance(0.75),
							Item.of("create:experience_nugget").withChance(0.75),
							Item.of("minecraft:cobblestone").withChance(0.125)
						], `#forge:ores/${metal}`)
					}
					smelting(ingot, `#create:crushed_raw_materials/${metal}`)
					blasting(ingot, `#create:crushed_raw_materials/${metal}`)
				}
			}
			if (!tagIsEmpty(`#forge:dusts/${metal}`)) {
				let dust = getFirstItem(`#forge:dusts/${metal}`)
				if (!dust.isEmpty()) {
					smelting(ingot, dust)
					blasting(ingot, dust)
					thermal.pulverizer(dust, ingot).energy(2000)
					thermal.smelter(ingot, dust).energy(1600)
					immersiveengineering.crusher(dust, `#forge:ingots/${metal}`).energy(6000)
					mekanism.crushing(dust, ingot)
					if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
						thermal.pulverizer(dust.withChance(1.25), `#forge:raw_materials/${metal}`)
						immersiveengineering.crusher(dust, `#forge:raw_materials/${metal}`).energy(6000).secondaries([dust.withChance(0.333)])
						mekanism.enriching(dust.withCount(4), `3x #forge:raw_materials/${metal}`)
					}
					if (!tagIsEmpty(`#forge:ores/${metal}`)) {
						thermal.pulverizer(dust.withCount(2), `#forge:ores/${metal}`)
						immersiveengineering.crusher(dust.withCount(2), `#forge:ores/${metal}`).energy(6000)
						mekanism.enriching(dust.withCount(2), `#forge:ores/${metal}`)
					}
					if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
						immersiveengineering.crusher(dust.withCount(12), `#forge:storage_blocks/raw_${metal}`).energy(6000)
						mekanism.enriching(dust.withCount(12), `#forge:storage_blocks/raw_${metal}`)
					}
				}
			}
			if (!tagIsEmpty(`#forge:plates/${metal}`)) {
				let plate = getFirstItem(`#forge:plates/${metal}`)
				if (!plate.isEmpty()) {
					create.pressing(plate, ingot)
					thermal.press(plate, ingot)
					thermal.smelter(ingot, plate).energy(1600)
					immersiveengineering.metal_press(plate, ingot, "immersiveengineering:mold_plate")
				}
			}
			if (!tagIsEmpty(`#forge:rods/${metal}`)) {
				let rod = getFirstItem(`#forge:rods/${metal}`)
				if (!rod.isEmpty()) {
					event.recipes.createaddition.rolling(rod.withCount(2), ingot)
					thermal.press(rod.withCount(2), [
						ingot,
						"thermal_extra:press_rod_die"
					])
					immersiveengineering.metal_press(rod.withCount(2), ingot, "immersiveengineering:mold_rod")
				}
			}
			if (!tagIsEmpty(`#forge:gears/${metal}`)) {
				let gear = getFirstItem(`#forge:gears/${metal}`)
				if (!gear.isEmpty()) {
					shaped(gear, [
						" A ",
						"A A",
						" A "
					], {
						"A": ingot
					})
					thermal.press(gear, [
						Item.of(ingot, 4),
						"thermal:press_gear_die"
					])
					thermal.smelter(Item.of(ingot, 4), gear)
					immersiveengineering.metal_press(gear, Item.of(ingot, 4), "immersiveengineering:mold_gear")
				}
			}
			if (!tagIsEmpty(`#forge:coins/${metal}`)) {
				let coin = getFirstItem(`#forge:coins/${metal}`)
				if (!coin.isEmpty()) {
					thermal.press(coin.withCount(3), [
						ingot,
						"thermal:press_coin_die"
					])
					if (!tagIsEmpty(`#forge:nuggets/${metal}`)) {
						let nugget = getFirstItem(`#forge:nuggets/${metal}`)
						if (!nugget.isEmpty()) {
							thermal.press(coin, [
								nugget.withCount(3),
								"thermal:press_coin_die"
							]).energy(800)
							thermal.smelter(nugget.withCount(3), coin).energy(800)
						}
					}
				}
			}
		} catch (error) {}
	})
})