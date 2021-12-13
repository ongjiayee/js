class instructions extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'instructions' });
    }

preload() {

    
    this.load.image("img6", "assets/img6.png");
}

    create () {


        console.log("instructions")
        
        // this.add.text(10,500, 'Animation labs, press spacebar to continue', 
        //     { font: '12px Courier', fill: '#ffffff' });

            this.add.image(320,320,'img6')


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
window.heart = 3;