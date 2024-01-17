// In this topic we will learn about how we can iterate the object.
// There are two main technique which we can use to iterate the object.
// 1. For in loop.
// 2. Object.keys()

const person = {
    name: "Abbas Ali",
    age: 21,
    gender: "Male",
    country: "Pakistan"
}

// 1. For in loop
// First we will see the for in loop.
for (let key in person){
    // The key names are stored in our key variable
    values = person[key]   // Here we cannot use dot notation, because dot notation cannot acces the variable.
    console.log(`The key is ${key} and the value is ${values}`)
}

// 2. Object.keys()
// Using this method we can acces the keys of the object. And also we can apply for of loop with this.

let objKeys =  Object.keys(person)
// We can use this mehod with the for off loop. This method will give us an array containing the name of the keys.
console.log(Array.isArray(objKeys))

// Iteration
for (let obj of objKeys){
    values = person[obj]
    console.log(`The value is ${obj} and the Value is ${values}`)
}