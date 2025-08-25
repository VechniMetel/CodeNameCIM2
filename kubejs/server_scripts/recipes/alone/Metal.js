ServerEvents.recipes((event) => {
    const getFirstItem = (tag) => Ingredient.of(tag).getFirst();
    const tagIsEmpty = (tag) => Ingredient.of(tag).isEmpty();
    const TEMPERATURE = 800;

    if (!global.metalGroup || !Array.isArray(global.metalGroup)) {
        console.warn('[KJS/Metal.js] global.metalGroup is not defined or not an array. Aborting script.');
        return;
    }

    const uniqueMetalGroup = global.metalGroup.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    const addTconMelting = (event, tconFluid, tag, amount, time) => {
        if (!tagIsEmpty(tag)) {
            event.custom({
                type: "tconstruct:melting",
                ingredient: { tag: tag.replace('#', '') },
                result: { fluid: tconFluid, amount: amount },
                temperature: TEMPERATURE,
                time: time
            });
        }
    };

    // --- 核心修正点 #1 ---
    const addTconCastingTable = (event, outputTag, castTag, tconFluid, amount, time) => {
        if (!tagIsEmpty(outputTag)) {
            const outputItem = getFirstItem(outputTag);
            // 增加对 outputItem.id 的检查，确保它不是 null 或 undefined
            if (!outputItem.isEmpty() && outputItem.id) {
                event.custom({
                    type: "tconstruct:casting_table",
                    cast: { tag: castTag.replace('#', '') },
                    fluid: { name: tconFluid, amount: amount },
                    result: { item: outputItem.id },
                    cooling_time: time
                });
                event.custom({
                    type: "tconstruct:casting_table",
                    cast: { tag: castTag.replace('#', '').replace('multi_use', 'single_use') },
                    cast_consumed: true,
                    fluid: { name: tconFluid, amount: amount },
                    result: { item: outputItem.id },
                    cooling_time: time
                });
            }
        }
    };
    
    // --- 核心修正点 #2 ---
    const addTconCastingBasin = (event, outputTag, tconFluid, amount, time) => {
        if (!tagIsEmpty(outputTag)) {
            const outputItem = getFirstItem(outputTag);
            // 增加对 outputItem.id 的检查
            if(!outputItem.isEmpty() && outputItem.id){
                event.custom({
                    type: "tconstruct:casting_basin",
                    fluid: { name: tconFluid, amount: amount },
                    result: { item: outputItem.id },
                    cooling_time: time
                });
            }
        }
    };

    const addTconOreMelting = (event, tconFluid, tag, amount, time) => {
        if (!tagIsEmpty(tag)) {
            event.custom({
                type: "tconstruct:ore_melting",
                rate: "metal",
                ingredient: { tag: tag.replace('#', '') },
                result: { fluid: tconFluid, amount: amount },
                temperature: TEMPERATURE,
                time: time
            });
        }
    };
    
    const fluidMods = ["cmi", "thermalconstruct", "tconstruct"];

    uniqueMetalGroup.forEach((metal) => {
        try {
            if (!metal || typeof metal !== 'string' || metal.trim() === '') return;

            let tconFluid = "";
            for (const modid of fluidMods) {
                let fluidId = `${modid}:molten_${metal}`;
                if (Fluid.exists(fluidId)) {
                    tconFluid = fluidId;
                    break;
                }
            }

            if (tconFluid) {
                addTconMelting(event, tconFluid, `#forge:ingots/${metal}`, 90, 60);
                addTconMelting(event, tconFluid, `#forge:nuggets/${metal}`, 10, 20);
                addTconMelting(event, tconFluid, `#forge:storage_blocks/${metal}`, 810, 180);
                addTconMelting(event, tconFluid, `#forge:plates/${metal}`, 90, 60);
                addTconMelting(event, tconFluid, `#forge:dusts/${metal}`, 90, 60);
                addTconMelting(event, tconFluid, `#forge:rods/${metal}`, 45, 30);
                addTconMelting(event, tconFluid, `#forge:gears/${metal}`, 360, 150);
                addTconMelting(event, tconFluid, `#forge:coins/${metal}`, 30, 30);
                
                addTconCastingTable(event, `#forge:ingots/${metal}`, '#tconstruct:casts/multi_use/ingot', tconFluid, 90, 60);
                addTconCastingTable(event, `#forge:nuggets/${metal}`, '#tconstruct:casts/multi_use/nugget', tconFluid, 10, 20);
                addTconCastingBasin(event, `#forge:storage_blocks/${metal}`, tconFluid, 810, 180);
                addTconCastingTable(event, `#forge:plates/${metal}`, '#tconstruct:casts/multi_use/plate', tconFluid, 90, 60);
                addTconCastingTable(event, `#forge:rods/${metal}`, '#tconstruct:casts/multi_use/rod', tconFluid, 45, 30);
                addTconCastingTable(event, `#forge:gears/${metal}`, '#tconstruct:casts/multi_use/gear', tconFluid, 360, 150);
                addTconCastingTable(event, `#forge:coins/${metal}`, '#tconstruct:casts/multi_use/coin', tconFluid, 30, 30);

                addTconOreMelting(event, tconFluid, `#forge:raw_materials/${metal}`, 90, 90);
                addTconOreMelting(event, tconFluid, `#forge:storage_blocks/raw_${metal}`, 810, 360);
                addTconOreMelting(event, tconFluid, `#forge:ores/${metal}`, 180, 150);
            }

            let ingot = getFirstItem(`#forge:ingots/${metal}`);
            if (ingot.isEmpty()) return;

            if (!tagIsEmpty(`#forge:storage_blocks/${metal}`)) {
                let metalBlock = getFirstItem(`#forge:storage_blocks/${metal}`);
                if(!metalBlock.isEmpty()){
                    event.shapeless(ingot.withCount(9), [metalBlock]);
                    event.shaped(metalBlock, ["AAA", "AAA", "AAA"], { A: ingot });
                }
            }
            if (!tagIsEmpty(`#forge:nuggets/${metal}`)) {
                let nugget = getFirstItem(`#forge:nuggets/${metal}`);
                if(!nugget.isEmpty()){
                    event.shapeless(ingot, [Item.of(nugget, 9)]);
                    event.shaped(nugget.withCount(9), [ingot]); // 修正：之前这里是锭合成锭
                }
            }
            if (!tagIsEmpty(`#forge:ores/${metal}`)) {
                event.recipes.thermal.smelter([ingot.withCount(2), Item.of("thermal:rich_slag").withChance(0.2)], `#forge:ores/${metal}`);
                event.custom({ type: 'immersiveengineering:arc_furnace', additives: [], energy: 102400, input: { tag: `forge:ores/${metal}` }, results: [{ item: ingot.id, count: 2 }], secondaries:[], slag: { item: 'immersiveengineering:slag' }, time: 200 });
            }
            if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
                let raw = getFirstItem(`#forge:raw_materials/${metal}`);
                if (!raw.isEmpty() && !tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                    let rawBlock = getFirstItem(`#forge:storage_blocks/raw_${metal}`);
                    if(!rawBlock.isEmpty()){
                        event.shapeless(raw.withCount(9), [rawBlock]);
                        event.shaped(rawBlock, ["AAA", "AAA", "AAA"], { A: raw });
                    }
                }
                event.recipes.thermal.smelter([ingot.withChance(1.5)], `#forge:raw_materials/${metal}`);
                event.custom({ type: 'immersiveengineering:arc_furnace', additives: [], energy: 230400, input: { tag: `forge:raw_materials/${metal}` }, results: [{ item: ingot.id }], secondaries: [{ output: { item: ingot.id }, chance: 0.5 }], slag: { item: 'immersiveengineering:slag' }, time: 900 });
            }
            if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                event.custom({ type: 'immersiveengineering:arc_furnace', additives: [], energy: 204800, input: { tag: `forge:storage_blocks/raw_${metal}` }, results: [{ item: ingot.id, count: 13 }], secondaries: [{ output: { item: ingot.id }, chance: 0.5 }], slag: { item: 'immersiveengineering:slag' }, time: 1800 });
            }
            if (!tagIsEmpty(`#create:crushed_raw_materials/${metal}`)) {
                let crushed = getFirstItem(`#create:crushed_raw_materials/${metal}`);
                if (!crushed.isEmpty()) {
                    if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) event.recipes.create.crushing([crushed.withCount(9), Item.of('create:experience_nugget', 9).withChance(0.75)], `#forge:storage_blocks/raw_${metal}`);
                    if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) event.recipes.create.crushing([crushed, Item.of('create:experience_nugget').withChance(0.75)], `#forge:raw_materials/${metal}`);
                    if (!tagIsEmpty(`#forge:ores/${metal}`)) event.recipes.create.crushing([crushed, crushed.withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobblestone').withChance(0.125)], `#forge:ores/${metal}`);
                    event.smelting(ingot, `#create:crushed_raw_materials/${metal}`);
                    event.blasting(ingot, `#create:crushed_raw_materials/${metal}`);
                }
            }
            if (!tagIsEmpty(`#forge:dusts/${metal}`)) {
                let dust = getFirstItem(`#forge:dusts/${metal}`);
                if (!dust.isEmpty()) {
                    event.smelting(ingot, dust);
                    event.blasting(ingot, dust);
                    event.recipes.thermal.pulverizer(dust, ingot).energy(2000);
                    event.recipes.thermal.smelter(ingot, dust).energy(1600);
                    event.custom({type: 'immersiveengineering:crusher', secondaries: [], result: { item: dust.id }, input: { tag: `forge:ingots/${metal}` }, energy: 6000});
                    event.recipes.mekanism.crushing(dust, ingot);
                    if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
                        event.recipes.thermal.pulverizer(dust.withChance(1.25), `#forge:raw_materials/${metal}`);
                        event.custom({type: 'immersiveengineering:crusher', secondaries: [{ output: { item: dust.id }, chance: 0.333 }], result: { item: dust.id }, input: { tag: `forge:raw_materials/${metal}` }, energy: 6000});
                        event.recipes.mekanism.enriching(dust.withCount(4), `3x #forge:raw_materials/${metal}`);
                    }
                    if (!tagIsEmpty(`#forge:ores/${metal}`)) {
                        event.recipes.thermal.pulverizer(dust.withCount(2), `#forge:ores/${metal}`);
                        event.custom({type: 'immersiveengineering:crusher', secondaries: [], result: { item: dust.id, count: 2 }, input: { tag: `forge:ores/${metal}` }, energy: 6000});
                        event.recipes.mekanism.enriching(dust.withCount(2), `#forge:ores/${metal}`);
                    }
                    if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                        event.custom({type: 'immersiveengineering:crusher', secondaries: [], result: { item: dust.id, count: 12 }, input: { tag: `forge:storage_blocks/raw_${metal}` }, energy: 6000});
                        event.recipes.mekanism.enriching(dust.withCount(12), `#forge:storage_blocks/raw_${metal}`);
                    }
                }
            }
            if (!tagIsEmpty(`#forge:plates/${metal}`)) {
                let plate = getFirstItem(`#forge:plates/${metal}`);
                if (!plate.isEmpty()) {
                    event.recipes.create.pressing(plate, ingot);
                    event.recipes.thermal.press(plate, ingot);
                    event.recipes.thermal.smelter(ingot, plate).energy(1600);
                    event.recipes.immersiveengineering.metal_press(plate, ingot, 'immersiveengineering:mold_plate');
                }
            }
            if (!tagIsEmpty(`#forge:rods/${metal}`)) {
                let rod = getFirstItem(`#forge:rods/${metal}`);
                if (!rod.isEmpty()) {
                    event.recipes.createaddition.rolling(rod.withCount(2), ingot);
                    event.recipes.thermal.press(rod.withCount(2), [ingot, "thermal_extra:press_rod_die"]);
                    event.recipes.immersiveengineering.metal_press(rod.withCount(2), ingot, 'immersiveengineering:mold_rod');
                }
            }
            if (!tagIsEmpty(`#forge:gears/${metal}`)) {
                let gear = getFirstItem(`#forge:gears/${metal}`);
                if (!gear.isEmpty()) {
                    event.shaped(gear, [" A ", "A A", " A "], { A: ingot });
                    event.recipes.thermal.press(gear, [Item.of(ingot, 4), "thermal:press_gear_die"]);
                    event.recipes.thermal.smelter(Item.of(ingot, 4), gear);
                    event.recipes.immersiveengineering.metal_press(gear, Item.of(ingot, 4), 'immersiveengineering:mold_gear');
                }
            }
            if (!tagIsEmpty(`#forge:coins/${metal}`)) {
                let coin = getFirstItem(`#forge:coins/${metal}`);
                if (!coin.isEmpty()) {
                    event.recipes.thermal.press(coin.withCount(3), [ingot, "thermal:press_coin_die"]);
                    if (!tagIsEmpty(`#forge:nuggets/${metal}`)) {
                        let nugget = getFirstItem(`#forge:nuggets/${metal}`);
                        if (!nugget.isEmpty()) {
                            event.recipes.thermal.press(coin, [nugget.withCount(3), "thermal:press_coin_die"]).energy(800);
                            event.recipes.thermal.smelter(nugget.withCount(3), coin).energy(800);
                        }
                    }
                }
            }

        } catch (error) {
            console.error(`[KJS/Metal.js] CRITICAL ERROR while processing metal: [${metal}]. This metal is likely the cause of recipe errors.`);
            console.error(error);
        }
    });
});