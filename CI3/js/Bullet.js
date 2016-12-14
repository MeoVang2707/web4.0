class Bullet{
  constructor(position, spriteName, direction, configs){
    this.configs = configs;
    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      'assets',
      spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.powrer = this.configs.powrer;
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.body.velocity = direction.setMagnitude(Nakama.Configs.BULLET_SPEED);
    this.sprite.angle = Math.atan2(direction.x, -direction.y) * (180/Math.PI);
    this.sprite.events.onkilled.add(this.explode, this);
    Nakama.bullets.push(this);
  }

  explode(){
    Nakama.bullets
    this.sprite.destroy();
}
