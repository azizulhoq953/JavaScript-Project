
//Guiess Number

// var NumOfWin=0;
// var NumOfLoss=0;

// for(i=1;i<=5;i++){

//     var guessNumber=parseInt(prompt("Enter Any Number Of 1 to 5:"));

// var randomeNumber = Math.floor(Math.random() *5)+1;

// if(guessNumber == randomeNumber){
//     console.log("Congratulations You Have Won:"+"<br>");
//     NumOfWin ++;
// }
// else{
//     console.log("Very Sad You Have Lose randomeNumber Is:"+randomeNumber);
//    NumOfLoss ++;
// }


// }

// console.log("Total Number Of Win:"+NumOfWin+"<br>");
// console.log("Total Number Of Loss:"+NumOfLoss+"<br>");



// setTimeout(()=>{
//     console.log("Hello Everyone");

// },2000);
// setTimeout(disply, 2000);

// function disply(){
//     console.log("Disply Function");
// }

// setInterval(looping, 2000);

// function looping(){
// console.log("Hey Iam Continue Print Message");
// }


const saveButton=document.querySelector('.btn-button');
const alern =document.querySelector('.message');

saveButton.addEventListener("click",saveUser);

function saveUser() {
    let count=0;
    alern.textContent=count;

    // alern.textContent= "User Registration Successful"
    // //set timeout
    // setTimeout(()=>{
    //     alern.textContent="";
    // },2000);

    setInterval(()=>{
        count++;
        alern.textContent=count;
        },2000);
}






