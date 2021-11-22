//event - onload(),onerror(),property,response,responseType,responseURL,status,statusText,
//function - open(), send(), setRequestHeader()


const makeRequest = (method,url,data) =>{
    const xhr = new  XMLHttpRequest();
    xhr.open(method,url); //method request GET

    xhr.setRequestHeader('Content-Type','application/json');

    xhr.onload=()=>{
        let data = xhr.response;
        console.log(data);
    
}

    xhr.send(JSON.stringify(data));
}
const getData=()=>{

    makeRequest('GET','https://jsonplaceholder.typicode.com/posts/1')
    
    }

    const sendData=()=>{

        makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        
        }
//getData(); 
sendData()