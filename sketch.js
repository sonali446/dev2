const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;


var bg;
var tower,towerImg;
function preload() {

bg= loadImage("./assets/background.gif");

towerImg= loadImage("./assets/tower.png");
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower= Bodies.rectangle(130,350,160,300,options);
 World.add(world,tower)
 
}

function draw() {
  background(100);
  Engine.update(engine);

  image(bg,0,0,width,height);
 
 rect(ground.position.x, ground.position.y,width*2,1);


 push();
 imageMode(CENTER);
 image(towerImg,tower.position.x,tower.position.y,160,300);
 pop();
  
   
}
