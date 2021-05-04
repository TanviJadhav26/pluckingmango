
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone,rope;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,170,30);
	mango3=new mango(1000,70,30);
	mango4=new mango(1150,160,30);
	mango5=new mango(1055,180,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(230,427,25);
	rope=new Rope(stone.body,{x:230,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
stone.display();
rope.display();
  groundObject.display();
  collide(mango1,stone);
  collide(mango2,stone);
  collide(mango3,stone);
  collide(mango4,stone);
  collide(mango5,stone);
  //stone.body.position.x=mouseX;
  //stone.body.position.y=mouseY;
}


function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope.fly();
	
	
}
function collide(mango,stone){
/*var collision=Matter.SAT.collides(stone,mango);
if(collision.collided){
	Matter.Body.setStatic(mango,false);
	*/
	stonePosition=stone.body.position;
	mangoposition=mango.body.position;
	var distance=dist(stonePosition.x,stonePosition.y,mangoposition.x,mangoposition.y);
	if(distance<=stone.r+mango.r){
		Matter.Body.setStatic(mango.body,false);

	}
}
