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
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(player);

    level1State.player = player;
    waterBubbles.create(level1State.player.body.x, level1State.player.body.y, 0);
};

level1State.update = () => {
    level1State.player.body.velocity.x = 10;
    //console.log(level1State.player.body.x);
    //console.log(level1State.player.body.y);
    waterBubbles.update(level1State.player.body.x, level1State.player.body.y);
};
