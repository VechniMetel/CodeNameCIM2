StartupEvents.registry("block", (event) => {
	// UE
	event.create(`${global.namespace}:unknown_entity_`, "cardinal")
		.soundType(SoundType.WOOL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
		.model(`${global.namespace}:block/dev/unknown_entity_`)
		.textureAll(`${global.namespace}:block/dev/unknown_entity_`)
		.notSolid()
		.defaultCutout()
		.notSolid()
		.noCollision()

	// 柒月
	event.create(`${global.namespace}:qi_month`, "cardinal")
		.soundType(SoundType.WOOL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
		.model(`${global.namespace}:block/dev/qi_month`)
		.textureAll(`${global.namespace}:block/dev/qi_month`)
		.notSolid()
		.defaultCutout()
		.noCollision()

	// 牢微
	event.create(`${global.namespace}:vechni_metel`, "cardinal")
		.soundType(SoundType.WOOL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
		.model(`${global.namespace}:block/dev/vechni_metel`)
		.textureAll(`${global.namespace}:block/dev/vechni_metel`)
		.notSolid()
		.defaultCutout()
		.noCollision()

	// 1174
	event.create(`${global.namespace}:117458866249`, "cardinal")
		.soundType(SoundType.WOOL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
		.model(`${global.namespace}:block/dev/117458866249`)
		.textureAll(`${global.namespace}:block/dev/117458866249`)
		.notSolid()
		.defaultCutout()
		.noCollision()

	// Aleegos
	event.create(`${global.namespace}:aleegos`, "cardinal")
		.soundType(SoundType.WOOL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
		.model(`${global.namespace}:block/dev/aleegos`)
		.textureAll(`${global.namespace}:block/dev/aleegos`)
		.notSolid()
		.defaultCutout()
		.noCollision()

	// FiberOptics
	event.create(`${global.namespace}:fiber_optics`, "cardinal")
		.soundType(SoundType.WOOL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
		.model(`${global.namespace}:block/dev/nether_k`)
		.textureAll(`${global.namespace}:block/dev/nether_k`)
		.notSolid()
		.defaultCutout()
		.noCollision()
})