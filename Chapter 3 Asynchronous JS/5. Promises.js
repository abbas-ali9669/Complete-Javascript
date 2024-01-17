// In this topic we will learn about the concept of promises in js
// This is the vrey important topic in the js
// What is Promises.
// The promises is that type of value which we don't know now, But in the future we will get know the value.
// There are two steps of promises.
// 1. Produce promise.
// 2. Consume promise.

// 1. Produce Promise (Promise(Executer Function(func1, func2)))
// Lets take an exmaple of Fried Rice, We will check if we have enough material in the bucket which we can use to make fried rice.
const bucket = ["Floor", "Vegetable", "Salt", "Rice", "Water"];
// Now we need 3 material for making the fried rice (veg, rice, salt).
const makeRice = new Promise((resolve, reject) => {
    // Resolve - The resolve function will execute if our promise will be fulfilled.
    // Reject - The reject function will execute if our promise will be rejected.
    if (bucket.includes("Vegetable") && bucket.includes("Salt") && bucket.includes("Rice")) {
        resolve("Fried Rice")
    } else {
        // reject("Couldn't do it");
        reject(new Error("Couldn't do it"))
    }
})

// console.log(typeof makeRice)

setTimeout(() => {
    console.log("Inside setTimeout")
})

// Consume Promise
// How to consume promise ?
// The consuming of the promise is dependent on the two method called .then() and .catch(). 

// .then(callback) - When the promise will resolve and we can get the value from promise in .then callback function by passing extra argument.
// .catch(callback) - When the promise will reject and we can get the value from promise in .reject callback function by passing extra argument.

// But we can also use .then and pass two callbacks. The first one will work for resolve and the second one will work for reject.

// Defining two mathod in .then for resolving and rejection.
// makeRice.then((arg1)=>{
//     // The arg1 value wll come from promise resolve function
//     console.log("Lets Eat", arg1)
// }, (arg2)=>{
//     console.log("Oppsss", arg2)
// })



// Separately
makeRice.then((arg1) => {
    console.log("Let's Eat", arg1);
}).catch((arg2) => {
    console.log("Oppssss", arg2)
})

// In simple words .then method is use when the work done (resolves). And .catch method is use when the work is not done (rejects).
console.log("hello world")

// Now what is happening behind the scene.
// the promises works asynchronously
// Lets understand how.

// 1. Our bucket (Array)
// 2. promises (Object)
// 3. Consuming (Browser)
// Now here producing is the work of javascript but the consuming is the work of browser and the browser will add it in to the microtask queue. After completing the GEC in the callstack. The event loop will grab the promises from micritask queue.
// The preference/priority of microtask queue is more than the preference/priority of callback queue.
// You can see above we have defined setTimeout function. But the output of setTimeout on the console is on the last.