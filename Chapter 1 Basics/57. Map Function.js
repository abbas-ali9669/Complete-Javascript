// In this topic we will learn about how we can work with onw of another iterator of an array called "map".
// The map function is very very usefull working with real world applications like REACT.JS etc

// Lets understand with this an example.
const numbers = [3,4,6,7,9];
// With normal function
function myFunc(number){
    return number * number;
    // console.log(number * number)
}

const calc = numbers.map(myFunc);
console.log(calc);


// Example 2.
const newFunc = numbers.map(function(number, index){
    return `${number} With ${number} is ${number*number} and the index is ${index}`
});
console.log(newFunc)

// The map method will make an separate array containing the array items.
// NOTE - Always use return in the function while using map function.

// Some realistic example.
const users = [
    {name:"Abbas", age: 21},
    {name:"Bilal", age: 19},
    {name:"Ahmad", age: 27},
    {name:"Faizan", age: 28}
]

const userName = users.map(user=>user.name)
console.log(userName)