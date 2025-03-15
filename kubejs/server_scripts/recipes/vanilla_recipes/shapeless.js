ServerEvents.recipes((event) => {
	//wood
	event.shapeless('ue_addons:wooden_mechanism', [
		'#forge:stripped_logs',
		'#minecraft:planks',
		'minecraft:stick',
		'ue_addons:basic_mechanism_part',
		'immersiveengineering:hammer'
	])
	//stone
	event.shapeless("ue_addons:stone_mechanism", [
		"ue_addons:wooden_mechanism",
		"minecraft:cobblestone",
		"minecraft:flint",
		"immersiveengineering:hammer",
		"tconstruct:seared_brick",
	]).damageIngredient("immersiveengineering:hammer", 1)
	//iron_shapeless
	event.shapeless("ue_addons:iron_mechanism", [
		"ue_addons:incomplete_iron_mechanism",
		"immersiveengineering:hammer",
		"#forge:nuggets/iron",
		"#forge:nuggets/iron",
		"ue_addons:basic_mechanism_part"
	]).damageIngredient("immersiveengineering:hammer", 1)
	//copper_shapeless
	event.shapeless("ue_addons:copper_mechanism", [
		"ue_addons:incomplete_copper_mechanism",
		"immersiveengineering:hammer",
		"#forge:nuggets/copper",
		"create:fluid_pipe",
		"thermal:cured_rubber",
		"ue_addons:mechanical_mechanism_part",
		"minecraft:water_bucket"
	]).damageIngredient("immersiveengineering:hammer", 1)
	//andesite
	event.shapeless("ue_addons:andesite_mechanism", [
		"create:andesite_alloy",
		"create:andesite_alloy",
		"immersiveengineering:hammer",
		"create:cogwheel",
		"create:cogwheel",
		"ue_addons:mechanical_mechanism_part"
	]).damageIngredient("immersiveengineering:hammer", 1)
	event.shapeless(Item.of('ue_addons:mechanism_sand_cast'), [
		'tconstruct:blank_sand_cast', 'ue_addons:wooden_mechanism'
	]).keepIngredient({ item: 'ue_addons:wooden_mechanism' })

	event.shapeless(Item.of('ue_addons:mechanism_red_sand_cast'), [
		'tconstruct:blank_red_sand_cast', 'ue_addons:wooden_mechanism'
	]).keepIngredient({ item: 'ue_addons:wooden_mechanism' })

	event.shapeless(Item.of('ue_addons:mechanism_sand_cast'), [
		'tconstruct:blank_sand_cast', 'ue_addons:wooden_mechanism'
	]).keepIngredient({ item: 'ue_addons:wooden_mechanism' })

	event.shapeless(Item.of('tconstruct:blank_red_sand_cast'), [
		'ue_addons:mechanism_red_sand_cast'
	])

	event.shapeless(Item.of('tconstruct:blank_sand_cast'), [
		'ue_addons:mechanism_sand_cast'
	])

	event.shapeless(Item.of('ue_addons:basic_mechanism_part', 4), [
		'minecraft:flint',
		'minecraft:clay_ball'
	])
	event.shapeless(Item.of('ue_addons:mechanical_mechanism_part', 4), [
		'create:cogwheel',
		'create:andesite_alloy'
	])
	event.shapeless(
		Item.of('ue_addons:engineering_mechanism_part', 4), [
		'#forge:plates/copper',
		'immersiveengineering:component_iron'
	])
	event.shapeless(Item.of('ue_addons:flux_mechanism_part', 4), [
		'thermal:rf_coil',
		'#forge:plates/invar'
	])
	event.shapeless(Item.of('ue_addons:mekanism_mechanism_part', 4), [
		'#forge:ingots/steel',
		'mekanism:basic_control_circuit'
	])
	event.shapeless(Item.of('ue_addons:basic_mechanism_part', 4), [
		'minecraft:flint',
		'minecraft:clay_ball'
	])
	event.shapeless(Item.of('ue_addons:basic_mechanism_part', 4), [
		'minecraft:flint',
		'minecraft:clay_ball'
	])
	event.shapeless(Item.of('ue_addons:basic_mechanism_part', 4), [
		'minecraft:flint',
		'minecraft:clay_ball'
	])
	event.shapeless(Item.of('ue_addons:basic_mechanism_part', 4), [
		'minecraft:flint',
		'minecraft:clay_ball'
	])
})