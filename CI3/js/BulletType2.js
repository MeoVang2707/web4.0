class BulletType2 extends Bullet{
  constructor(position, direction, configs){
    super(position, "BulletType2.png", direction, configs);
  }

  update(){
    var minDistance = 99999;
    Nakama.enemyGroup.forEachAlive(function(enemy){
      var distancetoEnemy = Phaser.Point.subtract(Nakama.enemys.[i].position, this.sprite.position).getMagnitude();
      if(distancetoEnemy < minDistance){
        minDistance = distancetoEnemy;
        this.target = enemy;
      }
    });

    if (!this.target) return;

    this.sprite.body.velocity = Phaser.Point.subtract(
      this.target.position,
      this.sprite.position,
    ).setMagnitude(Nakama.configs.BULLET_SPEED);

    this.sprite.angle = Math.atan2(
      this.sprite.body.velocity.x,
      - this.sprite.body.velocity.y
    ) * (180/Math.PI)

  }
}
