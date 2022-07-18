import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  square:Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {
    // const logo = this.add.image(400, 70, 'logo');
    
    this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
    this.physics.add.existing(this.square, false);
    this.square.body.setCollideWorldBounds(true)

    // this.tweens.add({
    //   targets: logo,
    //   y: 350,
    //   duration: 1500,
    //   ease: 'Sine.inOut',
    //   yoyo: true,
    //   repeat: -1
    // });
  }

  update(time: number, delta: number): void {
    const key:Phaser.Types.Input.Keyboard.CursorKeys = this.input.keyboard.createCursorKeys();

    if(key.up.isDown){
      this.square.body.setAccelerationY(-5000);
    }
    else if(key.down.isDown){
      this.square.body.setAccelerationY(5000);
    }
    else{
      this.square.body.setAccelerationY(0);
    }
    this.square.body.velocity.multiply(new Phaser.Math.Vector2(0.9, 0.9))
  }
}
