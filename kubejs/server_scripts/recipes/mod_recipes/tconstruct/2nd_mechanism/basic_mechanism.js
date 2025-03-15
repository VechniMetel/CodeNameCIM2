ServerEvents.recipes(e => {

  const create = e.recipes.create
  const iwm = 'ue_addons:incomplete_wooden_mechanism'
  const ism = 'ue_addons:incomplete_stone_mechanism'

  //wooden
  create.sequenced_assembly(
    'ue_addons:wooden_mechanism',
    '#forge:stripped_wood',
    [
    create.pressing(iwm, iwm),
    create.deploying(iwm, [iwm, 'minecraft:stick']),
    create.cutting(iwm, iwm),
    create.deploying(iwm, [iwm, 'ue_addons:basic_mechanism_part'])
    ]
  )
    .transitionalItem(iwm)
    .loops(1)

  //stone
  create.sequenced_assembly(
    'ue_addons:stone_mechanism',
    'minecraft:cobblestone',
    [
      create.pressing(ism, ism),
      create.deploying(ism, [ism, 'minecraft:flint']),
      create.deploying(ism, [ism, "tconstruct:seared_brick"]),
      create.deploying(ism, [ism, "ue_addons:basic_mechanism_part"])
    ]
  )
    .transitionalItem(ism)
    .loops(1)
});