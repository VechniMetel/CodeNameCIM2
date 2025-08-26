ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	// 不锈钢
	immersiveengineering.arc_furnace(
		"@forge:ingots/stainless_steel",
		"#forge:ingots/steel",
		[],
		"#forge:slag",
		400,
		8000,
		[
			"#forge:ingots/chromium",
			"#forge:ingots/invar"
		]
	)

	// 钢
	immersiveengineering.arc_furnace(
		"@forge:ingots/steel",
		"#forge:ingots/iron",
		[],
		"#forge:slag",
		400,
		8000,
		[
			"#forge:coal_coke"
		]
	)
})