let $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties")
let $BoneMealItem = Java.loadClass("net.minecraft.world.item.BoneMealItem")

StartupEvents.registry("item", (event) => {
	// 自然构件
	event.createCustom(`${global.namespace}:nature_mechanism`, () => {
		let item = new $BoneMealItem(new $ItemProperties)
		item.setMaxStackSize(64)
		return item
	})
	JsonIO.write(`kubejs/assets/${global.namespace}/models/item/nature_mechanism.json`, {
		"parent": "minecraft:item/generated",
		"textures": {
			"layer0": `${global.namespace}:item/mechanism/complete/nature_mechanism`
		}
	})
	event.create(`${global.namespace}:incomplete_nature_mechanism`, "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_nature_mechanism`)
		.tag("create:incomplete_mechanisms")

	// 批量注册构件类型
	let mechanismRegister = [
		"wooden",
		"stone",
		"iron",
		"copper",
		"andesite",
		"photosensitive",
		"gold",
		"cobalt",
		"nether",
		"thermal",
		"feinforced",
		"resonant",
		"railway",
		"ender",
		"light_engineering",
		"heavy_engineering",
		"enchanted",
		"smart",
		"basic_mekanism",
		"advanced_mekanism",
		"elite_mekanism",
		"ultimate_mekanism",
		"structure",
		"nuclear",
		"antimatter",
		"coil",
		"sculk",
		"colorful",
		"creative"
	]
	//仅注册完成状态的构件
	global.mechanismList = mechanismRegister.concat("pigiron")
	let completeMechanismRegister = [
		"basic_random",
		"mechanical_random",
		"engineering_random",
		"flux_random",
		"magical_random",
		"quantum_random",
		"mekanism_random",
		"final_random"
	]
	mechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}_mechanism`)
			.tag("create:mechanisms")
		event.create(`${global.namespace}:incomplete_${material}_mechanism`, "create:sequenced_assembly")
			.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_${material}_mechanism`)
			.tag("create:incomplete_mechanisms")
		event.create(`${global.namespace}:${material}_force_exe`)
			.modelJson({
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": `${global.namespace}:item/mechanism_force_base`,
					"layer1": `${global.namespace}:item/mechanism/complete/${material}_mechanism`
				}
			})
	})
	completeMechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}_mechanism`)
			.tag("create:mechanisms")
	})
	// 生铁构件
	event.create(`${global.namespace}:pigiron_mechanism`)
		.texture(`${global.namespace}:item/mechanism/complete/pigiron_mechanism`)
		.food((food) => {
			food.hunger(8)
				.saturation(1)
				.alwaysEdible()
				.eaten((event) => {
					let { player, item } = event

					if (!player.isCreative()) {
						item.grow(1)
					}
				})
		})
		.tag("create:mechanisms")

	event.create(`${global.namespace}:incomplete_pigiron_mechanism`, "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_pigiron_mechanism`)
		.tag("create:incomplete_mechanisms")

	event.create(`${global.namespace}:pigiron_force_exe`)
		.modelJson({
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": `${global.namespace}:item/mechanism_force_base`,
				"layer1": `${global.namespace}:item/mechanism/complete/pigiron_mechanism`
			}
		})

	// 批量注册构件零件类型
	let partsRegisters = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism",
		"final"
	]
	partsRegisters.forEach((name) => {
		event.create(`${global.namespace}:${name}_mechanism_part`)
			.texture(`${global.namespace}:item/mechanism/part/${name}_mechanism_part`)
			.tag(`${global.namespace}:mechanism_parts`)
	})
})