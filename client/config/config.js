const config = {};
config.default = {};
config.default.gameSpecs = {
    width: 375,
    height: 812,
    renderType: Phaser.AUTO,
    parentID : "gameContainer"
};
config.loadState = {
    style: {
        font: "30px Courier",
        fill: "#fff"
    },
    label: {
        text : {
            x: 80,
            y: 150,
            print: "loading..."
        }
    }
};
config.bootState = {};
config.menuState = {
    logo : {
        x: config.default.gameSpecs.width * 0.5,
        y: config.default.gameSpecs.height * 0.5,
        spriteKey: "menuLogo",
        spriteSrc: "assets/img/phaserLogo.png"
    }
};

config.default.waterBubbles = {
    spriteSrc: "assets/img/phaserBubble.png",
    spriteKey: "waterBubble",
    emitX: config.default.gameSpecs.width*0.5,
    emitY: config.default.gameSpecs.width*0.5,
    explode: false,
    flow: false,
    lifespan: 2000,
    frequency: 25,
    quantity: 0,
    forceQuantity: false,
    maxParticles: 1,
    minLifespan: 2000,
    maxLifespan: 2000,
    xOffset: 0,
    yOffset: 0,
    xGravity: 0,
    yGravity: 0,
    particleSpeed: {
        minParticleXSpeed: 0,
        maxParticleXSpeed: 0,
        minParticleYSpeed: -200,
        maxParticleYSpeed: -200
    },
    particleScale: {
        minParticleXScale: 0,
        maxParticleXScale: 0,
        minParticleYScale: 1.5,
        maxParticleYScale: 1.5,
        scaleEasingRate: 1000,
        scaleEasingFormula: Phaser.Easing.Linear.None,
        scaleYoyo: false
    },
    particleAlpha: {
        minAlpha: 1,
        maxAlpha: 0,
        alphaEasingRate: 2000,
        alphaEasingFormula: Phaser.Easing.Linear.None,
        alphaYoyo: false
    }
}


config.default.stateManager = {
    bootState: "boot",
    loadState: "load",
    menuState: "menu",
    level1State: "level1"
}

config.level1State = {
    player: {
        x: config.default.gameSpecs.width * 0.5,
        y: config.default.gameSpecs.height * 0.5,
        spriteKey: "player1sprite",
        spriteSrc: "assets/img/phaser-dude.png"
    }
}

let isNodeJsCompatible = typeof module !== "undefined"
if (isNodeJsCompatible)  {
    module.exports = config;
}
