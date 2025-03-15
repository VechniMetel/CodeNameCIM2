ClientEvents.lang("zh_cn", (event) => {
	addCastItemLanguaue("mechanism", "构件")

	addMechanismPartLanguaue("basic", "基础")
	addMechanismPartLanguaue("mechanical", "机械")
	addMechanismPartLanguaue("flux", "通量")
	addMechanismPartLanguaue("magical", "魔力")
	addMechanismPartLanguaue("quantum", "量子")
	addMechanismPartLanguaue("engineering", "工程")
	addMechanismPartLanguaue("mekanism", "通用")
	addMechanismPartLanguaue("final", "终章")

	addBlockLanguaue("the_accelerator_of_mechanism_power", "构件之力催生器")
	addBlockLanguaue("quartz_ore", "石英矿石")
	addBlockLanguaue("deepslate_quartz_ore", "深层石英矿石")

	addAloneLanguaue(`itemGroup.${global.namespace}.all`, "机械动力: 无限构件")
	addAloneLanguaue(`promp.${global.namespace}.ender_mechanism.location_stored`, "当前坐标已存入末影构件")
	addAloneLanguaue(`desc.${global.namespace}.acceleratable`, "§4可用于构件之力催生器")
	addAloneLanguaue(`desc.${global.namespace}.stone_mechanism`, "§8手持右键圆石可将其转换为石头")
	addAloneLanguaue(`desc.${global.namespace}.copper_mechanism`, "§6手持右键可以投掷出水瓶")
	addAloneLanguaue(`desc.${global.namespace}.ender_mechanism`, "§5手持右键随机传送，手持潜行右键记录当前坐标")
	addAloneLanguaue(`desc.${global.namespace}.enchanted_mechanism`, "§9手持右键方块可生成经验")
	addAloneLanguaue(`desc.${global.namespace}.nature_mechanism`, "§2手持右键方块可以替代骨粉的功能")

	addAloneLanguaue(`message.${global.namespace}.debug.getHardness`, "这个方块的硬度是: %s")
	addAloneLanguaue(`text.${global.namespace}.dev`, "开发中画面, 实际内容请以正式版为准")
	addAloneLanguaue(`text.${global.namespace}.player`, "测试中版本, 不代表最终品质")

	let materialGroup = [
		["nature", "自然"],
		["wooden", "木质"],
		["stone", "石质"],
		["iron", "铁质"],
		["copper", "铜质"],
		["andesite", "安山"],
		["photosensitive", "感光"],
		["gold", "金质"],
		["thermal", "热力"],
		["feinforced", "强化"],
		["resonant", "谐振"],
		["railway", "铁路"],
		["ender", "末影"],
		["light_engineering", "轻型工程"],
		["heavy_engineering", "重型工程"],
		["enchanted", "附魔"],
		["smart", "只能"],
		["basic_mekanism", "基础通用"],
		["advanced_mekanism", "高级通用"],
		["elite_mekanism", "精英通用"],
		["ultimate_mekanism", "终极通用"],
		["structure", "结构"],
		["nuclear", "核"],
		["antimatter", "反物质"],
		["coil", "线圈"],
		["sculk", "幽匿"],
		["colorful", "多彩"],
		["creative", "创造"]
	]
	materialGroup.forEach(([material, name]) => {
		addMachanismLanguaue(material, name)
	})

	function addItemLanguaue(key, value) {
		event.add(`item.${global.namespace}.${key}`, value)
	}

	function addCastItemLanguaue(key, value) {
		event.add(`item.${global.namespace}.${key}_cast`, `${value}铸模`)
		event.add(`item.${global.namespace}.${key}_sand_cast`, `${value}沙子铸模`)
		event.add(`item.${global.namespace}.${key}_red_sand_cast`, `${value}红沙铸模`)
	}

	function addMachanismLanguaue(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism`, `${value}构件`)
		event.add(`item.${global.namespace}.incomplete_${material}_mechanism`, `${value}构件(半成品)`)
	}

	function addMechanismPartLanguaue(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism_part`, `${value}构件零件`)
	}

	function addBlockLanguaue(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}

	function addFluidLanguaue(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, `${value}桶`)
	}

	function addTooltipLanguage(key, value) {
		event.add(`tooltip.${key}`.replace(":", "."), `§b${value}`)
	}

	function addJEIInfoLanguage(key, value) {
		event.add(`jei.info.${key}`.replace(":", "."), `§b${value}`)
	}

	function addAloneLanguaue(key, value) {
		event.add(key, value)
	}
})