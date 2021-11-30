class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

preload() {

    this.load.atlas("ahbeng", "assets/ahbeng.png", "assets/ahbeng.json");
    this.load.atlas("ahlong", "assets/ahlong.png", "assets/ahlong.json");
    // this.load.image("sotonggamepagePNG", "assets/sotonggamepage.png");
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
            key: 'ahlong-backAnim', 
           frames: [ 
            { key: 'ahlongback', frame: 'ahlong back 1' },
            { key: 'ahlongback', frame: 'ahlong back 2' }, 
            { key: 'ahlongback', frame: 'ahlong back 3' },         
                 
               
           ],
   
   
                   frameRate: 5,
                   repeat: -1
               });

           this.anims.create({ 
            key: 'ahlong-side-leftAnim', 
           frames: [ 
               { key: 'ahlongleft', frame: 'ahlong side left 2' },
               { key: 'ahlongleft', frame: 'ahlong side left 3' }, 
               { key: 'ahlongleft', frame: 'ahlong side left 4' },         
               { key: 'ahlongleft', frame: 'ahlong side left 5' },   
           ],
   
   
                   frameRate: 5,
                   repeat: -1
               });

           this.anims.create({ 
            key: 'ahlong-side-rightAnim', 
           frames: [ 
               { key: 'ahlongright', frame: 'ahlong side right 2' },
               { key: 'ahlongright', frame: 'ahlong side right 3' }, 
               { key: 'ahlongright', frame: 'ahlong side right 4' },         
               { key: 'ahlongright', frame: 'ahlong side right 5' },   
           ],
   
           
   
                   frameRate: 5,
                   repeat: -1
               });

           this.anims.create({ 
            key: 'ahlong-frontAnim', 
           frames: [ 
               { key: 'ahlongfront', frame: 'ahlong front 1' },
               { key: 'ahlongfront', frame: 'ahlong front 2' }, 
               { key: 'ahlongfront', frame: 'ahlong front 3' },         
              
           ],
   
           
   
                   frameRate: 5,
                   repeat: -1
               });


        console.log("preloadScene")
        // this.add.image(0,0,'sotonggamepagePNG')
        this.add.text(10,500, 'Animation labs, press spacebar to continue', 
            { font: '12px Courier', fill: '#ffffff' });

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
