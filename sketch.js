const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var  slingShot;

function preload(){
   polygonImg=loadImage("polygon.png"); 
}

function setup(){
    var canvas=createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,790,1200,20);
    ground1 = new Ground(480,600,340,10);
    ground2 = new Ground(830,450,250,10);

    //bottom S1
    box1 = new Box(360,575);
    box2 = new Box(400,575);
    box3 = new Box(440,575);
    box4 = new Box(480,575);
    box5 = new Box(520,575);
    box6 = new Box(560,575);
    box7 = new Box(600,575);
    
    //third row S1
    box8 = new Box(400,555);
    box9 = new Box(440,555);
    box10 = new Box(480,555);
    box11 = new Box(520,555);
    box12 = new Box(560,555);
    
    //second row S1
    box13 = new Box(440,535);
    box14 = new Box(480,535);
    box15 = new Box(520,535);

    //top S1
    box16 = new Box(480,515);

    //bottom S2
    box17 = new Box(750,425);
    box18 = new Box(790,425);
    box19 = new Box(830,425);
    box20 = new Box(870,425);
    box21 = new Box(910,425);

    //second row S2
    box22 = new Box(790,405);
    box23 = new Box(830,405);
    box24 = new Box(870,405);

    //top S2
    box25 = new Box(830,385);

    polygon = Bodies.circle(50,550,20);
    World.add(world,polygon)

    slingShot= new SlingShot(this.polygon,{x:100,y:550});
    
}

function draw(){
background(60, 46, 46)
Engine.update(engine);
textSize(25)
text("Drag the Hexagonal Stone and Release it,to launch it towards the block",50,50);

ground.display();
ground1.display();
ground2.display();

fill (103, 209, 234);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();


fill (255, 190, 196)
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill(0, 228, 208)
box13.display();
box14.display();
box15.display();

fill(128, 125, 120)
box16.display();

fill (103, 209, 234);
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

fill (255, 190, 196)
box22.display();
box23.display();
box24.display();

fill(0, 228, 208)
box25.display();

imageMode(CENTER);
image (polygonImg,polygon.position.x,polygon.position.y,50,50);

slingShot.display();

drawSprites();
}

function mouseDragged() {
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   slingShot.fly();
}