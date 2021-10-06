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

// //remove property
// var creat=document.createElement("h2");

// var text=document.createTextNode("My Simple Text Create by js");

// creat.appendChild(text);
// var mydiv=document.querySelector(".heading");
// mydiv.appendChild(creat);

// var remove=document.getElementsByTagName("h1")[1];

// mydiv.removeChild(remove);

// //img continous chang by click
// var photos = ["img/azizur.jpg","img/azie.jpg","img/my.jpg"];
// var imgTag =document.querySelector("img");
// var count=0;
// function next(){
//     count ++;
//     if(count>=photos.length){
//         count=0;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }

// }

// function prev(){
//     count --;
//     if(count < 0){
//         count=photos.length -1;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }


// var myvar=document.querySelectorAll("h1");
// myvar.addEventListener("mouseover",function(){


//     myvar.classList.add(".myn");

// });

for (var i=0;i<=3;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text =this.innerHTML;
        document.querySelector("h1").innerHTML = text + "is Music Ply";
       console.log(text);
       audioPlay(text);
       playAnimation(text);
        

    });
    

}

document.addEventListener("keypress", function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
});


function audioPlay(text){
    switch(text){
        case "a":
            var audio=new Audio("sounds/sound.m4a");
            audio.play();
            break;
    
            case "b":
                var audio=new Audio("sound/music1.mp3");
                audio.play();
                break;
    
                case "c":
                    var audio=new Audio("sounds/sound.m4a");
                    audio.play();
                    break;
    }
    
    function  playAnimation(text){
       var selectedButton= document.querySelector("."+text);
        selectedButton.classList.add("anim");
       
        setTimeout(function(){
            selectedButton.classList.add("anim");
        },1000);

    }

}








