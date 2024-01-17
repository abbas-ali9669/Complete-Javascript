// In this topic we will learn about how we can know about iterable and the array like object.

// 1. Iterables.
// Iterables are those where we can apply for of loop.
// e-g: String and Array are iterables.

// Example
const firstName = 'Abbas';
for (let name of firstName){
    // console.log(name)
}

const items = ["item1", "Item2", "Item3"];
for (let item of items){
    console.log(item)
}

// Q - But can we apply for of loop on the object
// A - No, Objects are not iterable.

const users = {name: "Abbas", age: 21};
// for(let user of users){    // Error
//     // console.log(user)
// }


// 2. Array like Object.
console.log("Array like Object")
// Which has the property of length.
// And which we can access by the index no.
// e-g String, Array.
// Object literal is not.

// Example
const items2 = ["Item1", "Item2", "Item3"];
console.log("Length of Array is", items2.length)
console.log(items2[2]);

const string = "Abbas";
console.log("Length of String is", string.length)
console.log(string[2])

// Q - How to get the length of keys in the object.
// A - We will using the constructor called Object and its function called keys(), and at the end length property. To get the length of keys inside the object.
console.log(Object.keys(users).length)