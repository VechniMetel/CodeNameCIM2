ServerEvents.recipes(e => {
    e.shaped(
        Item.of("immersiveengineering:hammer", '{Damage:70}'),
        [
            " S ",
            " RS",
            "R  "
        ], {
        "S": "minecraft:flint",
        "R": "minecraft:stick"
    }
    )
})