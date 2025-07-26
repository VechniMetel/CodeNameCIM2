//暂时铀问题
/*
ClientEvents.highPriorityAssets((event) => {
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
        event.add(`cmi:models/block/usb_port_${material}.json`, {
            "credit": "Made with Blockbench",
            "texture_size": [32, 32],
            "textures": {
                "0": "cmi:block/usb_port",
                "1": `cmi:item/mechanism/flash_drive/${material}`,
                "2": "cmi:block/usb_port_flashdrive",
                "particle": "cmi:block/usb_port"
            },
            "parent": "minecraft:block/block",
            "elements": [
                {
                    "from": [0, 0, 0],
                    "to": [16, 16, 16],
                    "faces": {
                        "north": { "uv": [0, 0, 4, 4], "texture": "#0" },
                        "east": { "uv": [0, 4, 4, 8], "texture": "#0" },
                        "south": { "uv": [4, 0, 8, 4], "texture": "#0" },
                        "west": { "uv": [4, 4, 8, 8], "texture": "#0" },
                        "up": { "uv": [4, 12, 0, 8], "texture": "#0" },
                        "down": { "uv": [12, 0, 8, 4], "texture": "#0" }
                    }
                },
                {
                    "from": [2, 16, 7],
                    "to": [14, 27, 9],
                    "rotation": { "angle": 0, "axis": "y", "origin": [11, 16, 7] },
                    "faces": {
                        "north": { "uv": [0, 0, 6, 5.5], "texture": "#2" },
                        "east": { "uv": [6, 2, 7, 7.5], "texture": "#2" },
                        "south": { "uv": [0, 5.5, 6, 11], "texture": "#2" },
                        "west": { "uv": [7, 2, 8, 7.5], "texture": "#2" },
                        "up": { "uv": [12, 1, 6, 0], "texture": "#2" },
                        "down": { "uv": [12, 1, 6, 2], "texture": "#2" }
                    }
                },
                {
                    "from": [2.8, 8, 6.99],
                    "to": [12.8, 24, 6.99],
                    "rotation": { "angle": 17.5, "axis": "z", "origin": [3, 18, 5] },
                    "faces": {
                        "north": { "uv": [0, 3, 16, 14], "rotation": 270, "texture": "#1" },
                        "east": { "uv": [0, 0, 8, 0], "rotation": 90, "texture": "#missing" },
                        "south": { "uv": [0, 0, 8, 5], "rotation": 90, "texture": "#missing" },
                        "west": { "uv": [0, 0, 8, 0], "rotation": 90, "texture": "#missing" },
                        "up": { "uv": [0, 0, 0, 5], "rotation": 90, "texture": "#missing" },
                        "down": { "uv": [0, 0, 0, 5], "rotation": 90, "texture": "#missing" }
                    }
                },
                {
                    "from": [0, 20, 7],
                    "to": [2, 24, 9],
                    "rotation": { "angle": 0, "axis": "y", "origin": [0, 20, 7] },
                    "faces": {
                        "north": { "uv": [0, 0, 0.25, 0.75], "texture": "#0" },
                        "east": { "uv": [0, 0, 0.25, 0.75], "texture": "#0" },
                        "south": { "uv": [0, 0, 0.25, 1.25], "texture": "#0" },
                        "west": { "uv": [0, 0, 0.25, 1.75], "texture": "#0" },
                        "up": { "uv": [0, 0, 0.25, 1.25], "texture": "#0" },
                        "down": { "uv": [0, 0, 0, 1.75], "texture": "#0" }
                    }
                }
            ]
        })
    })
})
*/