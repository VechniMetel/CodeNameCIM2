ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const MECH = "cmi:copper_mechanism"
	const CASING = "create:copper_casing"

	//祛魔池
	kubejs.shaped("create_enchantment_industry:disenchanter", [
		"C",
		"B",
		"A"
	], {
		A: MECH,
		B: CASING,
		C: "#create:sandpaper"
	}).id("create_enchantment_industry:crafting/disenchanter")

	// 分液池(传送带青春再青春版)
	kubejs.shaped("create:item_drain", [
		"A",
		"B",
		"C"
	], {
		A: "minecraft:iron_bars",
		B: CASING,
		C: MECH
	}).id("create:crafting/kinetics/item_drain")

	// 流体接口
	kubejs.shapeless("2x create:portable_fluid_interface", [
		"create:chute",
		CASING,
		MECH
	]).id("create:crafting/kinetics/portable_fluid_interface")

	// 软管滑轮
	kubejs.shaped("create:hose_pulley", [
		" A ",
		"BCB",
		" D "
	], {
		A: CASING,
		B: "minecraft:dried_kelp_block",
		C: MECH,
		D: "#forge:plates/copper"
	}).id("create:crafting/kinetics/hose_pulley")

	// 压缩机
	kubejs.shaped("vintageimprovements:vacuum_chamber", [
		" A ",
		"BCB",
		"DED"
	], {
		A: MECH,
		B: "#vintageimprovements:springs/iron",
		C: "create:andesite_casing",
		D: "#forge:ingots/andesite_alloy",
		E: "create:mechanical_pump"
	}).id("vintageimprovements:craft/vacuum_chamber")

	// 注液器
	kubejs.shaped("create:spout", [
		"A",
		"B",
		"C"
	], {
		A: MECH,
		B: CASING,
		C: "minecraft:dried_kelp"
	}).id("create:crafting/kinetics/spout")

	//洒水器
	kubejs.shaped("2x sliceanddice:sprinkler", [
		"BAB",
		"BCB"
	], {
		A: MECH,
		B: "#forge:plates/copper",
		C: "minecraft:iron_bars"
	}).id("sliceanddice:sprinkler")

	// 挤压盆
	kubejs.shaped("ratatouille:squeeze_basin", [
		" B ",
		"BAB",
		"C C"
	], {
		A: MECH,
		B: "#forge:plates/copper",
		C: "#forge:ingots/copper"
	}).id("ratatouille:squeeze_basin")

	// 灌溉塔
	kubejs.shaped("ratatouille:irrigation_tower", [
		" B ",
		"CAC",
		"D D"
	], {
		A: MECH,
		B: "create:fluid_tank",
		C: "#forge:plates/copper",
		D: "create:fluid_pipe"
	}).id("ratatouille:irrigation_tower")
})