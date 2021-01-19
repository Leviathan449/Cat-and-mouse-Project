
function preload() {
    //load the images here
    catImage = loadAnimation("images/tomThree.png","images/tomTwo.png");
    tomFour = loadAnimation("images/tomOne.png","images/tomFour.png");
    mouseImage = loadAnimation("images/jerryOne.png","images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,1000,800)
    garden.addImage(gardenImage);
    cat = createSprite (700,600,20,20);
    cat.addAnimation("catRunning",catImage);
    //cat.addAnimation("catRunning",tomFour);

    cat.scale = 0.1;
    mouse = createSprite (300,600,20,20);
    mouse.addAnimation("mouse",mouseImage);
    mouse.scale = 0.1;
    mouse.setCollider("rectangle",0,0,40,40);
    mouse.debug = true

    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   keyPressed();
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImage);
    if(cat.x-mouse.x < cat.width/2 + mouse.width/2){
     cat.addAnimation("catRunning",tomFour); 
     cat.velocityX = 0;
    }
    
  }


}
