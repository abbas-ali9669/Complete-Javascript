// In this topic we will learn about how we can learn about froEach function.
// This function is very usefull with the array
// forEach function is working like the iterator.

// Lets understand this with some of example.
// First we will do this manual method.
// Make a function which take 2 inputs (arrayItem, itemIndex)
const numbers = [4,5,7,9,3,2]

function myFunc(number, index){
    let var1 = `Item is ${number} and the index is ${index}`
    console.log(var1)
}

// for (let i=0; i<numbers.length; i++){
//     myFunc(numbers[i], i)
// }

// forEach function takes three arguments as a input.
// forEach(1:arrayItem, 2:itemIndex, 3:wholeArray)

// Now lets do this with forEach function
numbers.forEach((number, index) => {
    // console.log(
    //     `Multiply with 2 is ${number*2} and the index is ${index}`
    // )
});

// With another example.
const users = [
    {name:"Abbas", age: 21},
    {name:"Bilal", age: 19},
    {name:"Ahmad", age: 27},
    {name:"Faizan", age: 28}
]

users.forEach(function(user){
    console.log(user.name)
})

// NOTE - The functions which is defining inside the are called anonymous functions.
// We have learned about function expression and arrow functions.
// That is very usefull inside the forEach function

// For practicing
for (let number=0; number< numbers.length; number++){
    console.log(numbers[number]*2, number)
}