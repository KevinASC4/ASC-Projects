var myPokemonRoster = ["Regigias","Giratina","Gengar","Torterra","Infernape"];
var firsttoFight = myPokemonRoster[2];
var secondtoFight = myPokemonRoster[0];
myPokemonRoster.pop();
myPokemonRoster.push("Deoxys");
myPokemonRoster.push("Palkia");
var Rostersize = myPokemonRoster.length;

for(var i=0;i<myPokemonRoster.length;i++){
    console.log(myPokemonRoster[i]);
}

for(var i=myPokemonRoster.length-1;i>-1;i--){
    console.log(myPokemonRoster[i]);
}