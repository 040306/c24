const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(200, 100, 60);
    stone = new Stone(200, 200, 60, 60);
    iron = new Iron(300, 200)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    console.log(stone.body.position.x)
    console.log(stone.body.position.y)
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}