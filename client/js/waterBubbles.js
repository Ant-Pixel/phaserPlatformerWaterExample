const waterBubbles = {};

waterBubbles.init = (game) => {
	waterBubbles.game = game;
}

waterBubbles.create = (emitX, emitY, bubblesDisappearY) => {
	let game = waterBubbles.game;
	let bubbleTravelDistance = bubblesDisappearY - emitY;
	console.log(bubbleTravelDistance);
	let bubbleTravelTime = bubbleTravelDistance/config.default.waterBubbles.particleSpeed.minParticleYSpeed;
	console.log(bubbleTravelTime);
	console.log(config.default.waterBubbles.particleSpeed.minParticleYSpeed);
	let lifespan = bubbleTravelTime*1000;
	let alphaEasingRate = bubbleTravelTime*1000;
	let scaleEasingRate = bubbleTravelTime*1000;

	waterBubbles.emitter = game.add.emitter(emitX, emitY, config.default.waterBubbles.maxParticles);
	let emitter = waterBubbles.emitter;
    emitter.makeParticles(config.default.waterBubbles.spriteKey);

    emitter.gravity = config.default.waterBubbles.yGravity;

	emitter.setXSpeed(config.default.waterBubbles.particleSpeed.minParticleXSpeed, config.default.waterBubbles.particleSpeed.maxParticleXSpeed);
	emitter.setYSpeed(config.default.waterBubbles.particleSpeed.minParticleYSpeed, config.default.waterBubbles.particleSpeed.maxParticleYSpeed);

	let scaleData = [config.default.waterBubbles.particleScale.minParticleXScale, config.default.waterBubbles.particleScale.maxParticleXScale, config.default.waterBubbles.particleScale.minParticleYScale, config.default.waterBubbles.particleScale.maxParticleYScale, scaleEasingRate, config.default.waterBubbles.particleScale.scaleEasingFormula, config.default.waterBubbles.particleScale.scaleYoyo];
	emitter.setScale(...scaleData);

	let alphaData = [config.default.waterBubbles.particleAlpha.minAlpha, config.default.waterBubbles.particleAlpha.maxAlpha, alphaEasingRate, config.default.waterBubbles.particleAlpha.alphaEasingFormula, config.default.waterBubbles.particleAlpha.alphaYoyo];
	emitter.setAlpha(...alphaData);

	let generalEmitterData = [config.default.waterBubbles.explode, lifespan, config.default.waterBubbles.frequency, config.default.waterBubbles.quantity, config.default.waterBubbles.forceQuantity];
	emitter.start(...generalEmitterData);
}

waterBubbles.update = (emitX, emitY, bubblesDisappearY) => {
	let game = waterBubbles.game;
	let bubbleTravelDistance = bubblesDisappearY - emitY;
	console.log(bubbleTravelDistance);
	let bubbleTravelTime = bubbleTravelDistance/config.default.waterBubbles.particleSpeed.minParticleYSpeed;
	console.log(bubbleTravelTime);
	console.log(config.default.waterBubbles.particleSpeed.minParticleYSpeed);
	let lifespan = bubbleTravelTime*1000;
	let alphaEasingRate = bubbleTravelTime*1000;
	let scaleEasingRate = bubbleTravelTime*1000;

	let emitter = waterBubbles.emitter;

	let scaleData = [config.default.waterBubbles.particleScale.minParticleXScale, config.default.waterBubbles.particleScale.maxParticleXScale, config.default.waterBubbles.particleScale.minParticleYScale, config.default.waterBubbles.particleScale.maxParticleYScale, scaleEasingRate, config.default.waterBubbles.particleScale.scaleEasingFormula, config.default.waterBubbles.particleScale.scaleYoyo];
	emitter.setScale(...scaleData);

	let alphaData = [config.default.waterBubbles.particleAlpha.minAlpha, config.default.waterBubbles.particleAlpha.maxAlpha, alphaEasingRate, config.default.waterBubbles.particleAlpha.alphaEasingFormula, config.default.waterBubbles.particleAlpha.alphaYoyo];
	emitter.setAlpha(...alphaData);

	emitter.lifespan = lifespan;

	waterBubbles.emitter.emitX = emitX;
    waterBubbles.emitter.emitY = emitY;
}