


class student{
    constructor(id,name,sesson){
        this.id=id;
        this.name=name;
        this.sesson=sesson;
    }
   
    set studentName(name){
        this.name=name;
    }
}
let s1= new student(101,"azizul",2021)
console.log(s1.id,s1.name,s1.sesson)

s1.studentName="Set Value Is you";
console.log(s1.name)
