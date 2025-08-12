StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setIcon("cmi:charged_amethyst")
	event.setDisplayName(Component.translate(`itemGroup.${global.namespace}.all`))

	event.add([
		"cmi:water_pump"
	])

	event.remove(`#${global.namespace}:io_debug_block`)
	event.remove("#forge:chem_salts")
	event.remove("#create:mechanisms")
	event.remove("#create:incomplete_mechanisms")
	event.remove(`#${global.namespace}:mechanism_parts`)
	event.remove(`#${global.namespace}:mechanism_flash_drives`)
	event.remove("#tconstruct:casts/multi_use/mechanism")
	event.remove("#tconstruct:casts/single_use/mechanism")
	event.remove("#tconstruct:casts/multi_use/nugget")
	event.remove(`#${global.namespace}:metals`)
	event.remove(`#${global.namespace}:ores`)
	event.remove(`#${global.namespace}:raw_metals`)
	event.remove(`#${global.namespace}:ore_nodes`)
	event.remove(`#${global.namespace}:dev_doll`)
	event.remove(`#${global.namespace}:machine_block`)
})

StartupEvents.modifyCreativeTab("create:base", (event) => {
	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])
})

StartupEvents.modifyCreativeTab("thermal_extra:resources", (event) => {
	event.add([
		"thermal_extra:polyolefin_plate"
	])
})

StartupEvents.modifyCreativeTab("tconstruct:smeltery", (event) => {
	event.add([
		"cmi:mechanism_cast",
		"cmi:mechanism_sand_cast",
		"cmi:mechanism_red_sand_cast"
	])
})

StartupEvents.modifyCreativeTab("thermalconstruct:thermal_construct_tab", (event) => {
	event.add([
		"cmi:bronze_mechanism_cast",
		"cmi:bronze_nugget_cast"
	])
})

StartupEvents.modifyCreativeTab("functionalstorage:main", (event) => {
	event.setIcon("functionalstorage:cherry_1")
})