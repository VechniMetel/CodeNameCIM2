let $LocalDateTime = Java.loadClass("java.time.LocalDateTime")

PlayerEvents.loggedIn(event => {
	let { player, server } = event
	let month = $LocalDateTime.now().getMonthValue()
	let day = $LocalDateTime.now().getDayOfMonth()
	if (month === 4 && day === 1) {
		server.scheduleInTicks(5, () => {
			player.tell(Component.translatable(`message.${global.namespace}.41msg`)
				.clickOpenUrl("https://www.bilibili.com/video/BV1UT42167xb"))
		})
	}
})