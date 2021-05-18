const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState = 1;
var firstImg , secondImg;
var carImg;
var backGroundImg;
var time = 0;


function preload(){
  firstImg = loadImage("firstImage.jpg");
  secondImg = loadImage("secondImage.jpg");
  carImg = loadImage("car.png");
  backGroundImg = loadImage("road3.jpg");
  stand = loadImage("thiefWalk.gif");
  walk = loadAnimation( "Thief1.png" ,"Thief2.png" , "Thief3.png" , "Thief4.png" , "Thief5.png" , "Thief6.png" , "Thief7.png" );
  hack = loadAnimation("hack.png" , "hack1.png" , "hack2.png" , "hack3.png" , "hack4.png" , "hack5.png" , "hack6.png" , "hack7.png" , "hack8.png")
}


// setting up the code
function setup(){
  createCanvas(800,700);

  backGround = createSprite(400,300,900,900);
  backGround.addImage(backGroundImg);
  backGround.visible = false;
  backGround.scale = 5;
  backGround.velocityY = 2;

  car = createSprite(400,550,10,10);
  car.addImage(carImg);
  car.scale = 0.4;
  //car.velocityY = -2
  car.visible = false;

  thief = createSprite(400,550,10,10);
  thief.addAnimation("moving" , walk);
  thief.visible = false;

  thief1 = createSprite(400,550,10,10);
  thief1.addImage(stand);
  thief1.visible = false;

  thief2 = createSprite(400,550,10,10);
  thief2.addAnimation("moving" , hack);
  thief2.visible = false;
  


 
  
}


function draw(){
  background("white");
  

  if(gameState === 1){
    textSize(20);
    fill("black")
    text("Hello , Welcome to The Story Game "+"\n"+"In this game ........."+"\n\n"+"Press ENTER to continue" , 20 , 20);



    if(keyCode === 13){
      gameState = 2;
    }


  }

if(gameState === 2){
  background("white");
 // textSize(20);
  //fill("white")
  //text("Hello , Welcome to The Story Game "+"\n"+"In this game ........." , 20 , 20);

  
  time = time + Math.round(getFrameRate()/30);
  textSize(20);
  text("time" + time , 20 ,20)
  if(time < 50-25){
    thief.visible = true;
  }else{
    thief.visible = false;
    thief2.visible = true;
  }
  
}



   drawSprites();

}

