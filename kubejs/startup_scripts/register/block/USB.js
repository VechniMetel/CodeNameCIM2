//USB接口
StartupEvents.registry("block", (event) => {
    event.create(`${global.namespace}:usb_port`, "basic")
        .soundType(SoundType.METAL)
        .tag("create:wrench_pickup")
        .tag(`${global.namespace}:usb_port`)
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
    mechanismRegister.forEach((material) => {
        event.create(`${global.namespace}:usb_port_${material}`, "basic")
            .soundType(SoundType.METAL)
            .tag("create:wrench_pickup")
            .tag(`${global.namespace}:usb_port`)
    })
})