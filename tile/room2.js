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
  }

  create() {
    console.log("*** room2 scene");

    var map = this.make.tilemap({ key: "room2" });

    let tileTiles = map.addTilesetImage("tile", "tilePNG");

    let tilesArray = [tileTiles];

    this.backgroundLayer = map.createLayer("background", tilesArray, 0, 0);
    this.tileLayer = map.createLayer("tile", tilesArray, 0, 0);
   
   
    
    
    
    this.physics.world.bounds.width = this.backgroundLayer.width;
    this.physics.world.bounds.height = this.backgroundLayer.height;

    this.player = this.physics.add.sprite(126, 90, "ahbeng").setScale(0.4);

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    // Enable debugging
    window.player = this.player;

    // this.time.addEvent({
    //   delay:1000,
    //   callback: this.moveahbeng1,
    //   callbackScope: this,
    //   loop:false,

    // });

    // this.ahbeng = this.physics.add.sprite(100,500,"down").play('ahbeng').setScale(0.4);

    this.backgroundLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.backgroundLayer);


    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
  }

  update() {
    if (this.player.x > 128 &&
      this.player.x < 130 &&
     this.player.y > 23 &&
     this.player.y < 25) {
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

  // Function to jump to room1
  gameScene(player, title){
    console.log("gameScene function");
    let playerPos = {};
    playerPos.x = 123
    playerPos.y = 237
    playerPos.dir = "down"
    this.scene.start("gameScene", {playerPos: playerPos})
}
}
