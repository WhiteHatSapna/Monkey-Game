
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score =0;
var ground

// added comment
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 //createCanvas(600,400); 
monkey = createSprite(50,300); 
monkey.addAnimation("mon",monkey_running) ;
monkey.scale = 0.1; 
  
ground = createSprite(200,320,1100,10);  
  


bananaGroup = new Group();  
obstaclesGroup = new Group();
}


function draw()
{
    background("lightgreen");
   

    if(keyDown("space"))
      {
        monkey.velocityY = -6;
      }

    monkey.velocityY = monkey.velocityY+0.8;
    monkey.collide(ground);

    ground.velocityX =-12;

    if(ground.x <0) 
    {
      ground.x = ground.width/2;
    } 
  
  

    food(); 
    obstacleCreate();
  
     if(obstaclesGroup.isTouching(monkey))
     {
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
    drawSprites(); 
  
    stroke("white");
    textSize(20);
    fill("black");
    
    survivalTime=Math.ceil(frameCount/frameRate())
 
  
   text("Survival Time: "+ survivalTime, 100,50);
}


function food()
{
  if(frameCount % 80 === 0)
    {
      var food = createSprite(500,100,10,10);
      food.addImage("ban",bananaImage);
      food.scale = 0.1;
      food.y = Math.round(random(120 ,200));
      food.velocityX = -6;
      food.lifetime = 80;
      bananaGroup.add(food);
    }
}

function obstacleCreate()
{
  if(frameCount % 300 === 0)
    {
    obstacle = createSprite(200,300,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;  
    obstacle.velocityX = -12;
    obstacle.lifetime = 25;
    obstaclesGroup.add(obstacle);
    }
}

