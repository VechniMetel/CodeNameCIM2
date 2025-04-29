let materials = []
function addMaterial(name, color, level) {
	let material = {
		name: name,
		color: color,
		level: level,
		types: [],
		ingot: function () {
			this.types.push("ingot")
			return this
		},
		plate: function () {
			this.types.push("plate")
			return this
		},
		nugget: function () {
			this.types.push("nugget")
			return this
		},
		dust: function () {
			this.types.push("dust")
			return this
		},
		rod: function () {
			this.types.push("rod")
			return this
		},
		gear: function () {
			this.types.push("gear")
			return this
		},
		block: function () {
			this.types.push("block")
			return this
		},
		molten: function () {
			this.types.push("molten")
			return this
		},
	}

	materials.push(material)
	return material
}

StartupEvents.registry("item", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "block" || type === "molten") {
				return
			}

			event.create(`${global.namespace}:${material.name}_${type}`)
				.texture(`${global.namespace}:item/material/color/${type}`)
				.color(0, material.color)
				.tag(`forge:${type}s`)
				.tag(`forge:${type}s/metal`)
				.tag(`forge:${type}s/${material.name}`)
		})
	})
	console.log("Item注册完毕!")
})
StartupEvents.registry("block", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "block") {
				event.create(`${global.namespace}:${material.name}_block`)
					.textureAll(`${global.namespace}:block/material/color/storage_blocks`)
					.soundType(SoundType.METAL)
					.color(0, material.color)
					.hardness(5)
					.resistance(5)
					.item((item) => {
						item.color(0, material.color)
					})
					.tagBlock(global.toolType["pickaxe"])
					.tagBlock(global.miningLevel[material.level])
					.tag(`forge:storage_blocks`)
					.tag(`forge:storage_blocks/metal`)
					.tag(`forge:storage_blocks/${material.name}`)
			}
		})
	})
	console.log("Block注册完毕!")
})
StartupEvents.registry("fluid", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "molten") {
				event.create(`${global.namespace}:molten_${material.name}`)
					.thinTexture(material.color)
					.bucketColor(material.color)
					.flowingTexture(`${global.namespace}:block/fluid/flowing`)
					.stillTexture(`${global.namespace}:block/fluid/still`)
					.tag("forge:molten_materials")
					.tag(`forge:molten_${material.name}`)

				let file = `kubejs/assets/${global.namespace}/models/item/molten_${material.name}_bucket.json`
				JsonIO.write(file, {
					"parent": "forge:item/bucket_drip",
					"loader": "forge:fluid_container",
					"fluid": `${global.namespace}:molten_${material.name}`
				})
			}
		})
	})
	console.log("Fluid注册完毕!")
})

// 安山合金
addMaterial("andesite_alloy", 0xA9AFA1, "wooden")
	.nugget()
	.molten()
	.gear()

// 余烬史莱姆
addMaterial("cinderslime", 0xFF6060, "wooden")
	.plate()
	.rod()
	.gear()

// 不锈钢
addMaterial("stainless_steel", 0x708090, "diamond")
	.ingot()
	.plate()
	.nugget()
	.rod()
	.gear()
	.block()
	.molten()

// 铬
addMaterial("chromium", 0xF1EFEF, "iron")
	.ingot()
	.plate()
	.nugget()
	.rod()
	.gear()
	.block()
	.molten()