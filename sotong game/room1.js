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
    this.load.image('kuih', 'assets/kuih.png')
    this.load.image('heart', 'assets/heart.png')

    this.load.audio("collectkuih","assets/collectkuih.mp3" )
    this.load.audio("hit","assets/hit.wav" )
    

  }

  create() {
    console.log("*** room1 scene");

    this.collectkuihSnd = this.sound.add('collectkuih').setVolume(0.7);
    this.hitSnd = this.sound.add('hit').setVolume(0.3);

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

    //collectables
    this.kuih = this.physics.add.sprite(100,300,'kuih').setScale(0.04);
    this.kuih2 = this.physics.add.sprite(500,500,"kuih").setScale(0.04);
    this.kuih3 = this.physics.add.sprite(400,700,'kuih').setScale(0.04);
    this.kuih4 = this.physics.add.sprite(600,1050,"kuih").setScale(0.04);
    this.kuih5= this.physics.add.sprite(150,1200,'kuih').setScale(0.04);
    this.kuih6 = this.physics.add.sprite(300,900,"kuih").setScale(0.04);
    this.kuih7= this.physics.add.sprite(100,550,'kuih').setScale(0.04);
    this.kuih8 = this.physics.add.sprite(250,1200,"kuih").setScale(0.04);


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
      [this.ahlong,this.ahlong2,this.ahlong3,this.ahlong4,this.ahlong5],
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

    this.kuihScore = this.add.text(16,16, 'kuih: '+window.kuih, {fontSize: '25px', fill: '#000'}).setScrollFactor(0);
  }

  update() {

if(window.kuih >= 300 )
 {
   this.scene.start("winningScene");
 }


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

  // Function to jump to world
  gameScene(player, title){
    console.log("gameScene function");
    let playerPos = {};
    playerPos.x = 321
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
