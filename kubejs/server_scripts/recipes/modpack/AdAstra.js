ServerEvents.recipes((event) => {
	function addAlloyingRecipes(output, input, energy, time) {
		if (energy === undefined) {
			energy = 1000
		}
		if (time === undefined) {
			time = 100
		}
		function parseInput(string) {
			const MATCH = string.match(/^(\d+)x\s*(.+)$/)
			if (MATCH) {
				const COUNT = parseInt(MATCH[1])
				const ITEM = MATCH[2]
				const ARRAY = []
				for (let I = 0; I < COUNT; I++) {
					ARRAY.push(ITEM.startsWith("#")
						? { "tag": ITEM.substring(1) }
						: { "item": ITEM }
					)
				}
				return ARRAY
			}
			return string.startsWith("#")
				? { "tag": string.substring(1) }
				: { "item": string }
		}

		let ingredients = []
		if (Array.isArray(input)) {
			input.forEach((ING) => {
				if (typeof ING === "string") {
					const PARSED = parseInput(ING)
					if (Array.isArray(PARSED)) {
						ingredients = ingredients.concat(PARSED)
					} else {
						ingredients.push(PARSED)
					}
				} else {
					ingredients.push(ING)
				}
			})
		} else if (typeof input === "string") {
			const PARSED = parseInput(input)
			if (Array.isArray(PARSED)) {
				ingredients = ingredients.concat(PARSED)
			} else {
				ingredients.push(PARSED)
			}
		}

		function parseOutput(string) {
			const MATCH = string.match(/^(\d+)x\s*(.+)$/)
			return MATCH
				? { "id": MATCH[2], "count": parseInt(MATCH[1]) }
				: { "id": string, "count": 1 }
		}

		const RESULT = typeof output === "string" ? parseOutput(output) : output

		// 创建配方
		event.custom({
			"type": "ad_astra:alloying",
			"cookingtime": time,
			"energy": energy,
			"ingredients": ingredients,
			"result": RESULT
		})
	}

	addAlloyingRecipes("tconstruct:steel_block", [
		"#forge:storage_blocks/iron",
		"#forge:coal_coke"
	])
})