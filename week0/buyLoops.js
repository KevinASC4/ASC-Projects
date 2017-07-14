// no argument
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 

var CurrentMoney = 1000
var userItems =[]


//sword costs $500
//food costs $100

while (CurrentMoney >= 100) {
    console.log("You currently have $" + CurrentMoney + " and a dagger. ");
    var choice = prompt("Do you want a sword, or do you want food?");
    if(choice== "sword"){
        if(CurrentMoney>=500){
            CurrentMoney = CurrentMoney - 500;
            userItems.push("sword");
        }else{
            console.log("Sorry Broke Boy.");
        }
    }else if(choice == "food"){
    CurrentMoney= CurrentMoney - 100;
    userItems.push("food");
    }else{
        console.log("We dont have that in stock.");
    }
}

console.log("Watch out for that frost troll! Best of luck on your adventure!");
var seeInventory= prompt("Would you like to see your Inventory? (y,n)");
if (seeInventory == "y"){
    console.log("Your inventory is " + userItems);
    console.log("Have a great day!!")
}
if (seeInventory == "n"){
    console.log("K Bye")
}
