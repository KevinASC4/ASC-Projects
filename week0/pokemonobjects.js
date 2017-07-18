var prompt = require('prompt-sync')();
var firstPokemon = {
    "attack" : 78,
    "defense" : 84 ,                                                                
    "legend?": false,
    "hp" : 90,
    "name" : "Charizard",
    "type" :  "Fire and Flying"
};
var secondPokemon = {
    "attack" : 83 ,
    "defense" : 82 ,
    "hp" : 80 ,
    "legend?": false ,
    "name" :"Venasaur" ,
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
var randomPokemon = pokemonRoster[Math.floor(Math.random()*pokemonRoster.length)] ;

function printRoster(){
    for(var i = 0 ; i < pokemonRoster.length; i++){
    console.log(pokemonRoster[i]);
    }
}
printRoster();

function pokemonAttacked(){
    for(var i = 0; i < pokemonRoster.length; i++){
        pokemonRoster[i]["hp"] = pokemonRoster[i]["hp"] - 10;
        console.log(pokemonRoster[i]);
    }
}
pokemonAttacked();

function userAttack(){
    var userChoice = prompt("Hey trainer! How much damage would you like to inflict on one of the pokemons?");
    var randomPokemonhealth = randomPokemon.hp - userChoice;
    console.log("You attacked " + randomPokemon.name + " and their hp is now " + randomPokemonhealth)
}
userAttack();

function userPokemon(){
    var userPokemon = prompt("Great job trainer! Now you can add a pokemon to the roster! Which pokemon would you like to add?");
    pokemonRoster = pokemonRoster.push(userPokemon);
    console.log("You just added " + userPokemon + " to your roster!!");
}
userPokemon(); 

function removePokemon(){
var userremovePokemon= prompt("Hey user, would you like to remove a random pokemon? yes//no ")
    if(userremovePokemon == "yes"){
        pokemonRoster =  pokemonRoster.pop(randomPokemon);
        var userNewroster = prompt("Would you like to see your roster?");
            if(userNewroster == "yes"){
                console.log(pokemonRoster);
            }
            else{
                console.log("Great, have a nice day!")
            }
            }
    
    else{
        console.log("Okay Trainer, have a great day!")
        
    }
}
removePokemon()
