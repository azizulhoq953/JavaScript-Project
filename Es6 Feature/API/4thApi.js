// console.log(window);

const request = new XMLHttpRequest();

request.open("GET","https://jsonplaceholder.typicode.com/todos/1");

request.send();
request.onload=()=>{
    if(request.status === 200){
        console.log(JSON.parse(request.response));
    } else {
        console.log(request);
        console.log(`error ${request.status}`);
    }

}