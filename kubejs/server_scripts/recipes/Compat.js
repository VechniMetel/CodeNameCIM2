ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// Rs to Ae
	create.haunting("ae2:controller", [
		"refinedstorage:controller"
	])
})