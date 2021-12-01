class gameOver extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver' });
    }

preload() {

    this.load.image("img1PNG", "assets/img1.png");
}

    create () {

    

        console.log("gameOver")
        
        // this.add.text(10,500, 'Animation labs, press spacebar to continue', 
        //     { font: '12px Courier', fill: '#ffffff' });

            this.add.image(320,320,'img1PNG')


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos = {};
        playerPos.x = 320
        playerPos.y = 1050
        playerPos.dir = "up"
            this.scene.start("gameScene",{playerPos: playerPos});
            }, this );

    }

}
