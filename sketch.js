const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

let right_wall, left_wall, ground, top_wall
let ball
let btn1,btn2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  btn1 = createImg('right.png')
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)


  btn2 = createImg('up.png')
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vForce)

  right_wall = new Ground(390,200,20,400)
  left_wall = new Ground(10,200,20,400)
  top_wall = new Ground(200,10,400,20)
  ground = new Ground(200,390,400,20)

  let ball_options={
    restitution:0.85
  }

  ball=Bodies.circle(200,10,30,ball_options)
  World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  right_wall.display()
  left_wall.display()
  top_wall.display()
  ground.display()

 ellipse(ball.position.x,ball.position.y,30,30)
 
}

function hForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.05, y:0})
}

function vForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0, y:-0.05})
}

