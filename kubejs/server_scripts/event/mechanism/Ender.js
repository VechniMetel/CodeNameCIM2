
//末影构件随机传送
ItemEvents.rightClicked('ue_addons:ender_mechanism', event => {
    let { player, item } = event;

    // 检测玩家潜行或物品具有NBT
    if (event.getPlayer().crouching) return;
    if (event.getItem().hasNBT()) {
        event.cancel()
    }

    // 3. 定义传送范围（5x5 区域）
    let range = 2; // 5x5 区域的范围半径
    let centerX = player.x;
    let centerZ = player.z;
    let yLevel = player.y;

    // 4. 生成随机偏移量
    let randomX = centerX + Math.floor(Math.random() * (range * 2 + 1)) - range;
    let randomZ = centerZ + Math.floor(Math.random() * (range * 2 + 1)) - range;

    // 5. 获取目标位置（确保 Y 坐标在地面上）
    let targetPos = { x: randomX, y: yLevel, z: randomZ };

    // 6. 传送玩家到目标位置
    player.teleportTo(targetPos.x, targetPos.y, targetPos.z);

    // 7. 生成传送音效和粒子
    player.level.server.runCommandSilent(
        `/playsound minecraft:entity.enderman.teleport master @a ${targetPos.x} ${targetPos.y} ${targetPos.z}`
    );
    player.level.server.runCommandSilent(
        `/particle minecraft:dragon_breath ${targetPos.x} ${targetPos.y} ${targetPos.z} 0.5 0.5 0.5 0.1 50`
    );

    // 8. 添加冷却时间（1秒）
    player.cooldowns.addCooldown('ue_addons:ender_mechanism', 20); // 20 ticks = 1秒
});
ItemEvents.rightClicked('ue_addons:ender_mechanism', r => {
    if (!r.getPlayer().crouching || r.getPlayer().mainHandItem.hasNBT()) return
    let player = r.getPlayer()
    let locationX = Math.floor(player.getX())
    let locationY = Math.floor(player.getY())
    let locationZ = Math.floor(player.getZ())
    r.getPlayer().mainHandItem.setNbt({ x: locationX, y: locationY, z: locationZ })
    player.tell(Text.translatable("promp.ue_addons.ender_mechanism.location_stored"))
})
BlockEvents.rightClicked('ue_addons:the_accelerator_of_mechanism_power', r => {
    if (r.hand == "OFF_HAND") return
    let player = r.getPlayer()
    if (player == null) return
    if (r.getItem().is('ue_addons:ender_mechanism') && r.getItem().hasNBT()) {
        let nbt = r.getItem().getNbt()
        //传送玩家到目标位置
        player.teleportTo(nbt.x, nbt.y, nbt.z);

        //生成传送音效和粒子
        player.level.server.runCommandSilent(
            `/playsound minecraft:entity.enderman.teleport master @a ${nbt.x} ${nbt.y} ${nbt.z}`
        );
        player.level.server.runCommandSilent(
            `/particle minecraft:dragon_breath ${nbt.x} ${nbt.y} ${nbt.z} 0.5 0.5 0.5 0.1 50`
        );
        //清除物品NBT
        r.getItem().setNbt({})
        //添加冷却时间
        player.cooldowns.addCooldown('ue_addons:ender_mechanism', 100);
    }
})
