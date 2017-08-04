var myNumbers = [1,3,7,8,34,2,8,9,5,8];
function addArray(){
    var sum = myNumbers[myNumbers.length-1] + myNumbers[myNumbers.length-2]+myNumbers[myNumbers.length-3]+ myNumbers[myNumbers.length-4] +
              myNumbers[myNumbers.length-5] + myNumbers[myNumbers.length - 6] +myNumbers[myNumbers.length-7]+ myNumbers[myNumbers.length-8]
              +myNumbers[myNumbers.length-9]          
     console.log(sum)
}
addArray();

function addArray2(){
    for(i=0;i<=myNumbers.length;i++){
            var sum = i + i-1
    }
  
}
addArray2()