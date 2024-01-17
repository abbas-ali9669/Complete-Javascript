// In this topic we will learn about the most imprtant topic called fetch.
// This topic is similar that we have learned previously "xhr".
// But fetch is new modern of doing the same thing with less complexity.
const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    // The fetch function will return the promise.
    .then((response)=>{
        // Controlling the error handling.
        if (response.ok){
            return response.json();
            // but here is a little difference retrieve response. Now here it will return promise.
        }
        else {
            // Now the catch block will be executed.
            throw new Error("Invalid API")
        }
    })
    .then(data=>{
        console.log(data);
    })
    // But here if the error is related to the internet connection, then the catch will be executed.
    .catch((error)=>{
        console.log(error,"Something went wrong")
    })