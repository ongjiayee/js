class room3 extends Phaser.Scene {
  constructor() {
    super("room3");

    // Put global variable here
  }

  init(data) {
    this.playerPos = data.playerPos;

}

  preload() {
    var map = this.load.tilemapTiledJSON("room3", "assets/room3.json");
    this.load.image("colorfulPNG", "assets/colorful.png");
    this.load.image("pathPNG", "assets/tile.png");
  }

  create() {
    console.log("*** room3 scene");

    var map = this.make.tilemap({ key: "room3" });

    var tileset1 = map.addTilesetImage("tile", "pathPNG");
    var tileset2 = map.addTilesetImage("colorful", "colorfulPNG");

    let tilesArray = [tileset1,tileset2];

    this.pathLayer = map.createLayer("path", tilesArray, 0, 0);
    this.colorfulLayer = map.createLayer("colorful" , tilesArray, 0,0);
    this.backgroundLayer = map.createLayer("background", tilesArray, 0, 0);
   
    
    this.physics.world.bounds.width = this.backgroundLayer.width;
    this.physics.world.bounds.height = this.backgroundLayer.height;

    this.player = this.physics.add.sprite(480, 170, "ahbeng").setScale(0.4);

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

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong8,
      callbackScope: this,
      loop:false,

    });

    this.time.addEvent({
      delay:1000,
      callback: this.moveahlong9,
      callbackScope: this,
      loop:false,

    });




    this.ahlong = this.physics.add.sprite(530,260,"ahlong-left").play('ahlong-left').setScale(0.5);
    this.ahlong2 = this.physics.add.sprite(270,290,"ahlong-right").play('ahlong-right').setScale(0.5);
    this.ahlong3 = this.physics.add.sprite(110,500,"ahlong-left").play('ahlong-left').setScale(0.5);
    this.ahlong4 = this.physics.add.sprite(400,675,"ahlong-front").play('ahlong-front').setScale(0.5);
    this.ahlong5 = this.physics.add.sprite(615,800,"ahlong-left").play('ahlong-left').setScale(0.5);
    this.ahlong6 = this.physics.add.sprite(300,900,"ahlong-right").play('ahlong-right').setScale(0.5);
    this.ahlong7 = this.physics.add.sprite(110,1050,"ahlong-left").play('ahlong-left').setScale(0.5);
    this.ahlong8 = this.physics.add.sprite(300,1250,"ahlong-front").play('ahlong-front').setScale(0.5);
    this.ahlong9 = this.physics.add.sprite(615,1150,"ahlong-right").play('ahlong-right').setScale(0.5);


    this.backgroundLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.backgroundLayer);

    this.colorfulLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.colorfulLayer);


    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
  }

  update() {
    if (this.player.x > 465 &&
      this.player.x < 495 &&
     this.player.y > 50 &&
     this.player.y < 70) {
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

  moveahlong() {
    console.log("ahlong-left");
    this.tweens.timeline({
      targets: this.ahlong,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          x: 430,
        },
        {
          x: 530,
        },
      ],
    });
  }

  moveahlong2() {
    console.log("ahlong-right");
    this.tweens.timeline({
      targets: this.ahlong2,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          x: 165,
        },
        {
          x: 270,
        },
      ],
    });
  }

  moveahlong3() {
    console.log("ahlong-left");
    this.tweens.timeline({
      targets: this.ahlong3,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          x: 15,
        },
        {
          x: 110,
        },
      ],
    });
  }

  moveahlong4() {
    console.log("ahlong-front");
    this.tweens.timeline({
      targets: this.ahlong4,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          y: 600,
        },
        {
          y: 675,
        },
      ],
    });
  }

  moveahlong5() {
    console.log("ahlong-left");
    this.tweens.timeline({
      targets: this.ahlong5,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          x: 530,
        },
        {
          x: 615,
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
      duration: 800,
      tweens: [
        {
          x: 210,
        },
        {
          x: 300,
        },
      ],
    });
  }

  moveahlong7() {
    console.log("ahlong-left");
    this.tweens.timeline({
      targets: this.ahlong7,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          x: 15,
        },
        {
          x: 110,
        },
      ],
    });
  }
  moveahlong8() {
    console.log("ahlong-front");
    this.tweens.timeline({
      targets: this.ahlong8,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          y: 1180,
        },
        {
          y: 1250,
        },
      ],
    });
  }

  moveahlong9() {
    console.log("ahlong-right");
    this.tweens.timeline({
      targets: this.ahlong9,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 800,
      tweens: [
        {
          x: 530,
        },
        {
          x: 615,
        },
      ],
    });
  }


  // Function to jump to room1
  gameScene(player, title){
    console.log("gameScene function");
    let playerPos = {};
    playerPos.x = 510
    playerPos.y = 237
    playerPos.dir = "down"
    this.scene.start("gameScene", {playerPos: playerPos})
}
}
