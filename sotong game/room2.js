class room2 extends Phaser.Scene {
  constructor() {
    super("room2");

    // Put global variable here
  }

  init(data) {
    this.playerPos = data.playerPos;

}

  preload() {
    var map = this.load.tilemapTiledJSON("room2", "assets/room2.json");
    this.load.image("tilePNG", "assets/tile.png");
    this.load.image('kuih', 'assets/kuih.png')
    this.load.image('heart', 'assets/heart.png')

    this.load.audio("collectkuih","assets/collectkuih.mp3" )
    this.load.audio("hit","assets/hit.wav" )
    
    
  }

  create() {
    console.log("*** room2 scene");

    this.collectkuihSnd = this.sound.add('collectkuih').setVolume(0.7);
    this.hitSnd = this.sound.add('hit').setVolume(0.3);

    var map = this.make.tilemap({ key: "room2" });

    let tileTiles = map.addTilesetImage("tile", "tilePNG");

    let tilesArray = [tileTiles];

    this.backgroundLayer = map.createLayer("background", tilesArray, 0, 0);
    this.tileLayer = map.createLayer("tile", tilesArray, 0, 0);
    
    this.physics.world.bounds.width = this.backgroundLayer.width;
    this.physics.world.bounds.height = this.backgroundLayer.height;

//collectables
    this.kuih = this.physics.add.sprite(100,300,'kuih').setScale(0.04);
    this.kuih2 = this.physics.add.sprite(500,500,"kuih").setScale(0.04);
    this.kuih3 = this.physics.add.sprite(450,700,'kuih').setScale(0.04);
    this.kuih4 = this.physics.add.sprite(500,1050,"kuih").setScale(0.04);
    this.kuih5= this.physics.add.sprite(150,1200,'kuih').setScale(0.04);
    this.kuih6 = this.physics.add.sprite(200,900,"kuih").setScale(0.04);
    this.kuih7= this.physics.add.sprite(100,550,'kuih').setScale(0.04);
    this.kuih8 = this.physics.add.sprite(250,1200,"kuih").setScale(0.04);
    this.kuih9 = this.physics.add.sprite(300,100,"kuih").setScale(0.04);
    this.kuih10= this.physics.add.sprite(380,480,"kuih").setScale(0.04);
    this.kuih11 = this.physics.add.sprite(380,880,"kuih").setScale(0.04);
    this.kuih12 = this.physics.add.sprite(250,1070,"kuih").setScale(0.04);

    this.heartpng1 = this.add.image (480,35,'heart').setScrollFactor(0).setVisible(true).setScale(0.1);
  this.heartpng2 = this.add.image (530,35,'heart').setScrollFactor(0).setVisible(true).setScale(0.1);
  this.heartpng3 = this.add.image (580,35,'heart').setScrollFactor(0).setVisible(true).setScale(0.1);

  if ( window.heart === 3) {
    this.heartpng1.setVisible(true);
    this.heartpng2.setVisible(true);
    this.heartpng3.setVisible(true);

} else if ( window.heart === 2) {
  this.heartpng1.setVisible(true);
  this.heartpng2.setVisible(true);
  this.heartpng3.setVisible(false);

} else if ( window.heart === 1) {
  this.heartpng1.setVisible(true);
  this.heartpng2.setVisible(false);
  this.heartpng3.setVisible(false);
  
  } else if (window.key === 0) {
    this.heartpng1.setVisible(false);
    this.heartpng2.setVisible(false);
    this.heartpng3.setVisible(false);

}


    this.player = this.physics.add.sprite(126, 90, "ahbeng").setScale(0.4);

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    // Enable debugging
    window.player = this.player;

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong,
      callbackScope: this,
      loop:false,

    });

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong2,
      callbackScope: this,
      loop:false,

    });

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong3,
      callbackScope: this,
      loop:false,

    });

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong4,
      callbackScope: this,
      loop:false,

    });

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong5,
      callbackScope: this,
      loop:false,

    });

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong6,
      callbackScope: this,
      loop:false,

    });

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong7,
      callbackScope: this,
      loop:false,

    });

    this.ahlong = this.physics.add.sprite(230,500,"ahlong-right").play('ahlong-right').setScale(0.5);
    this.ahlong2 = this.physics.add.sprite(350,450,"ahlong-front").play('ahlong-front').setScale(0.5);
    this.ahlong3 = this.physics.add.sprite(550,250,"ahlong-right").play('ahlong-right').setScale(0.5);
    this.ahlong4 = this.physics.add.sprite(550,760,"ahlong-left").play('ahlong-left').setScale(0.5);
    this.ahlong5 = this.physics.add.sprite(350,1030,"ahlong-front").play('ahlong-right').setScale(0.5);
    this.ahlong6 = this.physics.add.sprite(230,800,"ahlong-right").play('ahlong-left').setScale(0.5);
    this.ahlong7 = this.physics.add.sprite(550,1150,"ahlong-right").play('ahlong-right').setScale(0.5);
   


    this.backgroundLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.backgroundLayer);


    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    this.physics.add.overlap(
      this.player,
      [this.ahlong,this.ahlong2,this.ahlong3,this.ahlong4,this.ahlong5,this.ahlong6,this.ahlong7],
      this.ahlongCaught,
      null,
      this
    );
    this.physics.add.overlap(this.player,this.kuih,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih2,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih3,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih4,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih5,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih6,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih7,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih8,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih9,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih10,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih11,this.collectKuih,null,this)
    this.physics.add.overlap(this.player,this.kuih12,this.collectKuih,null,this)


    this.kuihScore = this.add.text(16,16, 'kuih: '+window.kuih, {fontSize: '25px', fill: '#000'}).setScrollFactor(0);
  }

  update() {

    if(window.kuih >= 300 )
     {
       this.scene.start("winningScene");
     }


    
    if (this.player.x > 90 &&
      this.player.x < 130 &&
     this.player.y > 10 &&
     this.player.y < 30) {
       this.gameScene();
     }

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("left", true); // walk left
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play("up", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play("down", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }
    
  }

  ahlongCaught(player,ahlong){
    console.log("ahlongCaught");

    this.hitSnd.play();
    this.cameras.main.shake(50);

    window.heart=window.heart-1

    ahlong.disableBody(true, true);

    console.log("heart: ", window.heart)

    if ( window.heart === 3) {
      this.heartpng1.setVisible(true);
      this.heartpng2.setVisible(true);
      this.heartpng3.setVisible(true);
  
  } else if ( window.heart === 2) {
    this.heartpng1.setVisible(true);
    this.heartpng2.setVisible(true);
    this.heartpng3.setVisible(false);
  
  } else if ( window.heart === 1) {
    this.heartpng1.setVisible(true);
    this.heartpng2.setVisible(false);
    this.heartpng3.setVisible(false);
    
    } else if (window.key === 0) {
      this.heartpng1.setVisible(false);
      this.heartpng2.setVisible(false);
      this.heartpng3.setVisible(false);
  
  }
  if (window.heart == 0){
    this.scene.start("gameOver");
  
  }
    }
  moveahlong() {
    console.log("ahlong-right");
    this.tweens.timeline({
      targets: this.ahlong,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1000,
      tweens: [
        {
          x: 100,
        },
        {
          x: 230,
        },
      ],
    });
  }

  moveahlong2() {
    console.log("ahlong-front");
    this.tweens.timeline({
      targets: this.ahlong2,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1500,
      tweens: [
        {
          y: 350,
        },
        {
          y: 450,
        },
      ],
    });
  }

  moveahlong3() {
    console.log("ahlong-right");
    this.tweens.timeline({
      targets: this.ahlong3,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1000,
      tweens: [
        {
          x: 420,
        },
        {
          x: 550,
        },
      ],
    });
  }

  moveahlong4() {
    console.log("ahlong-left");
    this.tweens.timeline({
      targets: this.ahlong4,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1000,
      tweens: [
        {
          x: 420,
        },
        {
          x: 550,
        },
      ],
    });
  }

  moveahlong5() {
    console.log("ahlong-front");
    this.tweens.timeline({
      targets: this.ahlong5,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1500,
      tweens: [
        {
          y: 930,
        },
        {
          y: 1030,
        },
      ],
    });
  }

  moveahlong6() {
    console.log("ahlong-right");
    this.tweens.timeline({
      targets: this.ahlong6,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1000,
      tweens: [
        {
          x: 80,
        },
        {
          x: 230,
        },
      ],
    });
  }

  moveahlong7() {
    console.log("ahlong-right");
    this.tweens.timeline({
      targets: this.ahlong7,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1500,
      tweens: [
        {
          x: 420,
        },
        {
          x: 550,
        },
      ],
    });
  }

  // Function to jump to room1
  gameScene(player, title){
    console.log("gameScene function");
    let playerPos = {};
    playerPos.x = 123
    playerPos.y = 237
    playerPos.dir = "down"
    this.scene.start("gameScene", {playerPos: playerPos})
}
collectKuih(player,kuih)
{
  this.collectkuihSnd.play();

  console.log('collect Kuih');
  kuih.disableBody(true,true);

  window.kuih= window.kuih + 10;
  console.log("kuih:", window.kuih);

  
  this.kuihScore.setText('kuih:'+window.kuih);
}

}
