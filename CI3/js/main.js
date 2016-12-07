var Nakama = {};
Nakama.Configs = {
  SHIP_SPEED: 500,
  BULLET_SPEED: 1000,
  PLAYER_TYPE : {
    PLAYER_1: true,
    PLAYER_2: false,
  }
}

window.onload = function(){
  Nakama.Configs.SHIP_TYPE = {
    SHIP_TYPE1: ShipType1Controller,
    SHIP_TYPE2: ShipType2Controller,
    SHIP_TYPE3: ShipType3Controller,
  }

  Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
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
  Nakama.game.load.image('laze', 'Assets/boom.png');
  Nakama.game.time.advancedTiming = true;
}

var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE); //Trọng lực
  Nakama.keyboard = Nakama.game.input.keyboard;
  Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.shipControlers = [];
  Nakama.enemys = [];

  // var enemy1 = new Enemy(100, 100, "EnemyType1.png", {health: 20});
  // document.write(enemy1.sprite.position.x);

  var player1Constructor = getPlayerShipChoice("Player1");
  var player2Constructor = getPlayerShipChoice("Player2");

  var player1 = new player1Constructor(200, 800, Nakama.Configs.PLAYER_TYPE.PLAYER_1, {
    up : Phaser.Keyboard.UP,
    down : Phaser.Keyboard.DOWN,
    left : Phaser.Keyboard.LEFT,
    right : Phaser.Keyboard.RIGHT,
    fire  : Phaser.Keyboard.SPACEBAR
  });
  Nakama.shipControlers.push(player1);

  var player2 = new player2Constructor(400, 800, Nakama.Configs.PLAYER_TYPE.PLAYER_2, {
    up : Phaser.Keyboard.W,
    down : Phaser.Keyboard.S,
    left : Phaser.Keyboard.A,
    right : Phaser.Keyboard.D,
    fire  : Phaser.Keyboard.SHIFT
  });
  Nakama.shipControlers.push(player2);

  for (var i = 1; i < 6; i++) {
    var enemy1 = new Enemy(100*i, 100, "EnemyType1.png", {health: 20});
    Nakama.enemys.push(enemy1);
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
  actorSprite.damage(bulletSprite.powrer);
  bulletSprite.kill();
}

function getPlayerShipChoice(playerName) {
  var playerChoice = prompt( playerName + " please chose ship type");
  playerChoice = parseInt(playerChoice);
  switch (playerChoice) {
    case 2:
      var playerConstructor = Nakama.Configs.SHIP_TYPE.SHIP_TYPE2;
      break;
    case 3:
      var playerConstructor = Nakama.Configs.SHIP_TYPE.SHIP_TYPE3;
      break;
    case 1:
    default:
      var playerConstructor = Nakama.Configs.SHIP_TYPE.SHIP_TYPE1;
      break;
    }
  return playerConstructor;
}

var render = function(){
  // Nakama.playerGroup.forEachAlive(function(sprite){
  //   Nakama.game.debug.body(sprite);
  // });
  // Nakama.bulletGroup.forEachAlive(function(sprite){
  //   Nakama.game.debug.body(sprite);
  // });
  // Nakama.enemyGroup.forEachAlive(function(sprite){
  //   Nakama.game.debug.body(sprite);
  // });

}
