StartupEvents.registry("fluid", (event) => {
	function addColorMaterialFluid(name, color) {
		event.create(`${global.namespace}:molten_${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(`${global.namespace}:block/fluid/metal/flow`)
			.stillTexture(`${global.namespace}:block/fluid/metal/still`)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
	
		let file = `kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})

		console.log(`molten_${name}已注册!`)
	}

	// 蓝源晶
	addColorMaterialFluid("source_sapphire", 0X0257F5);
})