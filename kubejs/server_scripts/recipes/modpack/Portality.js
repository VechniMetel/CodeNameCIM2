//Portality的部件配方
ServerEvents.recipes((event) => {
    let { create } = event.recipes
    let INC_FRAME = 'portality:frame'
    create.sequenced_assembly('portality:controller', [
        INC_FRAME
    ], [
        create.deploying(INC_FRAME, [INC_FRAME, 'create:electron_tube']),
        create.cutting(INC_FRAME, INC_FRAME),
        create.deploying(INC_FRAME, [INC_FRAME, 'supplementaries:crystal_display']),
        create.deploying(INC_FRAME, [INC_FRAME, 'supplementaries:crystal_display']),
        create.deploying(INC_FRAME, [INC_FRAME, 'cmi:ender_mechanism']),
    ]).transitionalItem(INC_FRAME).loops(1)
    create.sequenced_assembly('8x portality:frame', [
        'minecraft:quartz_block'
    ], [
        create.pressing(INC_FRAME, INC_FRAME),
        create.deploying(INC_FRAME, [INC_FRAME, 'cmi:ender_mechanism']),
        create.cutting(INC_FRAME, INC_FRAME),
    ]).transitionalItem(INC_FRAME).loops(1)
    create.sequenced_assembly('portality:module_energy', [
        INC_FRAME
    ], [
        create.deploying(INC_FRAME, [INC_FRAME, '#cmi:batteries']),
        create.pressing(INC_FRAME, INC_FRAME),
        create.deploying(INC_FRAME, [INC_FRAME, 'cmi:ender_mechanism']),
    ]).transitionalItem(INC_FRAME).loops(1)
    create.sequenced_assembly('portality:module_fluids', [
        INC_FRAME
    ], [
        create.deploying(INC_FRAME, [INC_FRAME, 'create:fluid_tank']),
        create.pressing(INC_FRAME, INC_FRAME),
        create.deploying(INC_FRAME, [INC_FRAME, 'cmi:ender_mechanism']),
    ]).transitionalItem(INC_FRAME).loops(1)
    create.sequenced_assembly('portality:module_items', [
        INC_FRAME
    ], [
        create.deploying(INC_FRAME, [INC_FRAME, '#forge:chests']),
        create.pressing(INC_FRAME, INC_FRAME),
        create.deploying(INC_FRAME, [INC_FRAME, 'cmi:ender_mechanism']),
    ]).transitionalItem(INC_FRAME).loops(1)
    create.sequenced_assembly('portality:module_interdimensional', [
        INC_FRAME
    ], [
        create.deploying(INC_FRAME, [INC_FRAME, 'minecraft:ender_eye']),
        create.pressing(INC_FRAME, INC_FRAME),
        create.deploying(INC_FRAME, [INC_FRAME, 'cmi:ender_mechanism']),
    ]).transitionalItem(INC_FRAME).loops(1)
    create.sequenced_assembly('portality:teleportation_token', [
        INC_FRAME
    ], [
        create.deploying(INC_FRAME, [INC_FRAME, 'create:schedule']),
        create.pressing(INC_FRAME, INC_FRAME),
        create.deploying(INC_FRAME, [INC_FRAME, 'cmi:ender_mechanism']),
    ]).transitionalItem(INC_FRAME).loops(1)
})