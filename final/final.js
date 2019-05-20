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
            //  gravity: { y: 300 },
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
var score = 0;
var scoreText;
function init() {
    this.load.image('ship', 'assets/sprPlayer.png')
    this.load.spritesheet('enemy1', 'assets/sprEnemy0.png', { frameWidth: 8, frameHeight: 8, })
    this.load.image('bullets', 'assets/beep.png')
}

function rendering() {
    player = this.physics.add.image(400, 500, 'ship').setScale(3);
    //player.setCollideWorldBounds(true);

    scoreText = this.add.text(16,550, 'Score: 0', {fontSize: "32px", fill:"#000"});

    enemy = this.physics.add.group();

    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 4; j++) {
            enemy.create(i * 75, j * 75, 'enemy1').setScale(4);
        }
    }

    bullets = this.physics.add.group()

    this.physics.add.collider(enemy, bullets)
    this.physics.add.overlap(enemy, bullets, hitEnemy, null, this)



    function hitEnemy(enemy,bullets){
        enemy.disableBody(true, true);
        bullets.disableBody(true,true);
        score += 100;
        scoreText.setText("Score: " + score);
    }

    cursors = this.input.keyboard.createCursorKeys();

}

function update() {

    //bop.setVelocityX(160);
    //  if (bop.x > 950)
    //{
    //    bop.x = -150;
    //}

    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
    }
    else {
        player.setVelocityX(0);
    }

    if(cursors.up.isDown){
        bullets.create(player.x, player.y, 'bullets').setScale(0.019);
        bullets.setVelocityY(-160);
    }


}
