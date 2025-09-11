// 我以后再也不给Ad Astra写Schema了, key从来都是不按照常理出牌的

// new Schema("ad_astra:alloying")
// 	.simpleKey("result", "outputItem")
// 	.simpleKey("ingredients", "inputItemArray")
// 	.simpleKey("cookingtime", "intNumber", 100)
// 	.simpleKey("energy", "intNumber", 100)

new Schema("ad_astra:compressing")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredient", "inputItem")
	.simpleKey("cookingtime", "intNumber", 100)
	.simpleKey("energy", "intNumber", 100)

// new Schema("ad_astra:cryo_freezing")
// 	.simpleKey("result", "outputFluid")
// 	.simpleKey("ingredient", "inputItem")
// 	.simpleKey("cookingtime", "intNumber", 100)
// 	.simpleKey("energy", "intNumber", 100)

// new Schema("ad_astra:nasa_workbench")
// 	.simpleKey("result", "outputItem")
// 	.simpleKey("ingredients", "inputItemArray")

new Schema("ad_astra:oxygen_loading")
	.simpleKey("result", "outputFluid")
	.simpleKey("input", "inputFluid")
	.simpleKey("cookingtime", "intNumber", 100)
	.simpleKey("energy", "intNumber", 100)

new Schema("ad_astra:refining")
	.simpleKey("result", "outputFluid")
	.simpleKey("input", "inputFluid")
	.simpleKey("cookingtime", "intNumber", 100)
	.simpleKey("energy", "intNumber", 100)

new Schema("ad_astra:space_station_recipe")
	.simpleKey("structure", "nonEmptyString")
	.simpleKey("ingredients", "inputItemArray")
	.simpleKey("dimension", "nonEmptyString")