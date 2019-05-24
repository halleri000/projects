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
var timer = 0;
var timerText;
var score = 0;
var scoreText;
var lastFired = 0;
var g = 0;


function init() {
    this.load.image('ship', 'assets/sprPlayer.png')
    this.load.spritesheet('enemy1', 'assets/sprEnemy0.png', { frameWidth: 8, frameHeight: 8, })
    this.load.image('bullets', 'assets/beep.png')
    this.load.image('boomboom', 'assets/explosion2.png')
}

function rendering() {
    player = this.physics.add.image(400, 500, 'ship').setScale(3);
    //player.setCollideWorldBounds(true);

    scoreText = this.add.text(16, 560, 'Score: 0', {
        fontSize: "32px",
        fill: 'white'
    });
    timerText = this.add.text(550, 550, 'Time: 0', {
        fontSize: "32px",
        fill: 'white'
    });

    this.anims.create({
        key:'enemy',
        frames:this.anims.generateFrameNumbers('enemy1', {start: 0, end:2}),
        frameRate:5,
        repeat:-1
    })

    enemy = this.physics.add.sprite(Phaser.Math.Between(100, 800), Phaser.Math.Between(100, 200), 'enemy1').setScale(4);

    timedEvent = this.time.addEvent({
        delay: 1000,
        callback: onEvent, 
        callbackScope: this,
        loop: true
    });

    function onEvent() {
        timer++;
        timerText.setText('Time:' + timer);
        enemy = this.physics.add.group();
        enemy = this.physics.add.sprite(Phaser.Math.Between(100, 800), Phaser.Math.Between(100, 600), 'enemy1').setScale(4);
        this.physics.moveToObject(enemy, player, Phaser.Math.Between(40, 200));

        this.physics.add.collider(enemy, player, hitPlayer, null, this);
        this.physics.add.collider(enemy, bullets, hitEnemy, null, this);
        if(g === 1){
            timedEvent.remove(false)
        }
    }

    bullets = this.physics.add.group({
        //maxSize:10,
        runChildrenUpdate: true
    });

    this.physics.moveToObject(enemy, player, Phaser.Math.Between(30, 200));

    this.physics.add.collider(enemy, player, hitPlayer, null, this);
    this.physics.add.collider(enemy, bullets, hitEnemy, null, this);

    particles = this.add.particles('boomboom');

    function hitEnemy(enemy, bullets) {

        score += 10;
        scoreText.setText("Score: " + score);
        enemy.disableBody(true, true);
        bullets.disableBody(true, true);

        particles.createEmitter({
            alpha: { start: 1, end: 0},
            scale: { start: .05, end: .05},
            tint: { start: 0xff945e, end: 0xff945e},
            speed: 50,
            accelerationY: -50,
            angle: { min: -85, max: -95},
            rotate: { min: -180, max: 180},
            lifespan: { min: 1000, max: 1100},
            // blendMode: 'ADD',
            maxParticles: 5,
            x: enemy.x,
            y: enemy.y,
        });
    }

    function hitPlayer(player, enemy) {
        timerText.setText("Time: 0")
        scoreText.setText("Score: " + score);
        this.physics.pause();
        player.disableBody(true, true);
        enemy.disableBody(true, true);

        particles.createEmitter({
            alpha: { start: 1, end: 0},
            scale: { start: .05, end: .05},
            tint: { start: 0xff945e, end: 0xff945e},
            speed: 50,
            accelerationY: -50,
            angle: { min: -85, max: -95},
            rotate: { min: -180, max: 180},
            lifespan: { min: 1000, max: 1100},
            // blendMode: 'ADD',
            maxParticles: 5,
            x: player.x,
            y: player.y,

        });
        g++;
    }
    cursors = this.input.keyboard.createCursorKeys();
}

function update(time) {

    enemy.anims.play('enemy');

    this.physics.world.wrap(player,48)

    if (cursors.left.isDown) {
        player.setVelocityX(-220);
    } else if (cursors.right.isDown) {
        player.setVelocityX(220);
    } else if (cursors.down.isDown) {
        player.setVelocityY(220);
    } else if (cursors.up.isDown) {
        player.setVelocityY(-220);
    } else {
        player.setVelocity(0);
    }
    if (cursors.up.isDown && cursors.space.isDown && time > lastFired) {
        bullets.create(player.x, player.y, 'bullets').setScale(.019);
        bullets.setVelocityY(-160)
        lastFired = time + 50;
    }else if(cursors.right.isDown && cursors.space.isDown && time > lastFired){
        bullets.create(player.x, player.y, 'bullets').setScale(.019);
        bullets.setVelocityX(160)
        lastFired = time + 50;
    }else if(cursors.left.isDown && cursors.space.isDown && time > lastFired){
        bullets.create(player.x, player.y, 'bullets').setScale(.019);
        bullets.setVelocityX(-160)
        lastFired = time + 50;
    }else if(cursors.down.isDown && cursors.space.isDown && time > lastFired){
        bullets.create(player.x, player.y, 'bullets').setScale(.019);
        bullets.setVelocityX(-160)
        lastFired = time + 50;
    }
}
