var charizard = {
    "attack" :"Blaze",
    "HP": 266,
    "legendary?": false,
    "types": ["Fire", "Flying"]
};
/*
we want to add:
-power
-sidekick
-race
-gender
-hideout
-arch nemesis
-what universe?
*/

function Superhero(realName, power, sidekick, race, gender, hideout, archNemisis,universe){
    this.realname= realName;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.archNemisis = archNemisis;
    this.universe = universe

    this.talk = function(){
        console.log("Hi my name is " + this.realname)
    }
};

var superman= new Superhero("Clark Kent", "Heat vision", false, 
                            "Kryptonian", "Male", "Fortress of Solitutude",
                            "Lex Luther", "DC")

function Pizza(sauce, cheese, toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size
}

var oscarPizza = new Pizza("Tomato sauce", "mozzerella", ["pineapples","ham", "bacon"], "XXL")