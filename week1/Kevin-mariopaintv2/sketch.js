function setup(){
    createCanvas(600,600);
    background(190);
};
var v = p5.Vector.random2D();
function roll(n) {
    return Math.floor(Math.random() * n);
}
function mouseDragged() {
  fill(roll(200),roll(200),roll(200));  
  ellipse(mouseX, mouseY,roll(50), roll(50));
  // prevent default
  return false;
}

function mousePressed() {
  clear();
}