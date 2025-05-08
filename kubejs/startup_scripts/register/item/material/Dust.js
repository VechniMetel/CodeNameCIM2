StartupEvents.registry("item", (event) => {
	function addColorDustItem(name, color) {
		event.create(`${global.namespace}:${name}_dust`)
			.texture(`${global.namespace}:item/material/color/dust`)
			.color(0, color)
			.tag("forge:dusts")
			.tag(`forge:dusts/${name}`)

		console.log(`${name}_dust已注册!`)
	}

	// 末地石
	addColorDustItem("end_stone", 0xF6FABD)
})