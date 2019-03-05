const loadState = {

    preload: () => {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        let loadingLabel = game.add.text(
            config.loadState.label.x,
            config.loadState.label.y,
            config.loadState.label.print,
            config.loadState.style
        );
        let menuLogoData = [
            config.menuState.logo.spriteKey,
            config.menuState.logo.spriteSrc
        ];
        let playerData = [
            config.level1State.player.spriteKey,
            config.level1State.player.spriteSrc
        ];
        let waterBubbleData = [
            config.default.waterBubbles.spriteKey,
            config.default.waterBubbles.spriteSrc
        ]

        //Load your images, spritesheets, bitmaps...
        game.load.image(...menuLogoData);
        game.load.image(...playerData);
        game.load.image(...waterBubbleData);


        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');

    },

    create: ()  => {

        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('menu');
    }
};
