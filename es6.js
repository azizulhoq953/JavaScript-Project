"use struct"

// //Default Parameter
// function message(Text="Hello Sir This is Default Parameter:"){
//     console.log(`${Text}`);
// }
// message()
// message("I love Js ES6")

//rest parameter 
function sum(x,y, ...z){
    console.log(`x=${x},y=${y} z=${z}`)
}
sum(10,20,30,40,66,70);