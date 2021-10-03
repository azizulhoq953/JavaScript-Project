// var first= document.getElementById("my")
// first.innerHTML = "My Name Is Azizul"+ " My Dream Creator Of ";

// document.getElementById("hobby").innerHTML="Whole Country";


//document.querySelector(".my").innerHTML="First Changed Query";

// document.querySelector("a").innerHTML="Logo";
// document.querySelector("li a").innerHTML="study";
// document.querySelector(".my-div a").innerHTML="Details";

//onclick proparty
// function myMessage(){
//  document.querySelector("#paraid").innerHTML="This is test";
// }
// var test = document.querySelector(".paraid2");
// function para1(){
//     var test = document.querySelector(".paraid2");
//     test.innerHTML="Hey What Is Your Name.?";
//     test.innerHTML="Hey Man How Are You.?";
//}

// //js onclick img property set
// var myVar = document.querySelector(".myimg");
// function myPicture1(){
//     myVar.src="img/azizur.jpg"
   
// }

// function myPicture2(){
//     myVar.src="img/my.jpg";
    
  
// }

var creat=document.createElement("h2");

var text=document.createTextNode("My Simple Text Create by js");

creat.appendChild(text);
var mydiv=document.querySelector(".heading");
mydiv.appendChild(creat);

var remove=document.getElementsByTagName("h1")[1];

mydiv.removeChild(remove);



