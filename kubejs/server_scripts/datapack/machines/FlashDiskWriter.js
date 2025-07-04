ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/flash_disk_writer.json`, {
		"name": "block.cmi.flash_disk_writer",
		"appearance": {
			"idle": {
				"block": "cmi:machine/flash_disk_writer/off"
			},
			"running": {
				"block": "cmi:machine/flash_disk_writer/on"
			},
			"errored": {
				"block": "cmi:machine/flash_disk_writer/off"
			},
			"paused": {
				"block": "cmi:machine/flash_disk_writer/off"
			},
			"interaction_sound": "minecraft:iron_block",
			"mining_level": "minecraft:needs_iron_tool",
			"requires_tool": true
		},
		"components": [
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"mode": "input",
				"capacity": 2000000,
				"config": {
					"default": "both"
				}
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"id": "mechanism_1",
				"filter": [
					"cmi:programmed_flash_drive"
				]
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"id": "mechanism_2",
				"filter": [
					"cmi:programmed_flash_drive"
				]
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"id": "mechanism_3",
				"filter": [
					"cmi:programmed_flash_drive"
				]
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"id": "mechanism_4",
				"filter": [
					"cmi:programmed_flash_drive"
				]
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"id": "flash_drive",
				"filter": [
					"#create:mechanisms"
				]
			},
			{
				"type": "custommachinery:item",
				"mode": "output",
				"id": "output"
			}
		],
		"gui": [
			{
				"type": "custommachinery:text",
				"text": "machine.cmi.flash_disk_writer",
				"x": 110,
				"y": 5
			},
			{
				"type": "custommachinery:texture",
				"texture": "custommachinery:textures/gui/base_background.png",
				"x": 0,
				"y": 0
			},
			{
				"type": "custommachinery:player_inventory",
				"x": 47,
				"y": 80
			},
			{
				"type": "custommachinery:progress",
				"x": 110,
				"y": 45
			},
			{
				"type": "custommachinery:status",
				"x": 236,
				"y": 5
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_1",
				"x": 69,
				"y": 34
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_2",
				"x": 89,
				"y": 34
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_3",
				"x": 69,
				"y": 54
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_4",
				"x": 89,
				"y": 54
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/flash_drive_slot.png",
				"id": "flash_drive",
				"x": 79,
				"y": 14
			},
			{
				"type": "custommachinery:slot",
				"id": "output",
				"x": 140,
				"y": 44
			},
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"x": 165,
				"y": 30
			}
		],
		"jei": [
			{
				"type": "custommachinery:text",
				"text": "machine.cmi.flash_disk_writer",
				"x": 110,
				"y": 5
			},
			{
				"type": "custommachinery:texture",
				"texture": "custommachinery:textures/gui/base_background.png",
				"x": 0,
				"y": 0
			},
			{
				"type": "custommachinery:player_inventory",
				"x": 47,
				"y": 80
			},
			{
				"type": "custommachinery:progress",
				"x": 110,
				"y": 45
			},
			{
				"type": "custommachinery:status",
				"x": 236,
				"y": 5
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_1",
				"x": 69,
				"y": 34
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_2",
				"x": 89,
				"y": 34
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_3",
				"x": 69,
				"y": 54
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/mechanism_slot.png",
				"id": "mechanism_4",
				"x": 89,
				"y": 54
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/flash_drive_slot.png",
				"id": "flash_drive",
				"x": 79,
				"y": 14
			},
			{
				"type": "custommachinery:slot",
				"id": "output",
				"x": 140,
				"y": 44
			},
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"x": 165,
				"y": 30
			}
		]
	})
})