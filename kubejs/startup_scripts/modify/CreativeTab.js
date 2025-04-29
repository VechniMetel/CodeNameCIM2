StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setIcon("ue_addons:creative_mechanism")
	event.setDisplayName(Component.translate(`itemGroup.${global.namespace}.all`))

	event.add([
		"create:precision_mechanism",
		"vintageimprovements:redstone_module"
	])
	event.remove("#ue_addons:ponder_blocks")
})

StartupEvents.modifyCreativeTab("create:base", (event) => {
	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])
})