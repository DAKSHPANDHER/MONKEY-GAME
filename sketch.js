var ground;
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleGroup;
var bananaGroup, obstacleGroup;
var survivalTime;
var survivalTime=0;
var PLAY;
var END;
var gameState = PLAY;
var invisibleground;


          // creating function preload 
          function preload(){

          // adding images of monkey 
          monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
          // adding images of banana
          bananaImage = loadImage("banana.png");

          // adding images of obstacle
          obstaceImage = loadImage("obstacle.png");

          }


       // creating function setup
       function setup() {
       // creating canvas
        createCanvas(600,600);

        // creating banana group
        bananaGroup=createGroup();
         
         // creating obstacle group
          obstacleGroup=createGroup();
         
        // creating ground
        ground=createSprite(400,350,900,10);
        ground.velocityX=-5;
         ground.x=ground.width/2;
  
        // creating monkey 
        monkey=createSprite(80,315,20,20);
        monkey.addAnimation("moving",monkey_running);
        monkey.scale=0.1;
  
       
  
      


}

        // creating function of function draw
        function draw(){
          
        //creating bakground 
        background("white");
                  stroke ("black");
        textSize(20);
        fill("black");
        survivalTime=Math.ceil(frameCount/frameRate());
        text("survivalTime:"+survivalTime,100,50);
  
        // creating gamestate play 
     
          
          // making monkey jump 
          if(keyDown("space")){
            monkey.velocityY=-10;
          }
            monkey.velocityY = monkey.velocityY + 0.8
          
          // making score
          if(bananaGroup.isTouching(monkey)){
            survivalTime=+5;
           }
          if(ground.x<0){
            ground.x=ground.width/2;
          }
   
              spawnBanana();
          
          spawnObstacles();
   
        
   
       
                
         
       
         // creating game state end 
        
           if(obstacleGroup.isTouching(monkey)) {
          
           
           
             obstacleGroup.setLifetimeEach(-1);
             bananaGroup.setLifetimeEach(-1);
             bananaGroup.setVelocityXEach(0);
            obstacleGroup.setVelocityXEach(0);
            ground.velocityX=0;
           }
       
         
  
          monkey.collide(ground);
         drawSprites();
          
  
         }
        // creating function for obstacles
          function spawnObstacles(){
            if (frameCount % 300===0){
            // creating group for obstacle
    // creating obstacle
            obstacle = createSprite(350,320,10,10);
            obstacle.addAnimation("obstacle",obstaceImage);
            obstacle.scale=0.2;
                      obstacleGroup.add(obstacle)

                obstacle.velocityX=-5;
             }
               }
  // creating function for banana
          function spawnBanana(){
            if (frameCount % 80===0){ 
         // creating banana
            banana = createSprite(350,100,10,10);
            banana.addAnimation("banana",bananaImage);
           banana.scale=0.2;
          bananaGroup.add(banana) 
                 banana.y = Math.round(random(120,200));
                banana.velocityX=-10;
                   }
          } 