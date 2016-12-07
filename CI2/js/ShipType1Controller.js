class ShipType1Controller extends ShipControler{
  constructor(x, y, isPlayer1, configs){
    var spriteName = "Spaceship1-" + (isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.1;
    configs.health = 5;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(25, 20);
    super(x, y, spriteName, configs);
  };
  fire(){
    for (var i = 1; i<6; i++){
      var newBullet = new Bullet(this.sprite.position,'BulletType1.png',new Phaser.Point(i-3, -10),{powrer : 1}, new Phaser.Point(0.5, 0.5));
    }
  }
}
