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



function init(){
    this.load.image('sky', 'assets/sky.png')
    this.load.image('1background', 'assets/BGTile (1).png')
    this.load.image('2background', 'assets/BGTile (2).png')
}

function rendering(){
    this.add.image(400, 300, 'sky');

    oneBG = this.physics.add.group();
    twoBG = this.physics.add.group();
    for(let i = 0; i<5;i++){
        oneBG.create(30 + i*175,45, '1background').setScale(.35)
    }
    for(let i = 0; i<5;i++){
        twoBG.create(118 + i*175,45, '2background').setScale(.35)
    }
    //this.add.image(30,30, 'background').setScale(.25)
    


  
}

function update(){

}