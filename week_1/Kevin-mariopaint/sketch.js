function mousePressed(){
console.log('the mouseis at x:'+mouseX+' y:'+mouseY);}

function setup(){
    createCanvas(600,600);
    background(190);
    fill("red");
    rect(93,91,20,20);
    fill("green");
    triangle(197,107,207,87,217,107);
    fill("blue");
    ellipse(303,102,30,30)

};
function mouseClicked() {
  if(mousX>(92))
  return false;
}
