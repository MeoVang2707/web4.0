class LazeBullet {
  constructor(position, direction, configs){
    this.configs = configs;
    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      'assets',
      'BulletType3.png');
    this.sprite.anchor = new Phaser.Point(0.5, 1);
    this.sprite.powrer = this.configs.powrer;

    Nakama.bullets.push(this);
  }
  update(){
    this.sprite.position = this.ship.position;
  }
}
