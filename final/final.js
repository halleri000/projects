
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

    this.load.image('ball', 'assets/ball.png')
    this.load.image('block', 'assets/block.png')
    this.load.image('panel', 'assets/panel.png')
    this.load.image('trajectory', 'assets/trajectory.png')
}

 function rendering(){
    this.add.image(400,300,'panel');
    this.add.image(300, 300, 'ball');
    this.add.image(200, 300, 'block').setScale(0.5);
    this.add.image(500,300, 'trajectory');
 
        


 }

 function update(){

 }