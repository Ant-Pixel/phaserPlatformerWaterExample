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
