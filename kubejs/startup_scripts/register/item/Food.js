StartupEvents.registry("item", (event) => {
	// stage0
	event.create(`${global.namespace}:andesite_alloy_noodle_stage0`)
		.texture(`${global.namespace}:item/food/andesite_alloy_noodle/stage0`)
	// stage1
	event.create(`${global.namespace}:andesite_alloy_noodle_stage1`)
		.texture(`${global.namespace}:item/food/andesite_alloy_noodle/stage1`)
	// stage2
	event.create(`${global.namespace}:andesite_alloy_noodle_stage2`)
		.texture(`${global.namespace}:item/food/andesite_alloy_noodle/stage2`)
	// Done
	event.create(`${global.namespace}:andesite_alloy_noodle`)
		.texture(`${global.namespace}:item/food/andesite_alloy_noodle/stage3`)
		.food((food) => {
			food.hunger(20)
				.saturation(1)
				.eaten((event) => {
					let { player, level } = event
					let key = `message.${global.namespace}.food.andesite_alloy_noodle`

					if (event.hand !== "MAIN_HAND" && !level.isClientSide()) {
						player.tell(Component.translate(key).blue())
					}
				})
		})
})