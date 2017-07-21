
var myArray=[[1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8]];

function setup(){
    createCanvas(880,880);
    background(random(0,255),random(0,255),random(0,225));
};
var rectx=0
var recty=0
function draw(){
    for(var i = 0;i<myArray.length;i++){
       for(var j = 0;j<myArray.length;j++){
           rect(rectx,recty,100,100)
           rectx=rectx+110
       }
       rectx=0
       recty=recty+110
    }
};

function mouseClicked(){
          if(mouseX>=0 && mouseX<=100 && mouseY>=0 && mouseY<=100 ){
              fill(0)
              rect(0,0,100,100)
          }
}
