var fixed,moving
function setup() {
  createCanvas(800,400);
  moving=createSprite(400,200,70,10);
  moving.shapeColor="red";
  fixed=createSprite(400,70,70,10);
  fixed.shapeColor="yellow"
  fixed.velocityY=1;
  moving.velocityY=-1;
}
function draw() {
  background(0);  
  //moving.x=World.mouseX;
  //moving.y=World.mouseY;
  if(moving.x-fixed.x<fixed.width/2+moving.width/2
    &&fixed.x-moving.x<fixed.width/2+moving.width/2
    &&moving.y-fixed.y<fixed.height/2+moving.height/2
    &&fixed.y-moving.y<fixed.height/2+moving.height/2){

    moving.velocityY=moving.velocityY*(-1)
    fixed.velocityY=fixed.velocityY*(-1)
    }
    else{
      moving.shapeColor="red";
      fixed.shapeColor="yellow"
    }
  drawSprites();
}