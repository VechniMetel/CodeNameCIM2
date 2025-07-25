StartupEvents.registry("painting_variant", (event) => {
	// Aleegos
	addPainting("rr1", 16, 16)
	addPainting("rr2", 16, 16)
	addPainting("rr3", 16, 16)
	addPainting("rr4", 16, 16)
	addPainting("rr5", 16, 16)
	addPainting("rr6", 16, 16)
	addPainting("rr7", 16, 16)
	addPainting("rr8", 16, 16)
	addPainting("rr9", 16, 16)
	addPainting("rr10", 16, 16)
	addPainting("rr11", 16, 16)
	addPainting("rr12", 16, 16)
	addPainting("rr13", 16, 16)
	addPainting("rr14", 16, 16)
	addPainting("girl_of_cmi", 64, 64)

	// Vechni_Metel
	addPainting("bug_is_right", 32, 16)
	addPainting("it_must_be_optifine", 16, 32)

	// RandomMechanism(随机构件)
	addPainting("random_mechanism", 32, 32)

	// 柒
	addPainting("qi_month", 64, 64)

	// ⑨Dropper_QWQ⑨
	addPainting("sacabambaspis", 32, 32)

	//UE
	addPainting("ue_sit", 32, 32)
	addPainting("couple", 48, 48)
	addPainting("cuo", 32, 32)
	addPainting("win98", 128, 128)

	//1174
	addPainting("attack_the_d_point", 64, 64)

	//driver
	addPainting("driver_advanced_mek", 16, 16)
	addPainting("driver_basic_mek", 16, 16)
	addPainting("driver_elite_mek", 16, 16)
	addPainting("driver_ultimate_mek", 16, 16)
	addPainting("driver_andesite", 16, 16)
	addPainting("driver_antimatter", 16, 16)
	addPainting("driver_cobalt", 16, 16)
	addPainting("driver_coil", 16, 16)
	addPainting("driver_colorful", 16, 16)
	addPainting("driver_copper", 16, 16)
	addPainting("driver_enchanted", 16, 16)
	addPainting("driver_ender", 16, 16)
	addPainting("driver_feinforced", 16, 16)
	addPainting("driver_gold", 16, 16)
	addPainting("driver_heavy_engineering", 16, 16)
	addPainting("driver_iron", 16, 16)
	addPainting("driver_light_engineering", 16, 16)
	addPainting("driver_nature", 16, 16)
	addPainting("driver_nether", 16, 16)
	addPainting("driver_nuclear", 16, 16)
	addPainting("driver_photosensive", 16, 16)
	addPainting("driver_pigiron", 16, 16)
	addPainting("driver_precision", 16, 16)
	addPainting("driver_resonant", 16, 16)
	addPainting("driver_sculk", 16, 16)
	addPainting("driver_stone", 16, 16)
	addPainting("driver_thermal", 16, 16)
	addPainting("driver_train", 16, 16)
	addPainting("driver_wooden", 16, 16)
	//——to players of cmi
	//do you want to know why not have all mechanisms
	//because when other mechanisms joined, mechanism drivers has been deleted...







	function addPainting(name, width, height) {
		event.create(`${global.namespace}:${name}`)
			.width(width)
			.height(height)
			.tag("minecraft:placeable")
	}
})