class ShipType2Controller extends ShipControler{
  constructor(x, y, isPlayer1, configs){
    var spriteName = "Spaceship2-" + (isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.6;
    configs.health = 5;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(25, 20);
    super(x, y, spriteName, configs);
  };
  fire(){
    var newBullet = new Bullet(this.sprite.position, "BulletType2.png", new Phaser.Point(0, -10), {powrer: 5}, new Phaser.Point(0.5, 0.5));
    var speed = 600;
    var target = Nakama.enemys[0].sprite.body.position;
    newBullet.sprite.update = function(){
      if ( Nakama.enemys[0].sprite.alive){
        bulletFollow(Nakama.enemys[0])
      }
      else if (Nakama.enemys[1].sprite.alive) {
        bulletFollow(Nakama.enemys[1])
      }
      else if (Nakama.enemys[2].sprite.alive) {
        bulletFollow(Nakama.enemys[2])
      }
      else if (Nakama.enemys[3].sprite.alive) {
        bulletFollow(Nakama.enemys[3])
      }
      else if (Nakama.enemys[4].sprite.alive) {
        bulletFollow(Nakama.enemys[4])
      }
      else {
        var target = new Phaser.Point(0, -10);
        newBullet.sprite.body.velocity = target.setMagnitude(speed);
        newBullet.sprite.angle = Math.atan2(0, 10) * (180/Math.PI);
      }
      function bulletFollow(enemy) {
        var target = enemy.sprite.body.position;
        newBullet.sprite.body.velocity = new Phaser.Point(target.x - newBullet.sprite.body.position.x, target.y - newBullet.sprite.body.position.y).setMagnitude(speed);
        newBullet.sprite.angle = Math.atan2(target.x - newBullet.sprite.body.position.x, target.y + newBullet.sprite.body.position.y) * (180/Math.PI);
      }
    }
  }
}
