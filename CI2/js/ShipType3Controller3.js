class ShipType3Controller extends ShipControler{
  constructor(x, y, isPlayer1, configs){
    var spriteName = "Spaceship3-" + (isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = -1;
    configs.health = 5;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(16, 15);
    super(x, y, spriteName, configs);

  };
  fire(){
      var newBullet = new Bullet(this.sprite.position,'BulletType3.png',new Phaser.Point(0, -10),{powrer : 1}, new Phaser.Point(0.5, 1));
      newBullet.sprite.body.velocity = new Phaser.Point(0, -10).setMagnitude(999999999);
  }
}
