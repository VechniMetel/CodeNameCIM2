ServerEvents.recipes((event) => {
	// 定义全局辅助函数, 供所有子文件使用
	global.getFirstItem = (tag) => {
		return Ingredient.of(tag).getFirst()
	}

	global.tagIsEmpty = (tag) => {
		return Ingredient.of(tag).isEmpty()
	}

	// 检查并准备金属列表
	if (!global.metalGroup || !Array.isArray(global.metalGroup)) {
		return
	}
	const uniqueMetalGroup = global.metalGroup.filter((value, index, self) => {
		return self.indexOf(value) === index
	})

	// 循环遍历每种金属, 并调用各个模块的配方添加函数
	uniqueMetalGroup.forEach((metal) => {
		try {
			if (!metal || typeof metal !== "string" || metal.trim() === "") {
				return
			}

			// 按顺序调用各模块的配方生成逻辑
			global.addTconMetalRecipes(event, metal)
			global.addVanillaMetalRecipes(event, metal)
			global.addThermalMetalRecipes(event, metal)
			global.addImmersiveEngineeringMetalRecipes(event, metal)
			global.addCreateMetalRecipes(event, metal)
			global.addMekanismMetalRecipes(event, metal)
			
		} catch (error) {
			// 保留空的catch块, 避免因一种金属的错误而中断整个脚本
		}
	})
})