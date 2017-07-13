var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function randLetter(){
    var randomLetter = Math.floor(Math.random() *alphabet.length);
    return(alphabet[randomLetter])
};

var randomLetter = Math.floor(Math.random() *alphabet.length);

 function randNumWord(){
    var randomNum= Math.floor(Math.random()*Math.random()+Math.random()*10 + 6);
    var randomWord = ((randLetter()+randLetter())+randomNum);
    return(randomWord)};



