function mousePressed(){
console.log('the mouseis at x:'+mouseX+' y:'+mouseY);};
var points = 0
function setup(){
    createCanvas(900,900);
    background("black");
    textSize(20)
    q = "Please type the sentence below";
    fill("white");
    text(q, 71, 100, 200, 300); // Text wraps within text box
    s =["i am a new person","we are learning together","will the real slim shady please stand up?","the vibes are wonderful!"];
    p = random(s);
    fill("blue");
    text(p,71,200,200,300);
    fill("yellow");
    a ="Your score is: " + points ;
    text(a,71,300,400,300);
};
var answer = split(p ," ");

function keyTyped(){
    if (key === answer) {
    fill("green");
    textSize(25);
    text("Good Job! Would you like to try another one?")
    points = 10;
  } else {
    points = 0;
    fill("Green");
    textSize(25)
    text("Try again!",71,400,200,300);

  }

}

