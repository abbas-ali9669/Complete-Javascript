// In this topic we will learn about some more pormitive data types of javascript

// 1. Undefined - The undefined variable are those variable where the value is not stored. Means empty variable
let firstName;
console.log(typeof firstName);
// But later on we can store the data in it
firstName = "Abbas";
console.log(firstName, typeof firstName);

// 2. null - In the javascript null means nothing.
let myString = null;
console.log(myString);
// But if you are print the type of null it will print object. Which is a bug in the javascript.
console.log(myString, typeof myString);
// We can also chnage it and store another value in it
myString = "Abbas";
console.log(myString, typeof myString);

// 3. BigInt - The bigint function is use store the big amount of numbers in it. Because there is a limit in the javascript for storing the number in javascript. for printing the limit use (Number.MAX_SAFE_INTEGER)
let myNum = BigInt(10);
let myNum2 = 20n;  // The shorthand for declaring the bigint (use n after the numbers finishes)
console.log(myNum + myNum2);
console.log(typeof myNum, myNum)
// NOTE - We cannot use (Add, Subtract etc) the bigint with the local number the error will occur
// let newNum = 12 + myNum;    // Error

// Max javascript numbers limit
console.log(`Max Number limit is --> ${Number.MAX_SAFE_INTEGER}`)
// We cannot store more than this with the local. W have to use bigint after the limit reaches.