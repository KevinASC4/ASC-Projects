console.log("Hello World")

function setup(){
    createCanvas(500,500);
    //background(R (value: 0-225), G (value:0-255)
    background(225);
    fill("yellow")
    ellipse(width/2,height/2,400);
    fill("black");
    //BEASTLY
    strokeWeight(10);
    //top sunglasses line
    line(80,150,420,150);
    //mouthline
    line(150, 350,width-150,350);
    //sunglasses
    rect(150,150,80,40)
    rect(280, 150, 80, 40);
}