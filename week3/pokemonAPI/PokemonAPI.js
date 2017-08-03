var userChoice= "fire";

var mainURL = "http://pokeapi.co/api/v2/type/" ;

$.get(mainURL, function(data){
    for(var i=0;i<data.results.length;i++){
        if (userChoice == data.results[i].name){
            var dataURL = data.results[i].url;
            $.get(dataURL, function(data2){
                for(var j=0; j<data2.pokemon.length;j++){
                    var pokeName = data2.pokemon[j].pokemon.name;
                    var pokeURL = data2.pokemon[j].pokemon.url;
                    console.log(data2)
                    $.get(pokeURL,function(data3){
                        var pokeSprite = data3.sprites.front_default;
                        console.log(pokeSprite);
                    })
                }
            });
        }
    }
});
