
var trex ,trex_running;
var ground, ground_image;
var dummuyGround, invisible_ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  
 trex=createSprite(300,100,20,20);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;


 ground=createSprite(300,170,600,20);
 ground.addImage("infinite",ground_image);
 ground.velocityX=-2

 dummyGround=createSprite(300,180,600,20);
}

function draw(){
  background("white")
  if(ground.x<0){
ground.x=ground.width/2
  }
  if(keyDown("up")&&trex.collide(dummyGround)){
trex.velocityY= -10
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(dummyGround);
  dummyGround.visible=false;
drawSprites();
}
