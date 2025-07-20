MMEvents.createStructures((event) => {
    event.create("mm:large_steam_boiler_structure")
        .controllerId("mm:large_steam_boiler")
        .name(" ")
        .layout(a => {
            a.layer([
                "DDD",
                "DDD",
                "DDD"
            ]).layer([
                "DDD",
                "D D",
                "DDD"
            ])
            .layer([
                "DCD",
                "E F",
                "DDD"
            ])
            .layer([
                "ABA",
                "AAA",
                "AAA"
            ])

            .key("F", {
                block: "mm:large_steam_boiler_fluid_input"
            })
            .key("B", {
                block: "mm:large_steam_boiler_item_input"
            })
            .key("A", {
                block: "tconstruct:seared_bricks"
            })
            .key("E", {
                block: "mm:large_steam_boiler_fluid_output"
            })
            .key("D", {
                block: "cmi:bronze_casing"
            })
        })
});
MMEvents.createProcesses(event => {
    event.create("mm:large_steam_boiler_recipe_1")
        .structureId("mm:large_steam_boiler_structure")
        .ticks(15)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:water",
                amount: 1000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:charcoal",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "cmi:steam",
                amount: 3000
            }
        })
});
MMEvents.createProcesses(event => {
    event.create("mm:large_steam_boiler_recipe_2")
        .structureId("mm:large_steam_boiler_structure")
        .ticks(15)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:water",
                amount: 1000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "cmi:steam",
                amount: 4500
            }
        })
});