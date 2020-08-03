const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

 translate(0,0);
//rotate(angle);
 scAngle = map(sc,0,60,0,360);

 translate(0,0);
 //rotate(angle);
 mnAngle = map(mn,0,60,0,360);

 translate(0,0);
 //rotate(angle);
 hrAngle = map(hr,0,60,0,360);

  drawSprites();

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

}