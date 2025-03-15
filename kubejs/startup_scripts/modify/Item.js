ItemEvents.modification((event) => {
	event.modify("ue_addons:colorful_mechanism", (item) => {
		item.craftingRemainder = Item.of("ue_addons:colorful_mechanism")
	})
})