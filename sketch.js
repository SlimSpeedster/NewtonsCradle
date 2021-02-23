
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ball1, ball2, ball3, ball4, ball5, roofObj;

var rope1,rope2, rope3, rope4, rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

		roofObj=new Roof(width/2,height/4,width/7,20);

	
	var startPositionX = width/2;
	var startPositionY = height/4+500;
	var ballDiameter = 40;

		ball1 = new Ball(startPositionX-ballDiameter*2, startPositionY, ballDiameter);
		ball2 = new Ball(startPositionX-ballDiameter, startPositionY, ballDiameter);
		ball3 = new Ball(startPositionX, startPositionY, ballDiameter);
		ball4 = new Ball(startPositionX+ballDiameter, startPositionY, ballDiameter)
		ball5 = new Ball(startPositionX+ballDiameter*2, startPositionY, ballDiameter)


			var render = Render.create({
				element: document.body, 
				engine: engine,
				options:{ 
				width: 120,
				height: 700, 
				wireframes: false
			}

			});



		rope1 = new rope(ball1.body, roofObj.body, -ballDiameter*2, 0);
		rope2 = new rope(ball2.body, roofObj.body, -ballDiameter, 0);
		rope3 = new rope(ball3.body, roofObj.body, 0, 0);
		rope4 = new rope(ball4.body, roofObj.body, ballDiameter, 0);
		rope5 = new rope(ball5.body, roofObj.body, ballDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 
	keyPressed();
  
	roofObj.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

}


function drawLine(constraint) { BallBodyPosition=constraint.bodyA.position 
		roofBodyPosition=constraint.bodyB.position 
		roofBodyOffset=constraint.pointB; 
		roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
		roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
		line(BallBodyPosition.x, BallBodyPosition.y, roofBodyX,roofBodyY); 
	}



function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-20, y:-15});

	}
}

