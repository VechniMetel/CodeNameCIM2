ServerEvents.recipes((event) => {
    //iron
    e.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": "tconstruct:casts/multi_use/mechanism"
            },
            "cooling_time": 50,
            "fluid": {
                "amount": 180,
                "tag": "forge:molten_iron"
            },
            "result": "ue_addons:incomplete_iron_mechanism"
        }
    )
    //copper
    e.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": "tconstruct:casts/multi_use/mechanism"
            },
            "cooling_time": 50,
            "fluid": {
                "amount": 180,
                "tag": "forge:molten_copper"
            },
            "result": "ue_addons:incomplete_copper_mechanism"
        }
    )
    //gold
    e.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": "tconstruct:casts/multi_use/mechanism"
            },
            "cooling_time": 50,
            "fluid": {
                "amount": 180,
                "tag": "forge:molten_gold"
            },
            "result": "ue_addons:incomplete_gold_mechanism"
        }
    )
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": "ue_addons:wooden_mechanism"
        },
        "cast_consumed": true,
        "cooling_time": 57,
        "fluid": {
            "amount": 90,
            "tag": "forge:molten_gold"
        },
        "result": "ue_addons:mechanism_cast",
        "switch_slots": true
    }
    )
})