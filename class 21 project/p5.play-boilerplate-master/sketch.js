var thickness;

var speed, weight;
var bullet, wall;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 75, 5);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  
}

function draw() {
  background(1600, 400);
 
   

  bullet.velocityX = speed;
 

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    
var deformation = 0.5 * weight * speed * speed / thickness* thickness* thickness;
bullet.velocityX = 0;
if(deformation>10){
bullet.shapeColor = "red";
}

  if(deformation<10){
    bullet.shapeColor = "green";
    }
  }
  
  
  drawSprites();
}

