var prompt = require('prompt-sync')();
var mashArray = ["Final Destination","Castle Siege","Dream land","Yoshi's Island"];
var firstQuestion = [1,2,3,4];
var secondQuestion = ["Mario","Bowser","Yoshi","Snake"];
var stageType =[" Regular form"," Omega form"]

console.log("You unlocked Mario, Bowser,Yoshi and Snake.")
function userAns(){
var fq = prompt("How many times will you strike?");
var sq = prompt("Who will you choose to fight?!");
    firstQuestion.push(fq);
    secondQuestion.push(sq);
}

userAns();

function result(){
    var randomAttcknum = Math.floor(Math.random()*firstQuestion.length);
    var randomCharacther= Math.floor(Math.random()*secondQuestion.length);
    var randomStage = Math.floor(Math.random()*mashArray.length);
    var randomStagetype = Math.floor(Math.random()*stageType.length);
    console.log("You fought" + secondQuestion[randomCharacther] + " in " + mashArray[randomStage] + stageType[randomStagetype] +" and hit them " + firstQuestion[randomAttcknum] + " of times. Too bad!! You lose!!!!")
}
result()











/*while (firstQuestion<5){
console.log("You have striked " + firstQuestion + " amount of times!!" )
}
prompt("Who will you choose to fight?")
while (secondQuestion<5){
    console.log("You chose " + secondQuestion + " to the battle!!")
}
*/


