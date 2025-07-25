StartupEvents.registry("block", (event) => {
	function addCustomMachine(name) {
		event.create(`${global.namespace}:${name}`, "custommachinery")
			.machine(`${global.namespace}:${name}`)
			.tag("create:wrench_pickup")
	}

	// addCustomMachine("water_pump")
	addCustomMachine("flash_disk_writer")
	addCustomMachine("chemical_gas_extractor")
	addCustomMachine("simple_centrifuge")
	addCustomMachine("steam_boiler")
})

MMEvents.registerControllers((event) => {
	function addMMController(id) {
		event.create(id)
			.name("")
			.type("mm:machine")
	}

	addMMController("large_steam_boiler")
	addMMController("cracker")
	addMMController("steam_ore_processor")
})

MMEvents.registerPorts((event) => {
	// 大型锅炉
	event.create("large_steam_boiler_fluid")
		.name("")
		.controllerId("mm:large_steam_boiler")
		.config("mm:fluid", (builder) => {
			builder.rows(1)
				.columns(1)
				.slotCapacity(10000)
		})

	event.create("large_steam_boiler_item")
		.name("")
		.controllerId("mm:large_steam_boiler")
		.config("mm:item", (builder) => {
			builder.rows(1)
				.columns(1)
		})

	// 裂解机
	event.create("cracker_fluid")
		.name("")
		.controllerId("mm:cracker")
		.config("mm:fluid", (builder) => {
			builder.rows(1)
				.columns(3)
				.slotCapacity(10000)
		})

	event.create("cracker_energy")
		.name("")
		.controllerId("mm:cracker")
		.config("mm:energy", (builder) => {
			builder.capacity(1000000)
				.maxExtract(1000000)
				.maxReceive(1000000)
		})

	// 蒸汽矿石处理机
	event.create("steam_ore_processor_fluid")
		.name("")
		.controllerId("mm:steam_ore_processor")
		.config("mm:fluid", (builder) => {
			builder.rows(2)
				.columns(2)
				.slotCapacity(20000)
		})

	event.create("steam_ore_processor_item")
		.name("")
		.controllerId("mm:steam_ore_processor")
		.config("mm:item", (builder) => {
			builder.rows(3)
				.columns(3)
		})
})