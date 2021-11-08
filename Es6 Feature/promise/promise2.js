
//Asynchronus function
console.log('Welcome');
const taskOne = ()=>{
    return new Promise((resolve, reject) =>{
        //reject('Hey Task one is not completed:')
        resolve('Hey task one is completed');
    })
}

const taskTwo = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Hey Task two is completed:')
        },2000)
       
    })
}

const taskThree = ()=>{
    return new Promise((resolve, reject) =>{
        //resolve('Hey Task Three is completed:')
        reject('Hey Task Three is not completed:')
    })
}
const taskFour = ()=>{
    return new Promise((resolve, reject) =>{
        resolve('Hey Task Four is completed:')
    })
};

taskOne()
.then((res)=>console.log(res)),

taskTwo()
.then((res)=>console.log(res))

taskThree()
.then((res)=>console.log(res))


taskFour()
.then((res)=>console.log(res))

.catch((err)=>console.log(err));


console.log('bey');