function mousePressed(){
console.log('the mouseis at x:'+mouseX+' y:'+mouseY);};

function setup(){
    createCanvas(windowWidth,windowHeight);
    background("Gray");
};
x=102;
y=100;
  xC = 1;
    yC =1;
function draw(){
    background("gray")
    ellipse(x,y,50,50);
    x+=xC;
    y+=yC;
    if(x>750 || x<50){
        xC*= -1;
        yC *= 1;
    }if(y>750 || y<50){
        xC *= 1;
        yC *=-1
    }
}

var Color = background(random(0))
