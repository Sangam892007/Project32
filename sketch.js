const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13,box14;
var box15;
var constraintBody;
var striker;
var sling;
var gameState = 0;
var ground;
var score = 0;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(540,350,250,10);
  constraintBody = new Polygon(100,100,50,60);
  box1 = new Box(460,330,40,40);
  box2 = new Box(500,330,40,40);
  box3 = new Box(540,330,40,40);
  box4 = new Box(580,330,40,40);
  box5 = new Box(620,330,40,40);
  box6 = new Box(480,285,40,40);
  box7 = new Box(520,285,40,40);
  box8 = new Box(560,285,40,40);
  box9 = new Box(600,285,40,40);
  box10 = new Box(500,255,40,40);
  box11 = new Box(540,255,40,40);
  box12 = new Box(580,255,40,40);
  box13 = new Box(520,210,40,40);
  box14 = new Box(560,210,40,40);
  box15 = new Box(540,165,40,40);
  sling = new Sling(constraintBody.body,{x:100,y:100});
}

function draw() {
  Engine.update(engine);
  background(0);  
  ground.display();
  box1.display("Green");
  box2.display("Green");
  box3.display("Green");
  box4.display("Green");
  box5.display("Green");
  box6.display("Blue");
  box7.display("Blue");
  box8.display("Blue");
  box9.display("Blue");
  box10.display("Yellow");
  box11.display("Yellow");
  box12.display("Yellow");
  box13.display("Red");
  box14.display("Red");
  box15.display("White");
  sling.display();
  constraintBody.display();
  fill("White");
  text("Score: " + score,700,350);
}
function mouseDragged(){
  if(gameState === 0){
  Matter.Body.setPosition(constraintBody.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  sling.fly();
  gameState = 1;
}
function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(constraintBody.body, {x:200 , y:50});
     sling.attach(constraintBody.body);
     gameState = 0
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      background(0,255,255);
  }
  else{
      background(0);
  }
}