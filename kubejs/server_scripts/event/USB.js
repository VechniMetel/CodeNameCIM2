//构件闪存盘
BlockEvents.rightClicked(event => {
    const { player, item, block } = event;
    //定义构件有哪些
    let mechanismRegister = [
            "nature",
            "wooden",
            "stone",
            "iron",
            "copper",
            "andesite",
            "photosensitive",
            "gold",
            "cobalt",
            "nether",
            "thermal",
            "feinforced",
            "resonant",
            "railway",
            "ender",
            "light_engineering",
            "heavy_engineering",
            "enchanted",
            "smart",
            "computing",
            "tier_1_aviation",
            "tier_2_aviation",
            "tier_3_aviation",
            "tier_4_aviation",
            "basic_mekanism",
            "advanced_mekanism",
            "elite_mekanism",
            "ultimate_mekanism",
            "structure",
            "nuclear",
            "antimatter",
            "coil",
            "sculk",
            "colorful",
            "creative",
            "pigiron",
            "potion",
            "bronze",
            "precision",
            "redstone"
        ]
        //给每个构件测试是不是手上构件方块USB插口
    mechanismRegister.forEach((material) => {
        if (item.id === `cmi:${material}_mechanism_flash_drive` && block.id === "cmi:usb_port") {
            block.set(`cmi:usb_port_${material}`);
            if (!player.isCreative()) {
                // 若是生存模式则减少一个构件
                event.getItem().shrink(1)
            }
        }
    })
});