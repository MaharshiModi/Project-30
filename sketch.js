const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas=createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(width/2, 550,1200,20);
    base=new Ground(900, 380, 400,20);

    box1 = new Box(900, 350, 40, 40);
    box2 = new Box(940, 350, 40, 40);
    box3 = new Box(980, 350, 40, 40);
    box4 = new Box(820, 350, 40, 40);
    box5 = new Box(860, 350, 40, 40);

    box6=new Box(860, 310, 40,40);
    box7=new Box(900, 310, 40,40);
    box8=new Box(940, 310, 40,40);

    box9=new Box(900, 270, 40, 40);

    polygon1 = new Polygon(100,300, 35, 35);

    slingshot=new SlingShot(polygon1.body,{x:200, y:300});

    Engine.run(engine);
}

function draw(){
    background("purple");

    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    base.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();

    box9.display();

    polygon1.display();

    slingshot.display();
    fill("white");
    textSize(20);
    text("Drag and Release the polygon to hit the boxes", 500, 100);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
    slingshot.fly();

}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(polygon1.body,{x:100, y:300});
        slingshot.attach(polygon1.body);
    }
}
