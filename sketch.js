const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var dground,tree,treeimg;
var boy, boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
  treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
  }

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

  dground=new ground();
	stones=new stone(235,420,30); 
	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);

  attach=new launcher(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
  tree.addImage(treeimg);
  tree.scale=0.42;

  boy=createsprite(160,550);
  boy.addImage(boyimg);
  boyscale=0.125;

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER)
  background(255);

  fill("black")
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
 
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
   
  drawSprites();
  
  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 

 } 
  
 function mouseDragged(){
   matter.Body.setposition(stones.body,{x:mouseX,y:mouseY});
 }

function mouseReleased(){
  attach.fly();
}

  function detectollision(lstone,lmango){

    if(lstone.boby.position.X- lmango.body.position.X <lmango.dimaetre + lstones.dimaetre
      && lamango.body.position.x - lstones.body.position.x < lmango.diametre + lstones.diametre
      &&lstones.body.position.y  -lmango.body.position.y < lmango.diametre + lstones.diametre
      && lmango.body.position.y  - lstones.body.position.y < lmango.diametre + lstones.diametre){
       matter.body.setstatic(lmango.body,false); 
      }


    }    
      function keyPressed(){
        if(keyCode===32){
          matter.body.setposition(stones.body,{x:100,y:465});
          attach.launch(stones.body);
        }
      }     