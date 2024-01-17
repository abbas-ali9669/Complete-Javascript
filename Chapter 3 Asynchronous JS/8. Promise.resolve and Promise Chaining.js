// IN this topic we will learn about how we can leanrn the promise.resolve and promise chaining.

// Promise.resolve()
const myPromise = Promise.resolve(5)
myPromise.then((value)=>{
    console.log(value);
})
// Or
// Promise.resolve(5).then((value)=>{
//     console.log(value);
// })

// Important Note - then() method always return a promise.
// But what is the advantages of returning a promise ?
// We can create a chain from it.

// Lets understand with an example.
function myPromise2(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

myPromise2()
    .then((value)=>{
        console.log(value);
        // Now lets add something in the value.
        value += "bar"
        // Lets return the value.
        return value

        // Now here the value is not returning, the whole promise is returning.
        // And we can again apply the .then() method on it.

        // Here whats happening here (BTS).
        // return Promise.resolve(value)
    })
    // Therefore we can again use .then() method. On the other value like string etc we cannot aply .then() method on it.
    .then((value)=>{
        console.log(value)
        // Now here again adding something in the value
        value += "baaz";
        // Its returning a whole promise
        // You can see below
        // return value
        return Promise.resolve(value)   // Internaly how it returns

        // But what if we do not return it "the value"
        // Then it will consider as undefined.
        // return Promise.resolve(undefined)
        // retunrning is very important.
    })
    .then((value)=>{
        console.log(value)
    })

// Appliying .then() method on the string just for example.
// "Abbas".then((x)=>{
//     console.log(x)
// })  

// Error will occur.