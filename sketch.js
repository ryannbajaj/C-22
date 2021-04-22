const  Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

 var engine, world,ball
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world

var ground_option = {     //JSON (javascript object notation )
 isStatic : true
}


var ball_option = {
restitution: 1, density: 2

}

ground = Bodies.rectangle(200,390,400,40,ground_option);
World.add(world,ground)


ball = Bodies.circle(200,200,30,ball_option)
World.add(world,ball)

console.log(ball)

  
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("red");
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30);
  
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,40);


}