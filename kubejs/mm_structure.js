layout(a => {
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