BlockEvents.rightClicked((event) => {
	let { block: { x, y, z }, player } = event

	const ACCELERATOR = "cmi:accelerator"
	const MECH = "cmi:coil_mechanism"

	if (player.mainHandItem === MECH && block.id === ACCELERATOR) {
		let command = `execute as ${player.username} at ${player.username} positioned as ${player.username} run summon minecraft:lightning_bolt ${x} ${y} ${z}`
		player.runCommandSilent(command)
	}
})