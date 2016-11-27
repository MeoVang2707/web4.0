var Nakama = {};
Nakama.Configs = {
  SHIP_SPEED: 500
}
window.onload = function(){
  Nakama.game = new Phaser.Game(
    640,
    960,
    // 900,
    // 1200,
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
  Nakama.game.time.advancedTiming = true;
}
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE); //Trọng lực

  Nakama.keyboard = Nakama.game.input.keyboard;
  // Kích cỡ tàu:
  Nakama.ship = Nakama.game.add.sprite(
      200,
      800,
      'assets',
      "Spaceship4-Player.png");
      Nakama.game.physics.enable(Nakama.ship, Phaser.Physics.ARCADE)
  Nakama.ship2 = Nakama.game.add.sprite(
      400,
      800,
      'assets',
      "Spaceship1-Partner.png");
      Nakama.game.physics.enable(Nakama.ship2, Phaser.Physics.ARCADE)
}
var update = function(){
  if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    Nakama.ship.body.velocity.y = -Nakama.Configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    Nakama.ship.body.velocity.y = +Nakama.Configs.SHIP_SPEED;
  }
  else{
    Nakama.ship.body.velocity.y = 0;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    Nakama.ship.body.velocity.x = -Nakama.Configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    Nakama.ship.body.velocity.x = +Nakama.Configs.SHIP_SPEED;
  }
  else{
    Nakama.ship.body.velocity.x = 0;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.W)){
    Nakama.ship2.body.velocity.y = -Nakama.Configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.S)){
    Nakama.ship2.body.velocity.y = +Nakama.Configs.SHIP_SPEED;
  }
  else{
    Nakama.ship2.body.velocity.y = 0;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.S)){
    Nakama.ship2.body.velocity.x = -Nakama.Configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.D)){
    Nakama.ship2.body.velocity.x = +Nakama.Configs.SHIP_SPEED;
  }
  else{
    Nakama.ship2.body.velocity.x = 0;
  }
}
var render = function(){}
