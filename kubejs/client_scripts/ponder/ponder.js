Ponder.registry((event) => {
	event.create('ue_addons:wooden_mechanism')
		.scene("kubejs:wooden_mechanism", "木质构件", "ue_addons:ponder1", (scene) => {
			scene.configureBasePlate(0, 0, 5);
			scene.showStructure();
			scene.idle(20);
			scene.text(40, "这是一个普通的树苗", [2, 3, 2]);
			scene.addKeyframe();
			scene.idle(40);
			scene.showControls(20, [2, 3, 2], "down")
				.rightClick()
				.withItem('minecraft:oak_sapling');
		})
		
	event.create('ue_addons:stone_mechanism')
		.scene("kubejs:stone_mechanism", "石质构件", "kubejs:stone_mechanism", (scene) => {
			scene.idleSeconds(1);
			scene.addKeyframe();
			scene.world.setBlocks([2, 1, 2], "minecraft:cobblestone");
			scene.world.showSection([2, 1, 2], Direction.down);
			scene.idle(40);
			scene.text(40, "这是一块平平无奇的石头", [2, 2, 2]);
			scene.idle(40);
			scene.showControls(30, [2, 2, 2], "down")
				.rightClick()
				.withItem('ue_addons:stone_mechanism');
			scene.idle(40);
			scene.world.setBlocks([2, 1, 2], "minecraft:stone");
			scene.idle(40);
			scene.text(40, "它就变成了一块圆石", [2, 2, 2]);
		});
});