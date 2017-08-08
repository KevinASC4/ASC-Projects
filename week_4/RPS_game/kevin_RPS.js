var choices=["rock","paper","scissors"];
var winArray=[];
var loseArray=[];
// making the database an object
var database=firebase.database().refrence();
function updateDB(){
    var initials=$("#login").val();
    var wins=1
}







function game(num){
   userChoice= choices[num];
   enemyChoice=choices[Math.floor(Math.random()*3)];
    if(userChoice==enemyChoice){
        console.log("try again!")
        $("#results").append("Try again!<br>")
    }
    else if(enemyChoice=="paper" && userChoice=="rock"
         || enemyChoice=="rock" && userChoice=="scissors"
         || enemyChoice=="scissors" && userChoice=="paper"){
        console.log("You lose!");
        $("#results").append("You lose!<br>");
        loseArray.push(1);
      
    }
    else if(userChoice=="paper" && enemyChoice=="rock"
         || userChoice=="rock" && enemyChoice=="scissors"
         || userChoice=="scissors" && enemyChoice=="paper"){
        console.log("You Win!!!")
        $("#results").append("You Win!<br>");
         winArray.push(1);
        
         }
    v
}

function reset(){
    $("#results").remove();
}

function score(){
    $("#win").append(winArray.length);
    $("#loss").append(loseArray.length);
    alert("It stored in the fireBase!")
}