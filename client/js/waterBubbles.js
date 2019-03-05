function waterBubbles() {
	var emitter = Phaser.add.emitter(game, config.default.waterBubbles.emitX, config.default.waterBubbles.emitY, config.default.waterBubbles.maxParticles);
	emitter.makeParticles(config.default.waterBubbles.spriteKey);
	
	emitter.gravity = config.default.waterBubbles.yGravity;

	emitter.setXSpeed(config.default.waterBubbles.particleSpeed.minParticleXSpeed, config.default.waterBubbles.particleSpeed.maxParticleXSpeed);
	emitter.setYSpeed(config.default.waterBubbles.particleSpeed.minParticleYSpeed, config.default.waterBubbles.particleSpeed.maxParticleYSpeed);

	let scaleData = [config.default.waterBubbles.particleScale.minParticleXScale, config.default.waterBubbles.particleScale.maxParticleXScale, config.default.waterBubbles.particleScale.minParticleYScale, config.default.waterBubbles.particleScale.maxParticleYScale, config.default.waterBubbles.particleScale.scaleEasingRate, config.default.waterBubbles.particleScale.scaleEasingFormula, config.default.waterBubbles.particleScale.scaleYoyo];
	emitter.setScale(...scaleData);

	let alphaData = [config.default.waterBubbles.particleAlpha.minAlpha, config.default.waterBubbles.particleAlpha.maxAlpha, config.default.waterBubbles.particleAlpha.alphaEasingRate, config.default.waterBubbles.particleAlpha.alphaEasingFormula, config.default.waterBubbles.particleAlpha.alphaYoyo];
	emitter.setAlpha(...alphaData);

	let generalEmitterData = [config.default.waterBubbles.explode, config.default.waterBubbles.lifespan, config.default.waterBubbles.frequency, config.default.waterBubbles.quantity, config.default.waterBubbles.forceQuantity];
	emitter.start(...generalEmitterData);
}