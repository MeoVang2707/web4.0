class Enemy{
  constructor(x,y, spriteName, configs){
    this.configs = configs;
    this.sprite = Nakama.enemyGroup.create(
      x,
      y,
      'assets',
      spriteName);
    this.sprite.health = this.configs.health;
    this.sprite.play('fly');
    Nakama.game.add.tween(this.sprite).to( { x: x, y: 500 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
  }
  update(){

  }
}
