
var NumOfWin=0;
var NumOfLoss=0;

for(i=1;i<=5;i++){

    var guessNumber=parseInt(prompt("Enter Any Number Of 1 to 5:"));

var randomeNumber = Math.floor(Math.random() *5)+1;

if(guessNumber == randomeNumber){
    console.log("Congratulations You Have Won:"+"<br>");
    NumOfWin ++;
}
else{
    console.log("Very Sad You Have Lose randomeNumber Is:"+randomeNumber);
   NumOfLoss ++;
}


}

console.log("Total Number Of Win:"+NumOfWin+"<br>");
console.log("Total Number Of Loss:"+NumOfLoss+"<br>");

