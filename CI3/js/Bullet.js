class Bullet{
  constructor(position, spriteName, direction, configs, ghim){
    this.configs = configs;
    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      'assets',
      spriteName);
    this.sprite.anchor = ghim;
    this.sprite.powrer = this.configs.powrer;
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.body.velocity = direction.setMagnitude(Nakama.Configs.BULLET_SPEED);
    this.sprite.angle = Math.atan2(direction.x, -direction.y) * (180/Math.PI);
    // this.sprite.events.onkilled.add(this.explode, this);
  }
  update(){

  }

  // explode(){
  //   var index = Nakama.bulletList.indexOf(this);
  //   if (index > -1){
  //     Nakama.bulletList.splice(index,1);
  //   }
  // }
}
