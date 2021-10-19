//es6 Features

"use struct"

//spreed opearator
// function addNumbers(x,y,z){
//     return x+y+z;
// }
// let numbers2 = [5,6,7]
// //console.log(addNumbers(numbers[0],numbers[1],numbers[2]));
// //console.log(addNumbers(...numbers));

// // let numbers1=[4,5,6,9, ...numbers];
// // console.log(numbers1)
// let numbers3=[4,8,9]
// let numbers=[...numbers2, ...numbers3] //concate using spreed opearator
// console.log(numbers)

//concatenate object using spreed opearator
let p1={
    name:'Azizul Hoq',
    age:21,

}

let p2={
    nationality:'Bangladesh',
    occupation:'student',

}
let p={...p1, ...p2}
console.log(p);





// //Default Parameter
// function message(Text="Hello Sir This is Default Parameter:"){
//     console.log(`${Text}`);
// }
// message()
// message("I love Js ES6")

// //rest parameter 
// function sum(x,y, ...z){
//     console.log(`x=${x},y=${y} z=${z}`)
// }
// sum(10,20,30,40,66,70);