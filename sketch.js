
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine,world
function setup() {
	createCanvas(1200,600)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    plane = new Plane(600,height,1200,20);
	iron = new Iron(300,350);
    rubber = new Rubber(900,450,70);
	
	sand1 = new Sand(500,450,10)
	sand2 = new Sand(510,450,10)
	sand3 = new Sand(520,450,10)
	sand4 = new Sand(530,450,10)
	sand5 = new Sand(540,450,10)
    hammer = new Hammer(10,100);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine)
  plane.display()
  iron.display()
  rubber.display()
  
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  hammer.display()
 
}



