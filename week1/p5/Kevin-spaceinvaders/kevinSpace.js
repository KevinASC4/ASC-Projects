

var x = 400;
var y = 700;
var xE = 0;
var yE = 0;
var w = 10;
var h = 10;
var width = 50;
var height = 50;
//Stores all bullets
var bulletChamber=[];

//setup
function setup(){
createCanvas(800, 800);
background('black');
}

//Bullet object
function Bullet(x,y,width,height){
    this.x = x+40;
    this.y = y;
    this.width= w;
    this.height= h;
}

function alienShips(xE){
    this.xE = xE;
    this.yE = yE;
    this.width = width;
    this.height = height;
};
var alienShip1 = new alienShips(xE + 10);
var alienShip2 = new alienShips(xE + 170);
var alienShip3 = new alienShips(xE + 330);
var alienShip4 = new alienShips(xE + 490);
var alienShip5 = new alienShips(xE +650);

function draw(){
background("black");
noStroke();
fill(255,105,180);
var playerRect = rect(x,700,80,40);
var cannon = rect(x+35,y-20,20,20);

fill('white');
var alienArr = [alienShip1, alienShip2,alienShip3, alienShip4, alienShip5];
rect(alienShip1.xE,alienShip1.yE,alienShip1.width,alienShip1.height);
rect(alienShip2.xE,alienShip2.yE,alienShip2.width,alienShip2.height);
rect(alienShip3.xE,alienShip3.yE,alienShip3.width,alienShip3.height);
rect(alienShip4.xE,alienShip4.yE,alienShip4.width,alienShip4.height);
rect(alienShip5.xE,alienShip5.yE,alienShip5.width,alienShip5.height);

//player mechanics
for(i = 0; i < bulletChamber.length; i++){
  fill(random(255),random(255),random(255));
  rect(bulletChamber[i].x, bulletChamber[i].y, w, h);
  bulletChamber[i].y = bulletChamber[i].y-10; 
  if(bulletChamber[i].x>10 &&bulletChamber[i].x<60 && bulletChamber[i].y>0 && bulletChamber[i].y<50){
    alienArr.splice(0,1) 
  }
}
 if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  }
}


function keyPressed(){
  if (keyCode == CONTROL) {
    bulletChamber.push(new Bullet(x,y-10,w,h));
    
  }
}

 
 function enemyMove(){
     for(i=0;i<aliensArr.length;i++){        //myarray=enemy ships
         if(aliensArr[i].xE > 500 || aliensArr.xe <0){
         xE *=-1
         }
     }
}  
