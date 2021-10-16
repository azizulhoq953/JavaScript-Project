

//Error Handling Js - try, catch, finally

document.querySelector("#textButton").addEventListener("click",function(){
  
    var num=document.querySelector("#input").value;
    
    try{
        if(num<8){
            throw "Input Is Low"
        } else if(num>16){
            throw "Number Is to Long"
        }
    } catch (err){
        console.log(err);
    }

     console.log(num);
})