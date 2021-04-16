
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
 const Constraint=Matter.Constraint;

var stoneObg1,mango1, ground,boyImage,treeImage; 

function preload()
{
boyImage = loadImage("Plucking Mangoes/boy.png");
treeImage = loadImage("Plucking Mangoes/tree.png");
}
	

function setup() {
	createCanvas(1600, 1000);


	engine = Engine.create();
	world = engine.world;


 
stoneObg1 =new Stone(220,450, 20);

mango1 = new Mango(800,345,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  image(boyImage ,200,340,200,300); 
  image(treeImage ,800,340,250,300); 

  stoneObg1.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObg1.body, {x: mouseX, y: mouseY});
}

