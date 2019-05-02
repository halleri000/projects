var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },

    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },

    scene: {
        preload: init,
        create: rendering,
        update: update
    }

};

var game = new Phaser.Game(config);



function init() {
    this.load.image('sky', 'assets/sky.png')
    this.load.image('1tile','assets/Tile (1).png')


}

function rendering() {

    oneBG = this.physics.add.group();
    twoBG = this.physics.add.group();
    threeBG = this.physics.add.group();
    fourBG = this.physics.add.group();
  

    this.add.image(40,600,'1tile').setScale(.35);
    player = this.physics.add.sprite(40,30, 'dude').setScale(.20)
    player.setGravityY(300);




}

function update() {

}