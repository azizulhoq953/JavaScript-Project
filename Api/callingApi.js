
//event - onload(),onerror(),property,response,responseType,responseURL,status,statusText,
//function - open(), send(), setRequestHeader()

const getData=()=>{
    const xhr = new  XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1'); //method request GET
  
    xhr.onload=()=>{
        let data = xhr.response;
        console.log(data);
    }

    xhr.send();
}

getData();