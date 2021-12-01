class rules extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'rules' });
    }

preload() {

    
    this.load.image("img4", "assets/img4.png");
}

    create () {


        console.log("rules")
        
        // this.add.text(10,500, 'Animation labs, press spacebar to continue', 
        //     { font: '12px Courier', fill: '#ffffff' });

            this.add.image(320,320,'img4')


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
