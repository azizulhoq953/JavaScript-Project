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
//sendData()

const updateData=()=>{

    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    });
    
    }
    //updateData();
    const updateSingleData=()=>{

        makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
           
            title: 'Chaing to single line',
            
        });
        
        }
        //updateSingleData();

        const deleteData=()=>{

            makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1',{
               
                title: 'Chaing to single line',
                
            });
            
            }
            deleteData();