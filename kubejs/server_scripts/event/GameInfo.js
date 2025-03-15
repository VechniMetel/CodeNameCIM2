PlayerEvents.loggedIn((event) => {
	let { player } = event

	global.debugUserName.forEach((debugUser) => {
		if (player.username === debugUser) {
			let devInfo = Component.translate(`text.${global.namespace}.dev`).getString()
			player.paint({
				devTip: {
					type: "text",
					x: 10,
					y: "$screenH - 40",
					alignX: "left",
					text: devInfo,
					scale: 1.0,
				}
			})
		} else if (player.username !== debugUser) {
			let playerInfo = Component.translate(`text.${global.namespace}.player`).getString()
			player.paint({
				playerTip: {
					type: "text",
					x: 10,
					y: "$screenH - 30",
					alignX: "left",
					text: playerInfo,
					scale: 1.0,
				}
			})
			player.paint({
				versionTip: {
					type: "text",
					x: 10,
					y: "$screenH - 20",
					alignX: "left",
					text: "Alpha - 1.6.0 Build07",
					scale: 1.0
				}
			})
		}
	})
})