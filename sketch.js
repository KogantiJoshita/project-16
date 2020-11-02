
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(500, 500);
  
  survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("black");
    
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
background("lightblue");
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  text("Survival Time : "+ survivalTime, 300,50);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  Obstacles();
  Food() ; 
  drawSprites();
}

function Obstacles() {
  
  if (frameCount % 300 === 0) {
   var obstacle = createSprite(400,310,10,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
  
     //assign lifetime to the variable
   obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}

function Food(){
if(frameCount%80 === 0){
banana=createSprite(400,200,20,20);
  banana.y = Math.round(random(120,250));
  
banana.scale=0.1;
  r=Math.round(random(1,2));
 
    banana.addImage(bananaImage);
  banana.velocityX = -7;
  banana.setLifetime = 100;
  
  FoodGroup.add(banana);
  
 }
}