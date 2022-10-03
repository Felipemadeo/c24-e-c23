
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
let engine;
let world;

var ground;

var top_wall;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var btn1;
var btn2;
var con;
var ballp;
var ballp2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
 
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
 

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball5);
  ballp = Bodies.circle(200,300,20,ball_options);
  World.add(world,ballp);
  ballp2 = Bodies.circle(200,300,20,ball_options);
  World.add(world,ballp2);
  con = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball, 
    pointB:{x:0,y:0},
    length:200,
    stiffness:0.01,
  });

  World.add(world,con);
  con = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball2, 
    pointB:{x:0,y:0},
    length:200,
    stiffness:0.01,
  });

  World.add(world,con);

  con = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball3, 
    pointB:{x:0,y:0},
    length:200,
    stiffness:0.01,
  });

  World.add(world,con);
  con = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball4, 
    pointB:{x:0,y:0},
    length:200,
    stiffness:0.01,
  });

  World.add(world,con);
  con = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball, 
    pointB:{x:0,y:0},
    length:200,
    stiffness:0.01,
  });

  World.add(world,con);
  con = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball5, 
    pointB:{x:0,y:0},
    length:200,
    stiffness:0.01,
  });

  World.add(world,con);
rectMode(CENTER);    
  ellipseMode(RADIUS);
}


function draw() 
{
  background(151);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  push();
  strokeWeight(5);
  stroke(20);
  line (con.pointA.x,con.pointB.y,ball.position.x,ball.position.y);
  pop();
 Engine.update(engine);
  ellipse(ball2.position.x,ball2.position.y,20);
  ground.show();
  push();
  strokeWeight(5);
  stroke(20);
  line (con.pointA.x,con.pointB.y,ball2.position.x,ball2.position.y);
  pop();
  Engine.update(engine);
  ellipse(ball3.position.x,ball3.position.y,20);
  ground.show();
  push();
  strokeWeight(5);
  stroke(20);
  line (con.pointA.x,con.pointB.y,ball3.position.x,ball3.position.y);
  pop();
  Engine.update(engine);
  ellipse(ball4.position.x,ball4.position.y,20);
  ground.show();
  push();
  strokeWeight(5);
  stroke(20);
  line (con.pointA.x,con.pointB.y,ball4.position.x,ball4.position.y);
  pop();
  Engine.update(engine);
  ellipse(ball5.position.x,ball5.position.y,20);
  ground.show();
  push();
  strokeWeight(5);
  stroke(20);
  line (con.pointA.x,con.pointB.y,ball5.position.x,ball5.position.y);
  pop();
  Engine.update(engine);
  ellipse(ballp.position.x,ballp.position.y,20);
  ellipse(ballp2.position.x,ballp.position.y,20);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ballp,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ballp2,{x:0,y:0},{x:0,y:-0.05});
}
  


