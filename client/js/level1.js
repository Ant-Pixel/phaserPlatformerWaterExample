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
};

level1State.update = () => {
    level1State.player.body.velocity.x = 200;
};
