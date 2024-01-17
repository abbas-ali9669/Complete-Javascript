// In this topic we will learn about async await in javascript.
// By using async await in javascript we can minimize our code by working asynchronously.

// Old method.
const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(res => {
//         if (!res.ok){
//             throw new Error("Something went wrong.");
//         } else {
//             return res.json();
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// NOTE - This all the processing will be running asynchronously
console.log("Script Start");

// Now we can do this work using async await.
// async - async will return the promise.
async function getPosts(){
    // await - await keyword will wait for the promise until it resolves or rejects
    const response = await fetch(URL);
    // For error handling
    if (!response.ok){
        throw new Error("Something went wrong");
    }
    // It will return promise. So, we can again apply await.
    const data = await response.json();
    return data
    // NOTE - We can use await multiple time in one function.
}

// So, it will return the promise and we can again apply .then method.
getPosts()
    .then(data => console.log(data))
    .catch(error => console.log(error))


// How to use async with arrow function and fucntion expression.
// const arrowFunc = async ()=>{
//     console.log("Hello World")
// }

// arrowFunc()

console.log("Script End");