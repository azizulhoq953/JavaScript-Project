const fruits = ["Banana","orange","Apple","Mango"];

console.log(fruits);
fruits.sort();
 fruits.reverse();
 
 const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return b - a}));