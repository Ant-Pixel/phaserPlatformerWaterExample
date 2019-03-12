const waterBubbles = {};

waterBubbles.init = (game) => {
	waterBubbles.game = game;
}

waterBubbles.create = (emitX, emitY) => {
	waterBubbles.emitter = game.add.emitter(emitX, emitY, 200);
	let emitter = waterBubbles.emitter;
    emitter.makeParticles(config.default.waterBubbles.spriteKey);
    emitter.start(false, 5000, 5);
    return emitter;
}

waterBubbles.update = (emitX, emitY) => {
	waterBubbles.emitter.emitX = emitX;
    waterBubbles.emitter.emitY = emitY;
}