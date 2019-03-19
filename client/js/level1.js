const level1State = {};

level1State.init = () => {
    waterBubbles.init(game);
}

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
    waterBubbles.create(level1State.player.x + (level1State.player.width*0.5),
                        level1State.player.y + (level1State.player.height*0.5),
                        300);
};

level1State.update = () => {
    level1State.player.body.velocity.x = 10;
    level1State.player.body.velocity.y = 10;
    let newEmitX = level1State.player.x + (level1State.player.width*0.5);
    let newEmitY = level1State.player.y + (level1State.player.height*0.5);
    waterBubbles.update(newEmitX, newEmitY, 300);
};