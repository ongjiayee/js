class story extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'story' });
    }

preload() {

    
    this.load.image("img3", "assets/img3.png");
}

    create () {


        console.log("story")
        
        // this.add.text(10,500, 'Animation labs, press spacebar to continue', 
        //     { font: '12px Courier', fill: '#ffffff' });

            this.add.image(320,320,'img3')


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos = {};
        playerPos.x = 320
        playerPos.y = 1050
        playerPos.dir = "up"
            this.scene.start("rules",{playerPos: playerPos});
            }, this );

    }

}
