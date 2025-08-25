ServerEvents.recipes((event) => {

    // 为Thermal的离心机添加对TConstruct物品的兼容性配方
    // 使用 event.custom() 以确保配方结构符合最新标准，避免解析错误

    event.custom({
        "type": "thermal:crucible",
        "ingredient": {
            "item": "tconstruct:grout"
        },
        "result": [
            {
                "fluid": "tconstruct:seared_stone",
                "amount": 250
            }
        ],
        "energy": 2000
    }).id('kubejs:thermal/crucible/grout_to_seared_stone'); // 添加一个唯一的ID是个好习惯

    event.custom({
        "type": "thermal:crucible",
        "ingredient": {
            "item": "tconstruct:nether_grout"
        },
        "result": [
            {
                "fluid": "tconstruct:scorched_stone",
                "amount": 250
            }
        ],
        "energy": 2000
    }).id('kubejs:thermal/crucible/nether_grout_to_scorched_stone');

    event.custom({
        "type": "thermal:crucible",
        "ingredient": {
            "tag": "minecraft:soul_fire_base_blocks" // 输入是标签，所以用tag
        },
        "result": [
            {
                "fluid": "tconstruct:liquid_soul",
                "amount": 1000
            }
        ],
        "energy": 2000
    }).id('kubejs:thermal/crucible/soul_fire_base_to_liquid_soul');

    event.custom({
        "type": "thermal:crucible",
        "ingredient": {
            "item": "tconstruct:soul_glass"
        },
        "result": [
            {
                "fluid": "tconstruct:liquid_soul",
                "amount": 1000
            }
        ],
        "energy": 2000
    }).id('kubejs:thermal/crucible/soul_glass_to_liquid_soul');

    event.custom({
        "type": "thermal:crucible",
        "ingredient": {
            "item": "tconstruct:soul_glass_pane"
        },
        "result": [
            {
                "fluid": "tconstruct:liquid_soul",
                "amount": 250 // 注意: 玻璃板通常产出较少流体，原作者设为250是合理的
            }
        ],
        "energy": 500 // 熔炼玻璃板的能量消耗通常也较低
    }).id('kubejs:thermal/crucible/soul_glass_pane_to_liquid_soul');

});