// In this topic we will learn about using XHR in promise.
const URL = "https://jsonplaceholder.typicode.com/posts";

function xhrPrmoise (method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response)
            }
            else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = ()=>{
            console.log("Check internet connection");
        }
        xhr.send();
    })
}

// Now call the function
xhrPrmoise("GET", URL)
// We can also do this at once, but we are using chain for practice.
    .then((response)=>{
        const data = JSON.parse(response);
        // Now here it is returning promise
        return data;
    })
    .then((data)=>{
        const id = data[3].id
        return id;
    })
    .then((id)=>{
        const url = `${URL}/${id}`;
        return xhrPrmoise("GET", url);
    })
    .then((newResponse)=>{
        const data = JSON.parse(newResponse);
        console.log(data);
    })
    .catch((error)=>{
        console.log(error)
    })