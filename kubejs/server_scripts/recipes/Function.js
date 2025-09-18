// priority: 100
let $FluidTags =
	Java.loadClass("net.minecraft.tags.FluidTags")
let $BuiltInRegistries =
	Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

let $RegistryInfo =
	Java.loadClass("dev.latvian.mods.kubejs.registry.RegistryInfo")

let $MekanismAPI =
	Java.loadClass("mekanism.api.MekanismAPI")
let $Slurry =
	Java.loadClass("mekanism.api.chemical.slurry.Slurry")
let $Gas =
	Java.loadClass("mekanism.api.chemical.gas.Gas")
let $Chemical =
	Java.loadClass("mekanism.api.chemical.Chemical")

let IngredientUtils = {
	/**
	 * 获取标签内第一个物品的ID, 若标签下没有物品则返回null
	 * @param {string} ingredient 物品标签ID
	 * @param {number | undefined} count 物品数量
	 * @returns {string | null}
	 */
	getFirstItemId: function (ingredient, count) {
		let ids = count !== undefined
			? Ingredient.of(ingredient, count).getItemIds()
			: Ingredient.of(ingredient).getItemIds()

		if (ids.length > 0) {
			return ids[0]
		} else {
			console.warn(`No corresponding item under ${ingredient}`)
			return null
		}
	},

	/**
	 * 获取标签内第一个流体的ID, 若标签下没有流体则返回null
	 * @param {string} fluidTag 流体标签ID
	 * @returns {string | null}
	 */
	getFirstFluidId: function (fluidTag) {
		let tag = $FluidTags.create(ResourceLocation.parse(fluidTag))
		let optional = $BuiltInRegistries.FLUID.getTag(tag)

		if (optional.isPresent()) {
			let fluidHolder = optional.get().stream().findFirst().orElse(null)
			if (fluidHolder !== null) {
				let getFluidKey = $BuiltInRegistries.FLUID.getKey(fluidHolder.value()).toString()
				// console.log(`The first fluid is: ${getFluidKey}`)
				return getFluidKey
			}
		}
		console.warn(`No corresponding fluid under ${fluidTag}`)
		return null
	},

	/**
	 * 判断物品标签是否为空
	 * @param {string} tag 物品标签ID
	 * @returns {boolean}
	 */
	isNotNull: function (tag) {
		return Ingredient.of(tag).getItemIds().length > 0
	},

	getPath: function (name) {
		return name.indexOf(":") !== -1 ? name.split(":")[1] : name
	}
}

let MekanismType = {
	Slurry: {
		exists: function (id) {
			return $RegistryInfo.of($MekanismAPI.SLURRY_REGISTRY_NAME, $Slurry)
				.hasValue(id)
		},
		of: makeOf("slurry")
	},
	Gas: {
		exists: function (id) {
			return $RegistryInfo.of($MekanismAPI.GAS_REGISTRY_NAME, $Gas)
				.hasValue(id)
		},
		of: makeOf("gas")
	}
}

function makeOf(type) {
	return function (id, amount) {
		let obj = {}
		obj[type] = id
		obj.amount = amount === null ? 1000 : amount
		return obj
	}
}

function aeCharger(output, input) {
	return {
		type: "ae2:charger",
		ingredient: Ingredient.of(input).toJson(),
		result: {
			item: IngredientUtils.getFirstItemId(output)
		}
	}
}

function IEIngredient(input) {
	if (Array.isArray(input)) {
		let count = 0
		let inps = []
		for (let i of input) {
			let item = Item.of(i, 1)
				.toJson()
			if (count === 0) {
				count = Item.of(i)
					.getCount()
			}
			inps.push(item)
		}
		return {
			base_ingredient: inps,
			count: count
		}
	}
	return {
		base_ingredient: Item.of(input)
			.withCount(1)
			.toJson(),
		count: Item.of(input)
			.getCount()
	}
}


let SmeltingRecipe = {
	all: function (event, output, input) {
		event.recipes.minecraft.smelting(output, input)
			.cookingTime(200)

		event.recipes.minecraft.blasting(output, input)
			.cookingTime(100)

		event.recipes.minecraft.smoking(output, input)
			.cookingTime(100)
	},
	blasting: function (event, output, input) {
		event.recipes.minecraft.blasting(output, input)
			.cookingTime(100)

		event.recipes.minecraft.smelting(output, input)
			.cookingTime(200)
	},
	smoking: function (event, output, input) {
		event.recipes.minecraft.blasting(output, input)
			.cookingTime(100)

		event.recipes.minecraft.smoking(output, input)
			.cookingTime(100)
	}
}

// Test Function Event
BlockEvents.rightClicked((event) => {
	let { block, player } = event
	const DEBUG_BLOCK = "cmi:green_screen"

	if (block.id === DEBUG_BLOCK) {
		player.tell(IngredientUtils.getFirstFluidId("forge:solutions/iron/chloride"))
	}
})