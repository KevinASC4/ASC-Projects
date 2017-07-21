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
        xC*= -1 + -xC;
        yC *= 1 +yC;
    }if(y == windowHeight - 50 || y== windowHeight + 50){
        xC *= 1 +xC;
        yC *=-1 + -yC;
        rect(mouseX,MouseY,100,10)
    }
}



