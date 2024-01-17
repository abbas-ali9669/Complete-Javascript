// In this topic we will learn about ho we can learn and work with the callback function.
// The callback function is all about passing the function inside another function

function myFunc2(name){
    console.log("Inside callback function");
    console.log(name);
}

// For understanding.
// Lets Suppose - If the function "myFunc2" need the name from the database, and the database access is written on the function "myFunc", So we have to send the name to another function from database function. For this purpose we use callback function.

function myFunc(callback){
    callback("Abbas")
    console.log("Hello World");
}

// For just practice, but this is supported by javascript
const ans = myFunc;
ans(myFunc2);

// The parameter "a" can be anything "array, string, number, object etc". But is "a" can be be a function ?