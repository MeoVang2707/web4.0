var Nakama = {};
Nakama.Configs = {
  SHIP_SPEED: 500,
  BULLET_SPEED: 1000,
  DAMAGE: 1
}

window.onload = function(){
  Nakama.game = new Phaser.Game(
    640,
    960,
    Phaser.AUTO,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    },
    false,
    false
  );
}

var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
  Nakama.game.load.image('kaboom', 'Assets/boom.png');
  Nakama.game.time.advancedTiming = true;
}
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE); //Trọng lực
  Nakama.keyboard = Nakama.game.input.keyboard;
  Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.playertGroup = Nakama.game.add.physicsGroup();
  Nakama.shipControlers = [];
  Nakama.enemys = [];

  var player1 = new ShipControler(200, 800, "Spaceship1-Player.png", {
    up : Phaser.Keyboard.UP,
    down : Phaser.Keyboard.DOWN,
    left : Phaser.Keyboard.LEFT,
    right : Phaser.Keyboard.RIGHT,
    fire  : Phaser.Keyboard.SPACEBAR,
    cooldown: 0.1
  });
  Nakama.shipControlers.push(player1);

  var player2 = new ShipControler(400, 800, "Spaceship2-Player.png", {
    up : Phaser.Keyboard.W,
    down : Phaser.Keyboard.S,
    left : Phaser.Keyboard.A,
    right : Phaser.Keyboard.D,
    fire  : Phaser.Keyboard.SHIFT,
    cooldown: 0.1
  });
  Nakama.shipControlers.push(player2);

  for (var i = 1; i < 6; i++) {
    var enemy1 = new Enemy(100*i, 100, "EnemyType1.png", 20);
    Nakama.enemys.push(enemy1);
  // var enemy2 = new Enemy(500, 100, "EnemyType1.png", 20);
  // Nakama.enemys.push(enemy2);
  }

}

var update = function(){
  Nakama.background.tilePosition.y += 2;

  for(var i=0; i<Nakama.shipControlers.length; i++){
    Nakama.shipControlers[i].update();
  }

  // for(var i=0; i<Nakama.enemys.length; i++){
  //   Nakama.enemys[i].update();
  // }

  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup, Nakama.enemyGroup, onBulletHitActor);
}

function onBulletHitActor(bulletSprite, actorSprite){
  actorSprite.damage(1);
  bulletSprite.kill();
}

var render = function(){}
