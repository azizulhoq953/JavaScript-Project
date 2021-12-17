
// console.log(window);
//XML HTTP Request
const request = new XMLHttpRequest();

request.open("GET","https://jsonplaceholder.typicode.com/todos/1");

request.send();
request.onload=()=>{
    if(request.status === 200){
        // console.log(JSON.parse(request.response));
    } else {
        // console.log(request);
        // console.log(`error ${request.status}`);
    }

}

//fetch api

fetch('https://jsonplaceholder.typicode.com/todos/')

.then(response=>{
    // return response.json();
}).then(json=>{
    console.log(json);
})

//second Approach

async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    let data = await response.json();
    return data;
}

getUsers().then(response=>{
    console.log(response)
})