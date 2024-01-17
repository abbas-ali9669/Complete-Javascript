// In this topic we will learn about function expression.
// The function is just a function like we red before one lecture.
// But with the different style.

// We canot use two function with the same name, the error will occur.

// Example 1.
// The Old function.
// function printSomething(){
//     console.log("Happy Birthday to youuu...")
// }

// FunctionExpression - Storing the function inside the function.

// With function Expression.
const printSomething = function(){
    console.log("Happy Birthday to youuu...")
}
printSomething()

// Example 2.
// function addition(num1, num2){   // These (num1, num2) are parameters.
//     return num1 + num2;
// }

// With Funciton Expression.
const addition = function(num1, num2){
    return num1 + num2;
}
console.log(addition(1,2))

// Example 3.
// function isEven(num){
//     return num%2 === 0;
// }

// With Funciton Expression.
const isEven = function(num){
    return num%2 === 0;
}
console.log(isEven(4))

// Example 4.
// function firstChar(str){
//     return str[0];
// }

// With Function Expression.

const firstChar = function(str){
    return str[0];
}
console.log(firstChar("Abbas"))


// Example 5.
// function findTraget(array, target){
//     for (let i=0; i<array.length; i++){
//         if (array[i] === target){
//             return i
//         }
//     }
//     return -1
//     // This is the shortcut for writing an else statement in the function.
// }

// With Function Expression.
const findTarget = function(array, target){
    for (let i=0; i<array.length; i++){
        if (array[i] === target){
            return i
        }
    }
    return -1
}
console.log(findTarget([1,2,3,4], 4))












