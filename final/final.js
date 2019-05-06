var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000,
        height: 800
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
    this.load.image('1tile', 'assets/Tile (1).png')
    this.load.spritesheet('dude',//'assets/run.png', 
    'https://raw.githubusercontent.com/jlaw21/jelaw21.github.io/master/Tuts/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('block', 'assets/Tile (5).png')
}

function rendering() {

    this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
    this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);

    onetile = this.physics.add.group();
    twoBG = this.physics.add.group();
    threeBG = this.physics.add.group();
    fourBG = this.physics.add.group();

    this.add.image(400, 300, 'sky').setScale(8)

    for (let i = 0; i < 50; i++) {
        onetile.create(10 + i * 85, 600, 'block').setScale(.35).setImmovable(true);
    }

    onetile.create(605, 510, 'block').setScale(.35).setImmovable(true);
    onetile.create(690, 510, 'block').setScale(.35).setImmovable(true);
    onetile.create(690, 425, 'block').setScale(.35).setImmovable(true);

    player = this.physics.add.sprite(40, 30, 'dude')//.setScale(.20)
    player.setGravityY(300);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, onetile);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    this.cameras.main.startFollow(player, true, 0.05, 0.05);

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-200);
        player.anims.play('left', true);
    }else if (cursors.right.isDown) {
        player.setVelocityX(200);
        player.anims.play('right', true);
    }else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-350);
    }else if (cursors.down.isDown) {
        player.setVelocityY(550);
    }
};