const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var levels = level1;

var bullets=50
var engine, world;
var canvas;
var bullet
var oceanImg,ocean;
var hippo, hippoImg;
var damageImg, hpImg, damage, hp;
var ballImg,ball;
var gun, gunImg;
var player, playerImg;
var enemy, enemyImg;
var shooter_shooting;
var obstacle,obstacleImage;

function preload() {
 
  backgroundImg = loadImage("./images/bg.png");
  hippoImg = loadAnimation("./images/normalHippo.png","./images/hippoHit.png");
  damageImg = loadImage("./images/alsoHealthBar.png");
  hpImg = loadImage("./images/healthBar.png");
  ballImg = loadImage("./images/tennisBall.png");
  enemyImg = loadImage("./images/enemyCharacter.png");

  playerImg = loadImage("./images/shooter_2.png");
  shooter_shooting = loadImage("./images/shooter_3.png");
  obstacleImage = loadImage("./images/obstacle.png");

}

function setup() {
  canvas = createCanvas(2000, 600);

  engine = Engine.create();
  world = engine.world;

  hippo = createSprite(4000,200,10,10);
  hippo.addAnimation("hippo",hippoImg);

  enemy = createSprite(1600,300,10,10);
  enemy.addImage("char3",enemyImg);
  enemy.scale= 0.4

  obstacle = createSprite(1000,350,10,10);
  obstacle.addImage("treasure",obstacleImage);
  obstacle.scale=0.8

  player = createSprite(300,300,10,10);
  player.addImage(playerImg);
  player.scale=0.5
  bullet = new Bullet(player.x, player.y);

  bulletGroup=new Group();

    

  
  



 
  

  /*//add these lines when the charcter is hit
  damage = createSprite(150,300,10,10);
  damage.addImage("lossOfHealth",damageImg);
  hp = createSprite(1000,200,10,10);
  hp.addImage("health",hpImg);*/


 
}

function draw() {
  background(backgroundImg);


  if(keyWentDown("SPACE")){
    bullet.shoot()
    bulletGroup.add(bullet);
    bullet.addImage(ballImg)
    player.depth=bullet.depth;
    player.depth=player.x+2
    player.addImage(shooter_shooting);
    
    bullets=bullets-1

  }
  else if(keyWentUp("SPACE")){
    player.addImage(playerImg)

  }







  
  Engine.update(engine);
  
  
  bullet.display()
  
  
  
  
 // image(ballImg,bullet.position.x,bullet.position.y,20);

  
  drawSprites();

}

// function bullets(){
//   if(frameCount===60 || keyPressed("SPACE")
//   ball=Bodies.circle(1600,200,5);
//   World.add(world,ball)
// }
