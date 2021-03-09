var bgImg,cat,mouse;
var catImg1,catImg2,catImg3;
var mouseImg1,mouseImg2,mouseImg3;

function preload() {
   bgImg=loadImage("images/garden.png");
   catImg1=loadImage("images/cat1.png");
   catImg2=loadImage("images/cat2.png","images/cat3.png");
   catImg3=loadImage("images/cat4.png");

   mouseImg1=loadImage("images/mouse1.png");
   mouseImg2=loadImage("images/mouse2.png","images/mouse3.png");
   mouseImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    

    cat = createSprite (870,600);
    cat.addAnimation("catSleeping",catImg1);

    cat.scale=0.2;


    mouse = createSprite (200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.15;
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

  //  text(mouseX + ',' + mouseY,10,45);




    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");

mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");

  }


}
