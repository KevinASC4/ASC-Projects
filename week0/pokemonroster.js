//[name,type,hp,defense,attack]
var myPokemons = [[" Charizard","Fire and Flying",78, 84, 78, false],
                  [" Blastoise","Water",79, 83, 100, false],
                  [" Venasaur","Grass and Poison", 80, 82, 83, false],
                  [" Articuno","Ice and Flying",90, 85, 100, true],
                  [" Ho-oh","Fire and Flying", 106, 130, 90, true],
                  [" Staraptor","Flying and Normal", 85, 120,70, false],
                  [" Darkrai","Dark", 70, 90,90, true]];
                  
for(var i=0; i<myPokemons.length; i++){
    console.log("#" + (i +1) + myPokemons[i][0] + " > Type: " 
                + myPokemons[i][1] + " > HP: " + myPokemons[i][2] + " > Attack: "
                + myPokemons[i][4] +' > Defense: ' +myPokemons[i][3] + " > Legend: "
                + myPokemons[i][5])
}
 
//check prompt