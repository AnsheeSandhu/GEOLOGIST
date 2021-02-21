const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine , world ;
var hammer1, stone1;
var ground ;


function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
    hammer1 = new Hammer(600,300);
	stone1 = new Stone(600,200,100,100);

	Engine.run(engine);
  
}


function draw(){
    background("lightblue");
    Engine.update(engine);
 

	hammer1.display();
	ground.display();
	stone1.display();
//	hammer1.x=World.mouseX;
//	hammer1.x=World.mouseY;


}



