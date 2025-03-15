ItemEvents.tooltip((event) => {
	event.add("ue_addons:stone_mechanism", [
		Component.translate("desc.ue_addons.stone_mechanism"),
		Component.translate("desc.ue_addons.acceleratable")
	])
	event.add("ue_addons:copper_mechanism", [
		Component.translate("desc.ue_addons.copper_mechanism"),
		Component.translate("desc.ue_addons.acceleratable")
	])
	event.add("ue_addons:ender_mechanism", [
		Component.translate("desc.ue_addons.ender_mechanism"),
		Component.translate("desc.ue_addons.acceleratable")
	])
	event.add("ue_addons:enchanted_mechanism", [
		Component.translate("desc.ue_addons.enchanted_mechanism")
	])
	event.add("ue_addons:nature_mechanism", [
		Component.translate("desc.ue_addons.nature_mechanism")
	])
	event.add("ue_addons:iron_mechanism", [
		Component.translate("desc.ue_addons.acceleratable")
	])
	event.add("ue_addons:gold_mechanism", [
		Component.translate("desc.ue_addons.acceleratable")
	])
	event.add("ue_addons:andesite_mechanism", [
		Component.translate("desc.ue_addons.acceleratable")
	])

	function addTooltip(item) {
		event.add(item, Component.translate(`tooltip.${item}`.replace(":", ".")))
	}
})