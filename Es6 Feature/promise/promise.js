console.log("Welcome")

const promise1=new Promise((resolve, reject)=>{
    let completedPromise=false;
    if(completedPromise){
        resolve("Completed Promise1");
    }else{
        reject("not a Completed Promise1");
    }
})
//console.log(promise1.then())
promise1
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})
;