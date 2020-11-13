var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background("black");  

  is_touching();

  drawSprites();
}

function is_touching(){
  if (car.isTouching(wall)){
    car.velocityX = 0;

    car.collide(wall);
  
    deformation = 0.5 * weight * speed * speed / 22500

    console.log(speed,weight,deformation);

    if (deformation < 100){
      car.shapeColor = "green";
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if (deformation > 180){
      car.shapeColor = "red";
    }
  }
}