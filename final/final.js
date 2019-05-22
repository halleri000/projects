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
var lastFired = 0;

function init() {
    this.load.image('ship', 'assets/sprPlayer.png')
    this.load.spritesheet('enemy1', 'assets/sprEnemy0.png', { frameWidth: 8, frameHeight: 8, })
    this.load.image('bullets', 'assets/beep.png')
    this.load.image('boomboom', 'assets/explosion2.png')
}

function rendering() {
    
    player = this.physics.add.image(400, 500, 'ship').setScale(3);
    player.setCollideWorldBounds(true);

    scoreText = this.add.text(16,550, 'Score: 0', {fontSize: "32px", fill:'white'});

    enemy = this.physics.add.group();
    //for (let row = 2; row < 10; row++) {
      //  for (let col = 1; col < 4; col++) {
        //    enemy.create(row * 75, col * 75, 'enemy1').setScale(4);
       // }
   // }

   enemy = this.physics.add.image(Phaser.Math.Between(100,800), Phaser.Math.Between(100,600), 'enemy1').setScale(3);
   enemy.setCollideWorldBounds(true);

   this.physics.moveToObject(enemy, player, Phaser.Math.Between(200,1000));


    bullets = this.physics.add.group({
        //maxSize:2,
        //runChildrenUpdate: true
    });

    this.physics.add.collider(enemy, player, hitPlayer);
    this.physics.add.collider(enemy, bullets, hitEnemy, null, this);
    particles = this.add.particles('boomboom');

    function hitEnemy(enemy, bullets){
        enemy.disableBody(true,true);
        bullets.disableBody(true,true);

    particles.createEmitter({
        alpha: { start: 1, end: 0 },
        scale: { start: .05,end:.05},
        tint: { start: 0xff945e, end: 0xff945e },
        speed: 50,
        accelerationY: -50,
        angle: { min: -85, max: -95 },
        rotate: { min: -180, max: 180 },
        lifespan: { min: 1000, max: 1100 },
        // blendMode: 'ADD',
        maxParticles: 5,
        x: enemy.x,
        y: enemy.y,
    });

    }

    function hitPlayer(player, enemy){
        //this.physics.pause();
        player.disableBody(true,true);
        enemy.disableBody(true,true);
    
        particles.createEmitter({
            alpha: { start: 1, end: 0 },
            scale: { start: .05,end:.05},
            tint: { start: 0xff945e, end: 0xff945e },
            speed: 50,
            accelerationY: -50,
            angle: { min: -85, max: -95 },
            rotate: { min: -180, max: 180 },
            lifespan: { min: 1000, max: 1100 },
            // blendMode: 'ADD',
            maxParticles: 5,
            x: player.x,
            y: player.y ,

    });
}

    cursors = this.input.keyboard.createCursorKeys();

}

function update(time){
//enemy.setVelocity(160);


if(cursors.left.isDown){
    player.setVelocityX(-160);
}
else if(cursors.right.isDown){
    player.setVelocityX(160);
}
else if(cursors.down.isDown){
    player.setVelocityY(160);
}
else if(cursors.up.isDown){
    player.setVelocityY(-160);
}
else{
    player.setVelocityX(0);
}
if(cursors.space.isDown && time > lastFired){
    bullets.create(player.x,player.y,'bullets').setScale(.019);
    bullets.setVelocityY(-160)
    lastFired = time+50;
    }
}

