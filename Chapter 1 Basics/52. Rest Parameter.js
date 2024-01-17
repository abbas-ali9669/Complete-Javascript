// In this topic we will learn about how we can use the rest parameter featue of js.

// Example program no 1.
function myFunc(a,b,c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

// myFunc(1,2,3)

// Now what if i put more arguments inside this. There will be no action.
// But if you want more arguments should work. Then you have to make the last parameter rest by putting the ...name of the parameter.

// Example of rest parameter
function myFunc2(a, b, ...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is`, c)
    console.log(Array.isArray(c))
}

myFunc2(2,3,4,5.6,6,7,8,8,6,5,4)
// First and the second arguments will store into the first and the second parameter. And the rest argument will store in to the rest parameter with a type of array.

// Exercise
// Add the rest parameter values
function addAll(...numbers){
    let total = 0;
    for (let number of numbers){
        total += number
    }
    return total
}

console.log(addAll(1,2,3,4,5,6,7,8,9,10))

// My Concept - This Operator is called in python programming language is *args.