function setup(){
    createCanvas(800,800);
    ellipse(200,200,200,200)
};

var x = 0;
//function definition
function draw(){
    background("purple")
    ellipse(x,200,200,200);
    x=x+1;
    if(x>=800){
            x=0;
    }
    //x++;
};
//function call or invoke
