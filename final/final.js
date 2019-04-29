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
            gravity: { y: 300 },
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



function init(){
    this.load.image('sky', 'assets/sky.png')
}

function rendering(){
    this.add.image(400, 300, 'sky');
}

function update(){

}