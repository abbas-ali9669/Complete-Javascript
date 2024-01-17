// In this topic we will learn setTimeout function
// But first we have to understand the concept synchronous and asynchronous programing
// The javascript is single threaded synchronous programming language.
// Means the next line will not be executed until the previous line executes completely.
//  Synchronous Programming
// console.log("Script Start");
// for (let i=0; i<=100; i++){
//     console.log("Script is Running");
// }
// console.log("Script End");

// Now here in the output you can see this runs in a sequentially. First console line then loop and then console line (In our case).
// But in the real life example it some times consuming more time. Whenever we need the data from backend or database, so its take to much time. But how we can make simultaneously ? How to use javascript as an asychronously

// We use the function "setTimeout(callback function, minimum time in miliseconds)"
// For doing this the javascript will give this to the browser and will continue to execute further code. and then this method will execute.

// console.log("Script Start");

// setTimeout(()=>{
//     console.log("Inside setTimeout");
// }, 1000);

// console.log("Script End")

// The second parameter of setTimeout is the milisecond. Means the function will start executing after the time given to the function.

// How this function works. ?
// setTimeout function is not the javascrpt function. It is the browser function, whenever the javascript reaches the setTimeout function, the javascript will pass this function to the browser and tell to the browser that give me that callback after the time which is defined inside the setTimeout function.
// Then the browser will pass the callback to the callback queue after the specific time. And then the event loop check the callstack, if the callstack is ready to process the callback queue function or not. First the javascript will executes all the further/next code, then the event loop will pass the callback queue functions into the call stack. And then the javascript will start executing that callbacks.

// The setTimeout function has also an ID.
// Which is used to terminate the function from executing. It will remove the function from callback queues.


console.log("Script Start");

const id = setTimeout(()=>{
    console.log("Inside setTimeout");
}, 0);
// No matter how much time we give to this function. This will start executes in the last.

for (let i=0; i<=100; i++){
    console.log("Inside For Loop");
}

// For terminating/cancelling the callback function we use clearTimeout(ID) function.
console.log(id)
// clearTimeout(id)

console.log("Script End")