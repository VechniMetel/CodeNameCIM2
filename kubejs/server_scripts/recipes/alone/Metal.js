ServerEvents.recipes((event) => {
    const getFirstItem = (tag) => {
        const ingredient = Ingredient.of(tag);
        if (ingredient && !ingredient.isEmpty()) {
            return ingredient.getFirst();
        }
        return Item.empty;
    };
    
    const tagIsEmpty = (tag) => {
        const ingredient = Ingredient.of(tag);
        return !ingredient || ingredient.isEmpty();
    };
    
    const TEMPERATURE = 800;

    const thermal = event.recipes.thermal;
    const immersiveengineering = event.recipes.immersiveengineering;
    const create = event.recipes.create;
    const createaddition = event.recipes.createaddition;
    const mekanism = event.recipes.mekanism;

    const createTconMelting = (tconFluid, tagString, fluidAmount, time) => {
        if (!tagIsEmpty(tagString)) {
            const cleanTag = tagString.replace('#', '');
            event.custom({
                type: 'tconstruct:melting',
                ingredient: { tag: cleanTag },
                result: { fluid: tconFluid, amount: fluidAmount },
                temperature: TEMPERATURE,
                time: time
            });
        }
    };

    if (!global.metalGroup || !Array.isArray(global.metalGroup)) {
        console.warn('[KJS/Metal.js] global.metalGroup is not defined or not an array');
        return;
    }

    global.metalGroup.forEach((metal) => {
        if (!metal) return;
        
        let tconFluid = "";
        let ingotItem = Item.empty;
        let nuggetItem = Item.empty;
        let blockItem = Item.empty;
        let plateItem = Item.empty;
        let rodItem = Item.empty;
        let gearItem = Item.empty;
        let coinItem = Item.empty;
        let ingot = Item.empty;
        let block = Item.empty;
        let nugget = Item.empty;
        let raw = Item.empty;
        let rawBlock = Item.empty;
        let crushed = Item.empty;
        let dust = Item.empty;
        let plate = Item.empty;
        let rod = Item.empty;
        let gear = Item.empty;
        let coin = Item.empty;

        ["cmi", "thermalconstruct", "tconstruct"].forEach((modid) => {
            if (Fluid.exists(`${modid}:molten_${metal}`)) {
                tconFluid = `${modid}:molten_${metal}`;
            }
        });

        if (tconFluid !== "") {
            createTconMelting(tconFluid, `#forge:ingots/${metal}`, 90, 60);
            createTconMelting(tconFluid, `#forge:nuggets/${metal}`, 10, 20);
            createTconMelting(tconFluid, `#forge:storage_blocks/${metal}`, 810, 180);
            createTconMelting(tconFluid, `#forge:plates/${metal}`, 90, 60);
            createTconMelting(tconFluid, `#forge:dusts/${metal}`, 90, 60);
            createTconMelting(tconFluid, `#forge:rods/${metal}`, 45, 30);
            createTconMelting(tconFluid, `#forge:gears/${metal}`, 360, 150);
            createTconMelting(tconFluid, `#forge:coins/${metal}`, 30, 30);

            ingotItem = getFirstItem(`#forge:ingots/${metal}`);
            if (ingotItem && !ingotItem.isEmpty()) {
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/multi_use/ingot' }, fluid: { name: tconFluid, amount: 90 }, result: ingotItem.id, cooling_time: 60 });
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/single_use/ingot' }, cast_consumed: true, fluid: { name: tconFluid, amount: 90 }, result: ingotItem.id, cooling_time: 60 });
            }
            
            nuggetItem = getFirstItem(`#forge:nuggets/${metal}`);
            if (nuggetItem && !nuggetItem.isEmpty()) {
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/multi_use/nugget' }, fluid: { name: tconFluid, amount: 10 }, result: nuggetItem.id, cooling_time: 20 });
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/single_use/nugget' }, cast_consumed: true, fluid: { name: tconFluid, amount: 10 }, result: nuggetItem.id, cooling_time: 20 });
            }
            
            blockItem = getFirstItem(`#forge:storage_blocks/${metal}`);
            if (blockItem && !blockItem.isEmpty()) {
                event.custom({ type: 'tconstruct:casting_basin', fluid: { name: tconFluid, amount: 810 }, result: blockItem.id, cooling_time: 180 });
            }
            
            plateItem = getFirstItem(`#forge:plates/${metal}`);
            if (plateItem && !plateItem.isEmpty()) {
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/multi_use/plate' }, fluid: { name: tconFluid, amount: 90 }, result: plateItem.id, cooling_time: 60 });
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/single_use/plate' }, cast_consumed: true, fluid: { name: tconFluid, amount: 90 }, result: plateItem.id, cooling_time: 60 });
            }
            
            rodItem = getFirstItem(`#forge:rods/${metal}`);
            if (rodItem && !rodItem.isEmpty()) {
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/multi_use/rod' }, fluid: { name: tconFluid, amount: 45 }, result: rodItem.id, cooling_time: 30 });
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/single_use/rod' }, cast_consumed: true, fluid: { name: tconFluid, amount: 45 }, result: rodItem.id, cooling_time: 30 });
            }
            
            gearItem = getFirstItem(`#forge:gears/${metal}`);
            if (gearItem && !gearItem.isEmpty()) {
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/multi_use/gear' }, fluid: { name: tconFluid, amount: 360 }, result: gearItem.id, cooling_time: 150 });
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/single_use/gear' }, cast_consumed: true, fluid: { name: tconFluid, amount: 360 }, result: gearItem.id, cooling_time: 150 });
            }
            
            coinItem = getFirstItem(`#forge:coins/${metal}`);
            if (coinItem && !coinItem.isEmpty()) {
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/multi_use/coin' }, fluid: { name: tconFluid, amount: 30 }, result: coinItem.id, cooling_time: 30 });
                event.custom({ type: 'tconstruct:casting_table', cast: { tag: 'tconstruct:casts/single_use/coin' }, cast_consumed: true, fluid: { name: tconFluid, amount: 30 }, result: coinItem.id, cooling_time: 30 });
            }

            if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
                event.custom({ type: "tconstruct:ore_melting", rate: "metal", ingredient: { tag: `forge:raw_materials/${metal}` }, result: { fluid: tconFluid, amount: 90 }, temperature: TEMPERATURE, time: 90 });
            }
            if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                event.custom({ type: "tconstruct:ore_melting", rate: "metal", ingredient: { tag: `forge:storage_blocks/raw_${metal}` }, result: { fluid: tconFluid, amount: 810 }, temperature: TEMPERATURE, time: 360 });
            }
            if (!tagIsEmpty(`#forge:ores/${metal}`)) {
                event.custom({ type: "tconstruct:ore_melting", rate: "metal", ingredient: { tag: `forge:ores/${metal}` }, result: { fluid: tconFluid, amount: 180 }, temperature: TEMPERATURE, time: 150 });
            }
        }
        
        ingot = getFirstItem(`#forge:ingots/${metal}`);
        if (ingot && !ingot.isEmpty()) {
            if (!tagIsEmpty(`#forge:storage_blocks/${metal}`)) {
                block = getFirstItem(`#forge:storage_blocks/${metal}`);
                if (block && !block.isEmpty()) {
                    event.shapeless(ingot.withCount(9), [block]);
                    event.shaped(block, ["AAA", "AAA", "AAA"], { A: ingot });
                }
            }
            if (!tagIsEmpty(`#forge:nuggets/${metal}`)) {
                nugget = getFirstItem(`#forge:nuggets/${metal}`);
                if (nugget && !nugget.isEmpty()) {
                    event.shapeless(ingot, [nugget.withCount(9)]);
                    event.shaped(ingot, ["AAA", "AAA", "AAA"], { A: nugget });
                }
            }
            if (!tagIsEmpty(`#forge:ores/${metal}`)) {
                thermal.smelter([ingot.withCount(2), Item.of("thermal:rich_slag").withChance(0.2)], `#forge:ores/${metal}`);
                event.custom({ type: 'immersiveengineering:arc_furnace', additives: [], energy: 102400, input: { tag: `forge:ores/${metal}` }, results: [{ item: ingot.id, count: 2 }], slag: { item: 'immersiveengineering:slag' }, time: 200 });
            }
            if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
                raw = getFirstItem(`#forge:raw_materials/${metal}`);
                if (raw && !raw.isEmpty()) {
                    if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                        rawBlock = getFirstItem(`#forge:storage_blocks/raw_${metal}`);
                        if (rawBlock && !rawBlock.isEmpty()){
                            event.shapeless(raw.withCount(9), [rawBlock]);
                            event.shaped(rawBlock, ["AAA", "AAA", "AAA"], { A: raw });
                        }
                    }
                    thermal.smelter([ingot.withChance(1.5)], `#forge:raw_materials/${metal}`);
                    event.custom({ type: 'immersiveengineering:arc_furnace', additives: [], energy: 230400, input: { tag: `forge:raw_materials/${metal}` }, results: [{ item: ingot.id }], secondaries: [{ output: { item: ingot.id }, chance: 0.5 }], slag: { item: 'immersiveengineering:slag' }, time: 900 });
                }
            }
            if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                event.custom({ type: 'immersiveengineering:arc_furnace', additives: [], energy: 204800, input: { tag: `forge:storage_blocks/raw_${metal}` }, results: [{ item: ingot.id, count: 13 }], secondaries: [{ output: { item: ingot.id }, chance: 0.5 }], slag: { item: 'immersiveengineering:slag' }, time: 1800 });
            }
            if (!tagIsEmpty(`#create:crushed_raw_materials/${metal}`)) {
                crushed = getFirstItem(`#create:crushed_raw_materials/${metal}`);
                if (crushed && !crushed.isEmpty()){
                    if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                        create.crushing([crushed.withCount(9), Item.of('create:experience_nugget', 9).withChance(0.75)], `#forge:storage_blocks/raw_${metal}`);
                    }
                    if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
                        create.crushing([crushed, Item.of('create:experience_nugget').withChance(0.75)], `#forge:raw_materials/${metal}`);
                    }
                    if (!tagIsEmpty(`#forge:ores/${metal}`)) {
                        create.crushing([crushed, crushed.withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobblestone').withChance(0.125)], `#forge:ores/${metal}`);
                    }
                    event.smelting(ingot, `#create:crushed_raw_materials/${metal}`);
                    event.blasting(ingot, `#create:crushed_raw_materials/${metal}`);
                }
            }
            if (!tagIsEmpty(`#forge:dusts/${metal}`)) {
                dust = getFirstItem(`#forge:dusts/${metal}`);
                if (dust && !dust.isEmpty()){
                    event.smelting(ingot, dust);
                    event.blasting(ingot, dust);
                    thermal.pulverizer(dust, ingot).energy(2000);
                    thermal.smelter(ingot, dust).energy(1600);
                    immersiveengineering.crusher(dust, ingot);
                    mekanism.crushing(dust, ingot);
                    if (!tagIsEmpty(`#forge:raw_materials/${metal}`)) {
                        thermal.pulverizer(dust.withChance(1.25), `#forge:raw_materials/${metal}`);
                        immersiveengineering.crusher(dust, `#forge:raw_materials/${metal}`).secondaries(dust.withChance(0.333));
                        mekanism.enriching(dust.withCount(4), `3x #forge:raw_materials/${metal}`);
                    }
                    if (!tagIsEmpty(`#forge:ores/${metal}`)) {
                        thermal.pulverizer(dust.withCount(2), `#forge:ores/${metal}`);
                        immersiveengineering.crusher(dust.withCount(2), `#forge:ores/${metal}`);
                        mekanism.enriching(dust.withCount(2), `#forge:ores/${metal}`);
                    }
                    if (!tagIsEmpty(`#forge:storage_blocks/raw_${metal}`)) {
                        immersiveengineering.crusher(dust.withCount(12), `#forge:storage_blocks/raw_${metal}`);
                        mekanism.enriching(dust.withCount(12), `#forge:storage_blocks/raw_${metal}`);
                    }
                }
            }
            if (!tagIsEmpty(`#forge:plates/${metal}`)) {
                plate = getFirstItem(`#forge:plates/${metal}`);
                if (plate && !plate.isEmpty()){
                    create.pressing(plate, ingot);
                    thermal.press(plate, ingot);
                    thermal.smelter(ingot, plate).energy(1600);
                    immersiveengineering.metal_press(plate, ingot, 'immersiveengineering:mold_plate');
                }
            }
            if (!tagIsEmpty(`#forge:rods/${metal}`)) {
                rod = getFirstItem(`#forge:rods/${metal}`);
                if (rod && !rod.isEmpty()){
                    createaddition.rolling(rod.withCount(2), ingot);
                    thermal.press(rod.withCount(2), [ingot, "thermal_extra:press_rod_die"]);
                    immersiveengineering.metal_press(rod.withCount(2), ingot, 'immersiveengineering:mold_rod');
                }
            }
            if (!tagIsEmpty(`#forge:gears/${metal}`)) {
                gear = getFirstItem(`#forge:gears/${metal}`);
                if (gear && !gear.isEmpty()){
                    event.shaped(gear, [" A ", "A A", " A "], { A: ingot });
                    thermal.press(gear, [Item.of(ingot, 4), "thermal:press_gear_die"]);
                    thermal.smelter(Item.of(ingot, 4), gear);
                    immersiveengineering.metal_press(gear, Item.of(ingot, 4), 'immersiveengineering:mold_gear');
                }
            }
            if (!tagIsEmpty(`#forge:coins/${metal}`)) {
                coin = getFirstItem(`#forge:coins/${metal}`);
                if (coin && !coin.isEmpty()){
                    thermal.press(coin.withCount(3), [ingot, "thermal:press_coin_die"]);
                    if (!tagIsEmpty(`#forge:nuggets/${metal}`)) {
                        nugget = getFirstItem(`#forge:nuggets/${metal}`);
                        if (nugget && !nugget.isEmpty()){
                            thermal.press(coin, [nugget.withCount(3), "thermal:press_coin_die"]).energy(800);
                            thermal.smelter(nugget.withCount(3), coin).energy(800);
                        }
                    }
                }
            }
        }
    });
});