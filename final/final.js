
    var config = {
    
    
        type: Phaser.AUTO,
        scale: {
                 mode: Phaser.Scale.FIT,
                 autoCenter: Phaser.Scale.CENTER_BOTH,
                 width:800,
                 height:600
             },
      scale: {
         parent: 'phaser-example',
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

 function init(){

    this.load.image('pship', 'assets/sprPlayer.png')
    this.load.image('shield', 'assets/sprShieldTile.png')
    this.load.spritesheet('enemy1', 'assets/sprEnemy0.png', {frameWidth:8,frameHeight:8, })
    this.load.image('boop','assets/thing.gif')
    
}

 function rendering(){
     player = this.physics.add.image(400,500,'pship').setScale(3);
        //player.setCollideWorldBounds(true);

        bop=this.physics.add.group();
        
        for(let i=2; i<10;i++){
        for(let x=1; x<4; x++){
          bop.create(i*75,x*75,'enemy1').setScale(4);
        }
      
        }

       // bop=this.physics.add.sprite(100,100,'enemy1').setScale(5);







       

        

 



    cursors = this.input.keyboard.createCursorKeys();

 }

 function update(){


bop.setVelocityX(160);
    if (bop.x > 950)
    {
        bop.x = -150;
    }
        
    if(cursors.left.isDown){
        player.setVelocityX(-160);
        //player.anims.play('left', true);
    }else if(cursors.right.isDown){
        player.setVelocityX(160);
        //player.anims.play('right',true);
    }else{
        player.setVelocityX(0);
        //player.anims.play('forward');
    }


 }
