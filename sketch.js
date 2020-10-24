
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(200,390,400,10) ;
box=new Box1(360,360,10,50)
box1=new Box2(315,380,80,10)
box2=new Box3(275,360,10,50)
ball=new Ball(40,380,30)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  text(mouseX+","+mouseY,50,50);
  ground.display();
box.display();
box1.display();
box2.display();
ball.display();
}



