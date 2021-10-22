// const person= {
//     firstname: 'azizul',
//     lastName:'Hoq',
//     Id:567089,
//     fullName: function(){
//         return this.firstname + " " + this.lastName+" "+ this.Id;
//     }
// }
// console.log(person)
// console.log(person.fullName())

 //consize
// const person= {
//     firstname: 'azizul',
//     lastName:'Hoq',
//     Id:567089,
//     fullName(){
//         return this.firstname + " " + this.lastName+" "+ this.Id;
//     }
// }
// console.log(person)
// console.log(person.fullName())

//consize 2nd  way in space use function
const person= {
    firstname: 'azizul',
    lastName:'Hoq',
    Id:567089,
    'full name'(){
        return this.firstname + " " + this.lastName+" "+ this.Id;
    }
}
//console.log(person)
console.log(person['full name']())