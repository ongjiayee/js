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
    // window.player = this.player;

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
    if (this.player.x > 470 &&
      this.player.x < 490 &&
     this.player.y > 120 &&
     this.player.y < 130) {
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
    playerPos.x = 510
    playerPos.y = 237
    playerPos.dir = "down"
    this.scene.start("gameScene", {playerPos: playerPos})
}
}
