class Bullet{
  constructor(x,y, spriteName, i){
    this.sprite = Nakama.bulletGroup.create(
      x,
      y,
      'assets',
      spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.body.velocity = new Phaser.Point(i-3, -10).setMagnitude(Nakama.Configs.BULLET_SPEED)
  }
}
