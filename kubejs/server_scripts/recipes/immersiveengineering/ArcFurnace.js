ServerEvents.recipes((event) => {

	// 不锈钢
	event.custom({
        type: 'immersiveengineering:arc_furnace',
        additives: [
            { "tag": "forge:ingots/chromium" },
            { "tag": "forge:ingots/invar" }
        ],
        input: { "tag": "forge:ingots/steel" },
        slag: { "tag": "forge:slag" },
        results: [
            { "tag": "forge:ingots/stainless_steel" }
        ],
        time: 400,
        energy: 8000 
    });

	// 钢
	event.custom({
        type: 'immersiveengineering:arc_furnace',
        additives: [
            { "tag": "forge:coal_coke" }
        ],
        input: { "tag": "forge:ingots/iron" },
        slag: { "tag": "forge:slag" },
        results: [
            { "tag": "forge:ingots/steel" }
        ],
        time: 400,
        energy: 8000
    });
});