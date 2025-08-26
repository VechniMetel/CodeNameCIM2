ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	// 不锈钢
	immersiveengineering.arc_furnace(
		"@forge:ingots/stainless_steel",
		"#forge:ingots/steel",
		400,
		8000
	).additives([
		"#forge:ingots/chromium",
		"#forge:ingots/invar"
	]).slag("#forge:slag")

	// 钢
	immersiveengineering.arc_furnace(
		"@forge:ingots/steel",
		"#forge:ingots/iron",
		400,
		8000
	).additives([
		"#forge:coal_coke"
	]).slag("#forge:slag")
})