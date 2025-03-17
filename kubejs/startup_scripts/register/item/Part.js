StartupEvents.registry("item", (event) => {
	let mechanismPartRegister = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism",
		"final"
	]
	mechanismPartRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism_part`)
	})
})