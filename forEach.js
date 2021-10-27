//study For Goole ForEach Map Filter Details


//using filter working is new array condition waise
var element=[10,50,6,7,3,60,77];

var NewNumbers=element.filter(function(x){
return x>10;

})
console.log(NewNumbers);

/*
//using map
var element=[10,50,60,77];

var numbers=element.map(function(x){
return x*x;

})
console.log(numbers);*/

/*
//for each simple using
var numbers=[10,50,60,77];

numbers.forEach(function(x,index,arr){
arr[index]=x+5;

})
console.log(numbers);
*/

//squreNumber Using For Each
// var numbers=[10,33,56,70];

// var squreNumber=[];

// numbers.forEach(function(x){
//     squreNumber.push(x*x)
// })
// console.log(squreNumber);


// var numbers=[10,30,50,66]



// numbers.forEach(MyFunction)

// function MyFunction(x){
//     console.log(x)
// }