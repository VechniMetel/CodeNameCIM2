StartupEvents.registry("fluid", (event) => {
	function addAloneFluid(name) {
		let registerAloneFluid =
			event.create(`${global.namespace}:${name}`)
				.flowingTexture(`${global.namespace}:fluid/${name}/flow`)
				.stillTexture(`${global.namespace}:fluid/${name}/still`)

		let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:${name}`
		})

		console.log(`${global.namespace}:${name}已注册!`)

		return registerAloneFluid
	}

	function addColorFluid(name, color) {
		let registerColorFluid =
			event.create(`${global.namespace}:${name}`)
				.thinTexture(color)
				.bucketColor(color)
				.flowingTexture(`${global.namespace}:fluid/solution/flow`)
				.stillTexture(`${global.namespace}:fluid/solution/still`)

		let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:${name}`
		})

		return registerColorFluid
	}

	addColorFluid("eletriced_source_emeraid", 0x117458)
	addColorFluid("platinum_solution", 0xE1FFFF)
	addColorFluid("tetrachlorosilane", 0xDDFF6E)

	addAloneFluid("steam").noBlock()
	addAloneFluid("blood")
	addAloneFluid("delta_unstable_solution")
	addAloneFluid("turbid_waste_liquid")
	addAloneFluid("cured_rubber")
	addAloneFluid("pure_sand")
	addAloneFluid("molten_bitumen")
	addAloneFluid("naphtha")
	addAloneFluid("kerosene")
	addAloneFluid("lubricating_oil")
})