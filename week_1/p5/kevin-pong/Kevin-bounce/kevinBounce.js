function mousePressed(){
console.log('the mouseis at x:'+mouseX+' y:'+mouseY);}
function setup(){
    createCanvas(windowWidth,windowHeight);
    background("Gray");
};
x=102;
y=100;
xC = 1;
yC =1;
function draw(){
    background("gray");
    fill(random(0,225),random(0,225),random(0,225));
    ellipse(x,y,50,50);
    x+=xC;
    y+=yC;
    if(x == windowWidth - 50 || x==windowWidth + 50){
        xC*= -2;
        yC *= 1;
    }if(y == windowHeight -50|| y==windowHeight+50){
        xC *= 1 ;
        yC *=-2;

    }
fill(random(0,225),random(0,225),random(0,225));
rect(mouseX,mouseY,200,20)
if(x>=mouseX+100 && x<=mouseX - 100 && y>=mouseY+10 && y<=mouseY-10){
    xC*=-1
    yC*=1
}
};



