class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

preload() {

    this.load.atlas("ahbeng", "assets/ahbeng.png", "assets/ahbeng.json");
    this.load.atlas("ahlong", "assets/ahlong.png", "assets/ahlong.json");
    this.load.spritesheet('ahlong-front', 'assets/ahlong-front.png',{ frameWidth:66, frameHeight:104 });
    this.load.spritesheet('ahlong-back', 'assets/ahlong-back.png',{ frameWidth:66, frameHeight:104 });
    this.load.spritesheet('ahlong-left', 'assets/ahlong-side-left.png',{ frameWidth:66, frameHeight:104 });
    this.load.spritesheet('ahlong-right', 'assets/ahlong-side-right.png',{ frameWidth:66, frameHeight:104 });
    this.load.image("img1", "assets/img1.png");
}

    create () {

    

        this.anims.create({
            key: "left",
            frames: [
              { key: "ahbeng", frame: "ahbeng side left 2" },
              { key: "ahbeng", frame: "ahbeng side left 3" },
              { key: "ahbeng", frame: "ahbeng side left 4" },
              { key: "ahbeng", frame: "ahbeng side left 5" },
            ],
            frameRate: 5,
           
          });
        
          this.anims.create({
            key: "right",
            frames: [
              { key: "ahbeng", frame: "ahbeng side right 2" },
              { key: "ahbeng", frame: "ahbeng side right 3" },
              { key: "ahbeng", frame: "ahbeng side right 4" },
              { key: "ahbeng", frame: "ahbeng side right 5" },
            ],
            frameRate: 5,
            
          });
        
          this.anims.create({
            key: "up",
            frames: [
              { key: "ahbeng", frame: "ahbeng back 2" },
              { key: "ahbeng", frame: "ahbeng back 3" },
            ],
            frameRate: 5,
            
          });
        
          this.anims.create({
            key: "down",
            frames: [
              { key: "ahbeng", frame: "ahbeng front 2" },
              { key: "ahbeng", frame: "ahbeng front 3" },
            ],
            frameRate: 5,
            
          });



          this.anims.create({
            key:'ahlong-front',
            frames:this.anims.generateFrameNumbers('ahlong-front',
            { start:1, end:3 }),
            frameRate:10,
            repeat:-1
        });

        this.anims.create({
          key:'ahlong-back',
          frames:this.anims.generateFrameNumbers('ahlong-back',
          { start:1, end:3 }),
          frameRate:10,
          repeat:-1
      });


      this.anims.create({
        key:'ahlong-left',
        frames:this.anims.generateFrameNumbers('ahlong-left',
        { start:1, end:3 }),
        frameRate:10,
        repeat:-1
    });

    this.anims.create({
      key:'ahlong-right',
      frames:this.anims.generateFrameNumbers('ahlong-right',
      { start:1, end:3 }),
      frameRate:10,
      repeat:-1
  });


        console.log("preloadScene")
        
        // this.add.text(10,500, 'Animation labs, press spacebar to continue', 
        //     { font: '12px Courier', fill: '#ffffff' });

            this.add.image(320,320,'img1')


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
