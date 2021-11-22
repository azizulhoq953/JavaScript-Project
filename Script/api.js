//event - onload(),onerror(),property,response,responseType,responseURL,status,statusText,
//function - open(), send(), setRequestHeader()


const makeRequest = (method,url) =>{
    const xhr = new  XMLHttpRequest();
    xhr.open(method,url); //method request GET

    xhr.onload=()=>{
        let data = xhr.response;
        console.log(data);
    
}

    xhr.send();
}
const getData=()=>{

    makeRequest('GET','https://jsonplaceholder.typicode.com/posts/1')
    
    }

getData(); 