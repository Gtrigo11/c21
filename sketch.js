
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	ground =new Ground(400,690,800,20);
	parede =new Ground(500,630,20,100);
	parede2 =new Ground(750,630,20,100);

	var bolaopn = {
		restitution:0.08,
		friction:1.0,
	  }
	  bola = Bodies.circle(100,100,20,bolaopn)
	  World.add(world,bola)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x,bola.position.y,20)
  ground.show()
  parede.show()
  parede2.show()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:-0.05})

	}
}



