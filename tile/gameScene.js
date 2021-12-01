
class gameScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'gameScene' });
    }

    init(data) {
      this.playerPos = data.playerPos;
      console.log(this.playerPos.x, this.playerPos.y, this.playerPos.dir)
  
  }

    preload() {

        var map = this.load.tilemapTiledJSON('world','assets/world.json')

        


         this.load.image('door', 'assets/door.png')
         this.load.image('house', 'assets/house.png')
         this.load.image('playground 2', 'assets/playground 2.png')
         this.load.image('playground', 'assets/playground.png')
         this.load.image('sky', 'assets/sky.png')
         this.load.image('wall', 'assets/wall.png')


        // chars
        // this.load.atlas("ahbeng", "assets/ahbeng.png", "assets/ahbeng.json");


    } // end of preload //

    create (){

    console.log("gameScene")

   var map = this.make.tilemap({key:'world'});

  //  let dollTiles = map.addTilesetImage("doll", "dollPNG");
  //  let doorTiles = map.addTilesetImage("door", "doorPNG");
  //  let houseTiles = map.addTilesetImage("house", "housePNG");
  //  let skyTiles = map.addTilesetImage("sky", "skyPNG");
  //  let treeTiles = map.addTilesetImage("tree", "treePNG");
  //  let wallTiles = map.addTilesetImage("wall", "wallPNG");

  //  let tilesArray = [dollTiles];
  //   let tilesArray = [doorTiles];
  //   let tilesArray = [houseTiles];
  //   let tilesArray = [skyTiles];
  //   let tilesArray = [treeTiles];
  //   let tilesArray = [wallTiles];

    var tileset1= map.addTilesetImage('door','door');
    var tileset2= map.addTilesetImage('house','house');
    var tileset3= map.addTilesetImage('playground 2','playground 2');
    var tileset4= map.addTilesetImage('playground','playground');
    var tileset5= map.addTilesetImage('sky','sky');
    var tileset6= map.addTilesetImage('wall','wall');

    let tilesArray = [tileset1,tileset2,tileset3,tileset4,tileset5,tileset6]

    this.sandLayer = map.createLayer('sand',tilesArray,0,0)
    this.pathLayer = map.createLayer('path',tilesArray,0,0)
    this.skyLayer = map.createLayer('sky',tilesArray,0,0)
    this.playgroundLayer = map.createLayer('playground',tilesArray,0,0)
    this.houseLayer = map.createLayer('house',tilesArray,0,0)
    


  this.physics.world.bounds.width = this.sandLayer.width;
  this.physics.world.bounds.height = this.sandLayer.height;

  

    // load player into phytsics
    this.player = this.physics.add.sprite(
        this.playerPos.x,
        this.playerPos.y,
        this.playerPos.dir
        ).setScale(0.4).setSize(60,125).setOffset(0,0).play(this.playerPos.dir)

        this.player.setCollideWorldBounds(true); // don't go out of the this.map

    window.player = this.player;

    this.houseLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.houseLayer);

    this.playgroundLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.playgroundLayer);

    this.skyLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.skyLayer);

    

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);


    } // end of create //

    update () {

      if (this.player.x > 310 &&
         this.player.x < 330 &&
        this.player.y > 183 &&
        this.player.y < 200) {
          this.room1();
        }

        if (this.player.x > 120 &&
          this.player.x < 130 &&
         this.player.y > 183 &&
         this.player.y < 200) {
           this.room2();
         }

         if (this.player.x > 505 &&
          this.player.x < 525 &&
         this.player.y > 170 &&
         this.player.y < 200) {
           this.room3();
         }


    if (this.cursors.left.isDown) 
    {
        this.player.setVelocityX(-500);
        this.player.anims.play('left', true);
    } 
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(500);
        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-500);
        this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(500);
        this.player.anims.play('down', true);
    } else {
        this.player.setVelocity(0);
    }

    

    } // end of update // 

    room1(player, tile) 
    {
      console.log("room1 function");
      this.scene.start("room1");
    }

    room2(player, tile) 
    {
      console.log("room2 function");
      this.scene.start("room2");
    }

    room3(player, tile) 
    {
      console.log("room3 function");
      this.scene.start("room3");
    }
}