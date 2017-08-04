var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



function randLetter() {
    var roll = Math.floor(Math.random() * 26);
    return alphabet[roll];
}



console.log(randLetter());
console.log('\n');

function randWord() {
    var word = '';
    var roll = Math.floor(Math.random() * 6);
    for (var i = 0; i < roll; i++) {

        word = word + randLetter();
    }
    return word;
}
console.log(randWord());
console.log('\n');

function randsent() {
    var sent = '';
    var roll = Math.floor(Math.random() * 6);
    for (var i = 0; i < roll; i++) {

        sent = sent + randWord();
        sent = sent + ' ';
    }
    sent = sent + '.';
    return sent;

}
console.log(randsent());
//name,attack,health




var p1 = ["torchic", 50, 100];
var p2 = ["mudkip", 50, 100];
var p3 = ['froakie', 50, 100];
var p4 = ['totodile', 50, 100];
var roster=[p1,p2,p3,p4];

var firstPokemon =roster[Math.floor(Math.random() * 4)];
var secondPokemon =roster[Math.floor(Math.random() * 4)];



    function battle(firstPokemon, secondPokemon) {
        secondPokemon[2] = secondPokemon[2] - firstPokemon[1];
        console.log(secondPokemon[0] + " has " + secondPokemon[2] + " health");
    }

battle(firstPokemon, secondPokemon);