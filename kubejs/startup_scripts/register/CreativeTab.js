StartupEvents.registry("creative_mode_tab", (event) => {
	event.create(`${global.namespace}:io_block`)
		.icon(() => "ue_addons:ponder_thermal_input")
		.content(() => Ingredient.of("#ue_addons:ponder_blocks").itemIds)
		.displayName(Component.translate(`itemGroup.${global.namespace}.io_block`))
})