var config = {
    type: Phaser.AUTO,
    ////// pixel size * tile map size * zoom 
    width: 20 * 32,
    height: 20 * 32,
    /////////////////////////////////////////
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#fff7e6',
    pixelArt: true,
    //// Add all scenes below in the array
    scene: [preloadScene, gameScene,room1,room2,room3]
};

var game = new Phaser.Game(config);