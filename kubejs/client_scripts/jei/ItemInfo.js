JEIEvents.information((event) => {
	function addJEIInfo(name) {
		let itemInfoTranslateKey = `jei.info.${name}`.replace(":", ".")
		event.addItem(name, Component.translate(itemInfoTranslateKey))
	}

	addJEIInfo("minecraft:andesite")
	addJEIInfo("cookingforblockheads:sink")
	addJEIInfo("ad_astra:cryo_fuel_bucket")
	addJEIInfo("ad_astra:ice_shard")
	addJEIInfo("cmi:bucket")
	addJEIInfo("#ad_astra:power_consumption_machines")
	addJEIInfo("engineered_schematics:multiblock_schematic")
	addJEIInfo("cmi:siltsteel_ingot")
})