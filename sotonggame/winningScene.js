class winningScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'winningScene' });
    }

preload() {

    this.load.image("img5", "assets/img5.png");
}

    create () {

    

        console.log("winningScene")
        
        // this.add.text(10,500, 'Animation labs, press spacebar to continue', 
        //     { font: '12px Courier', fill: '#ffffff' });

            this.add.image(320,320,'img5')

            window.kuih=0
            window.heart=3
            

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
