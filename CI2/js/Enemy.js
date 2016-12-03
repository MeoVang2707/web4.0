class Enemy{
  constructor(x,y, spriteName, health){
    this.sprite = Nakama.enemyGroup.create(
      x,
      y,
      'assets',
      spriteName);
    this.sprite.health = health;
    this.sprite.play('fly');
    Nakama.game.add.tween(this.sprite).to( { x: x, y: 500 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
  }
}
