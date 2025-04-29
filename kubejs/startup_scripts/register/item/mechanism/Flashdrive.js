StartupEvents.registry("item", (event) => {
    let flashDriveRegister = [
		"nature",
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
		"computing",
		"tier_1_aviation",
		"tier_2_aviation",
		"tier_3_aviation",
		"tier_4_aviation",
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
    "creative",
		"pigiron",
		"precision",
		"redstone"
	]
    flashDriveRegister.forEach((material) => {
        event.create(`${global.namespace}:${material}_mechanism_flashdrive`)
		.texture(`${global.namespace}:item/boot_medium`)
    })
  
	// 空白闪存盘
	event.create(`${global.namespace}:null_flash_drive`)
		.texture(`${global.namespace}:item/mechanism/flash_drive/null`)
		.tag(`${global.namespace}:mechanism_flash_drives`)

})