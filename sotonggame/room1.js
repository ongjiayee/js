class room1 extends Phaser.Scene {
  constructor() {
    super("room1");

    // Put global variable here
  }

  init(data) {
    this.playerPos = data.playerPos;

}

  preload() {
    var map = this.load.tilemapTiledJSON("room1", "assets/room1.json");
    this.load.image("dollPNG", "assets/doll.png");
    this.load.image('doorPNG', 'assets/door.png')
    this.load.image('housePNG', 'assets/house.png')
    this.load.image('skyPNG', 'assets/sky.png')
    this.load.image('wallPNG', 'assets/wall.png')

  }

  create() {
    console.log("*** room1 scene");

    var map = this.make.tilemap({ key: "room1" });

    let dollTiles = map.addTilesetImage("doll", "dollPNG");
    let doorTiles = map.addTilesetImage("door", "doorPNG");
    let houseTiles = map.addTilesetImage("house", "housePNG");
    let skyTiles = map.addTilesetImage("sky", "skyPNG");
    let wallTiles = map.addTilesetImage("wall", "wallPNG");

    let tilesArray = [dollTiles,doorTiles,houseTiles,skyTiles,wallTiles];

    this.sandLayer = map.createLayer("sand", tilesArray, 0, 0);
    this.skyLayer = map.createLayer("sky", tilesArray, 0, 0);
    this.houseLayer = map.createLayer("house", tilesArray, 0, 0);
    this.floorpatternLayer = map.createLayer("floorpattern", tilesArray, 0, 0);
    this.lineLayer = map.createLayer("line", tilesArray, 0, 0);
    this.dollLayer = map.createLayer("doll", tilesArray, 0, 0);
   
    
    
    
    this.physics.world.bounds.width = this.sandLayer.width;
    this.physics.world.bounds.height = this.sandLayer.height;

    this.player = this.physics.add.sprite(320, 231, "ahbeng").setScale(0.4);

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    // Enable debugging
    window.player = this.player;
    
    // this.add.sprite(100,500,"ahlong-frontAnim")

    this.ahlong = this.physics.add.sprite(100,500,"ahlong-front").setScale(0.5);
    this.ahlong2 = this.physics.add.sprite(300,700,"ahlong-front").setScale(0.5);
    this.ahlong3 = this.physics.add.sprite(600,1000,"ahlong-front").setScale(0.5);
    this.ahlong4 = this.physics.add.sprite(200,1200,"ahlong-front").setScale(0.5);
    this.ahlong5 = this.physics.add.sprite(500,300,"ahlong-front").setScale(0.5);

    this.houseLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.houseLayer);

    this.skyLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.skyLayer);

    this.dollLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.dollLayer);

    

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
  

  this.physics.add.overlap(
    this.player,
    this.ahlong,
    this.ahlongCaught,
    null,
    this
  );
}

  update() {
    if (this.player.x > 290 &&
      this.player.x < 330 &&
     this.player.y > 170 &&
     this.player.y < 190) {
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

  ahlongCaught(){
    console.log("gameOver");
    this.scene.start("gameOver")
    }

  // Function to jump to world
  gameScene(player, title){
    console.log("gameScene function");
    let playerPos = {};
    playerPos.x = 321
    playerPos.y = 237
    playerPos.dir = "down"
    this.scene.start("gameScene", {playerPos: playerPos})
}
}
