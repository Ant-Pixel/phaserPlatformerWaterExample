let waterBubbles = {};

waterBubbles.init = (game) => {
	waterBubbles.game = game;
}

waterBubbles.create = (emitX, emitY, bubblesDisappearY) => {
	let game = waterBubbles.game;
	let bubbleTravelDistance = bubblesDisappearY - emitY;
	let bubbleTravelTime = bubbleTravelDistance/config.default.waterBubbles.particleSpeed.minParticleYSpeed;
	let lifespan = bubbleTravelTime*1000;
	let alphaEasingRate = bubbleTravelTime*1000;

	waterBubbles.emitter = game.add.emitter(emitX, emitY, config.default.waterBubbles.maxParticles);
	waterBubbles.emitter.makeParticles(config.default.waterBubbles.spriteKey);
	
	waterBubbles.emitter.gravity = config.default.waterBubbles.yGravity;

	waterBubbles.emitter.setXSpeed(config.default.waterBubbles.particleSpeed.minParticleXSpeed, config.default.waterBubbles.particleSpeed.maxParticleXSpeed);
	waterBubbles.emitter.setYSpeed(config.default.waterBubbles.particleSpeed.minParticleYSpeed, config.default.waterBubbles.particleSpeed.maxParticleYSpeed);

	let scaleData = [config.default.waterBubbles.particleScale.minParticleXScale, config.default.waterBubbles.particleScale.maxParticleXScale, config.default.waterBubbles.particleScale.minParticleYScale, config.default.waterBubbles.particleScale.maxParticleYScale, config.default.waterBubbles.particleScale.scaleEasingRate, config.default.waterBubbles.particleScale.scaleEasingFormula, config.default.waterBubbles.particleScale.scaleYoyo];
	waterBubbles.emitter.setScale(...scaleData);

	let alphaData = [config.default.waterBubbles.particleAlpha.minAlpha, config.default.waterBubbles.particleAlpha.maxAlpha, alphaEasingRate, config.default.waterBubbles.particleAlpha.alphaEasingFormula, config.default.waterBubbles.particleAlpha.alphaYoyo];
	waterBubbles.emitter.setAlpha(...alphaData);

	let generalEmitterData = [config.default.waterBubbles.explode, lifespan, config.default.waterBubbles.frequency, config.default.waterBubbles.quantity, config.default.waterBubbles.forceQuantity];
	waterBubbles.emitter.start(...generalEmitterData);
	console.log(waterBubbles.emitter);
}

waterBubbles.update = (emitX, emitY) => {
	waterBubbles.emitter.emitX = emitX;
	waterBubbles.emitter.emitY = emitY;
	console.log(waterBubbles.emitter);
}