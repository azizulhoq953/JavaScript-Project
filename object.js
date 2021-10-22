const person= {
    firstname: 'azizul',
    lastName:'Hoq',
    Id:567089,
    fullName: function(){
        return this.firstname + " " + this.lastName+" "+ this.Id;
    }
}
console.log(person)
console.log(person.fullName())