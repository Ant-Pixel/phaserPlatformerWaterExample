const level1State = {};

level1State.create = () => {
    console.log("We are in the create state!!!");
    let playerData = [
        config.level1State.player.x,
        config.level1State.player.y,
        config.level1State.player.spriteKey
     ];
    let player = game.add.sprite(...playerData);
    game.physics.arcade.enable(player);

    level1State.player = player;


    //	Emitters have a center point and a width/height, which extends from their center point to the left/right and up/down
    emitter = game.add.emitter(game.world.centerX, 200, 200);

    //	This emitter will have a width of 800px, so a particle can emit from anywhere in the range emitter.x += emitter.width / 2
    emitter.width = 800;

    emitter.makeParticles('bubble');

    emitter.minParticleSpeed.set(0, 300);
    emitter.maxParticleSpeed.set(0, 400);

    emitter.setRotation(0, 0);
    emitter.setAlpha(0.3, 0.8);
    emitter.setScale(0.5, 0.5, 1, 1);
    emitter.gravity = -200;

    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    emitter.start(false, 1000, 500);

};

level1State.update = () => {
    level1State.player.body.velocity.x = 200;
};
