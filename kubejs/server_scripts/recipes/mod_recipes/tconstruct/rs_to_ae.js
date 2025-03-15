ServerEvents.recipes((event) => {
	const { create } = event.recipes

	create.haunting("ae2:controller", [
		"refinedstorage:controller"
	])
})