var mainURL = "http://pokeapi.co/api/v2/type/";
var genURL = "http://pokeapi.co/api/v2/generation/";
var pokeNameURL = "http://pokeapi.co/api/v2/pokemon/";
var giphyKey = "81e123f6a0ef46a9a088751438cc6f30";
var giphyAPI = "https://api.giphy.com/v1/" + giphyKey;

$('select').change(function () {
    var type = $(this)[0].value.split(",")[0];
    var gen = $(this)[0].value.split(",")[1];
    searchPokemon(type, gen);
});

function searchPokemon(userChoice, generation) {
    $("#loadingPokemon").fadeIn(100);
    $.get(mainURL, function (data) {
        for (var i = 0; i < data.results.length; i++) {
            if (userChoice == data.results[i].name) {
                var dataURL = data.results[i].url;
                newPokemon(dataURL, generation);
            }
        }
    });
};

function newPokemon(dataURL, generation) {
    $.get(dataURL, function (data2) {
        var rand = Math.floor(Math.random() * data2.pokemon.length);
        var pokeName = data2.pokemon[rand].pokemon.name;
        var pokeURL = data2.pokemon[rand].pokemon.url;
        var pokeNameURL = "http://pokeapi.co/api/v2/pokemon/" + pokeName;
        $.get(pokeNameURL, function (data5) {
            if (generation == 1) {
                if (data5.id > 0 && data5.id < 152) {
                    usePokemon(pokeName, data5, pokeURL);
                } else {
                    newPokemon(dataURL, generation);
                }
            }
            if (generation == 2) {
                if (data5.id > 151 && data5.id <252 ) {
                    usePokemon(pokeName, data5, pokeURL);
                } else {
                    newPokemon(dataURL, generation);
                }
            }
            if (generation == 3) {
                if (data5.id > 251 && data5.id < 387) {
                    usePokemon(pokeName, data5, pokeURL);
                } else {
                    newPokemon(dataURL, generation);
                }
            }
            if (generation == 4) {
                if (data5.id > 386 && data5.id < 494) {
                    usePokemon(pokeName, data5, pokeURL);
                } else {
                    newPokemon(dataURL, generation);
                }
            }
            if (generation == 5) {
                if (data5.id > 493 && data5.id < 650) {
                    usePokemon(pokeName, data5, pokeURL);
                } else {
                    newPokemon(dataURL, generation);
                }
            }
            if (generation == 6) {
                if (data5.id > 649 && data5.id < 722) {
                    usePokemon(pokeName, data5, pokeURL);
                } else {
                    newPokemon(dataURL, generation);
                }
            }
            if (generation == 7) {
                if (data5.id > 721 && data5.id < 803) {
                    usePokemon(pokeName, data5, pokeURL);
                } else {
                    newPokemon(dataURL, generation);
                }
            }
        })
    });
}

function usePokemon(pokeName, data5, pokeURL) {
    $("#Stats").append(pokeName + " =<br>");
    for (var i = 0; i < 6; i++) {
        $("#Stats").append(data5.stats[i].stat.name + ": " +
            data5.stats[i].base_stat + "<br>")
    }
    $("#Stats").append("<hr>")
    var pokeGif = $.get("http://api.giphy.com/v1/gifs/search?q=" + pokeName + "-pokemon&api_key=" + giphyKey + "&limit=5&rating=g");
    pokeGif.done(function (data4) {
        console.log("success got data");
        $("#giphy").attr("src", data4.data[0].images.downsized_large.url)
    });
    $.get(pokeURL, function (data3) {
        $("#loadingPokemon").fadeOut(100);
        var pokeSprite = data3.sprites.front_default;
        $("#pokename").text(pokeName);
        $("#YourPokemon").attr("src", pokeSprite);
    })
}