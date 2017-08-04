function mousePressed(){
console.log('the mouseis at x:'+mouseX+' y:'+mouseY);};
var firstPokemon = {
    attack : 78,
    defense : 84 ,                                                                
    legend: false,
    hp : 360,
    name : "Charizard",
    type :  "Fire and Flying"
};
var secondPokemon = {
    "attack" : 83 ,
    "defense" : 82 ,
    "hp" :  364,
    "legend?": false ,
    "name" :"Venusaur" ,
    "type" :"Grass"  
};
var thirdPokemon = {
        "attack" : 100 ,
        "defense" : 85 ,
        "hp" : 90 ,
        "legend?": true,
        "name" : "Articuno" ,
        "type" : "Ice and Flying" 
};
var fourthPokemon = {
        "attack" : 100,
        "defense" : 83 ,
        "hp" : 79 ,
        "legend?": false,
        "name" : "Blastoise" ,
        "type" : "Water"
};
var fifthPokemon = {
        "attack" : 106,
        "defense" : 130,
        "hp" : 90 ,
        "legend?": true ,
        "name" : "Ho-oh" ,
        "type" : "Fire and Flying" 
};
var sixthPokemon = {
        "attack" : 90,
        "defense" : 90 ,
        "hp" : 70 ,
        "legend?":true ,
        "name" : "Darkrai",
        "type" : "Dark" 
};
var pokemonRoster = [firstPokemon,secondPokemon,thirdPokemon,fourthPokemon,fifthPokemon,sixthPokemon];
var oppPokemon = pokemonRoster[Math.floor(Math.random()*pokemonRoster.length)] ;
function getNewPokemon(){
   var newPokemon = pokemonRoster[Math.floor(Math.random()*pokemonRoster.length)]
   if(newPokemon == userPokemon){
       var newPokemon =pokemonRoster[Math.floor(Math.random()*pokemonRoster.length)]
   }
   return(newPokemon.name)
};
function setup(){
    createCanvas(800,800);
    
};
function mouseClicked(){
    if(mouseX>15 && mouseX<190 && mouseY>670 && mouseY<705){
        oppPokemon["hp"] = oppPokemon["hp"]-Math.floor(random(0,10))
    }
    if(mouseX>15 && mouseX<190 && mouseY>725 && mouseY<765){
        oppPokemon["hp"] = oppPokemon.hp -Math.floor(random(5,15))
    }
    if(mouseX>210 && mouseX<385 && mouseY>670 && mouseY<715){
        oppPokemon.hp= oppPokemon.hp - Math.floor(random(10,20))
    }
    if(mouseX>210 && mouseX<385 && mouseY>725 && mouseY<900){
        oppPokemon.hp = oppPokemon.hp-Math.floor(random(15,25))
    }
    setTimeout(function(){
        firstPokemon.hp = firstPokemon.hp-Math.floor(random(0,25))
    },1000);
}



function draw(){
    background(0);
    fill("green");
    textSize(40);
    text(firstPokemon.name,185,500);
    text(oppPokemon.name,450,140)
    text("HP: " + firstPokemon['hp'],185,550);
    text("HP: " + oppPokemon['hp'],475,190);
    fill("red");
    rect(0,650,800,150); //red box
    rect(15,670,175,45);  //first box
    rect(15,725,175,45);  //second box
    rect(210,670,175,45) //third box
    rect(210,725,175,45) //fourth box
    fill("white");
    textSize(25)
    stroke("black");
    strokeWeight(4);
    text("Fire Blast",25,700,); //first attack
    text("Flamethrower",25,755); //second attack
    text("Dragonclaw",220,700); //third attack
    text("Flare Blitz",220,755); //fourth attack
    fill("blue");
    ellipse(120,500,100);
    ellipse(680,150,100);
    if(oppPokemon.hp<=0){
        textSize(30);
        var prevPokemon = oppPokemon;
        //getNewPokemon();
        text("You defeated " + prevPokemon.name + ", " + getNewPokemon()
        + " is about to be sent out!",0,600);
    }

};






