// In this topic we will learn about how we can make a method using Object.

// Q - What is methods ?
// A - Function inside an Object.

// This Keyword.
// This keyword is the object inside itself. (this keyword is the object)

// How does this works, lets understand this with the help of example.
// Example 1.
const person = {
    firstName: "Abbas",
    age: 18,
    about: function (){
        // console.log(`Name is Abbas and Age is 18`);

        // NOTE - This is the hard code, the properties are fixed in the function, In anycase the properties can be changed inside the object. We have to code like that, the function execution executes smoothly check each property at every time.
        // Therefore, we have to use "this" keyword.

        console.log(`Name is ${this.firstName}, and the age is ${this.age}.`)
    }
}
// Now this is the method(function inside the object).
// person.about();

// Example 2.
function personalInfo(){
    console.log(`Name is ${this.name}, and the age is ${this.age}.`)
}

const person1 = {
    name: "Abbas Ali",
    age: 21,
    address: "Shinkairi",
    about: personalInfo
};
const person2 = {
    name: "Ali Khan",
    age: 22,
    about: personalInfo
};
const person3 = {
    name: "Usama Khan",
    age: 24,
    about: personalInfo
};

// Now the defined function will work for all the object, because we assigned our function inside the object.
person1.about();
person2.about();
person3.about();