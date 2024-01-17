// In this topic we will learn about how we can make an arrow function using javascript.
// This is third technique of declaring a function in javascript, called arrow function.
// This arrow function is similar as the function expression.

// First we will see the function expression, then will see the arrow function.

// 1. With function Expression
// const printSomething = function(){
//     console.log("Happy Birthday to youuu...")
// }

// with Arrow function.
const printSomething = () => {
    console.log("Happy Birthday to youuu...");
}
printSomething()

// 2. With function Expression
// const addition = function(num1, num2){
//     return num1 + num2;
// }

// With Arrow Function
const addition = (num1, num2) => {
    return num1 + num2;
}

console.log(addition(2,2));

// 3. With function Expression
// const isEven = function(num){
//     return num%2 === 0;
// }

// With Arrow Function
const isEven = (num) => {
    return num%2 === 0;
}

console.log(isEven(4));

// 4. With function Expression
// const firstChar = function(str){
//     return str[0];
// }

// With Arrow Function
const firstChar = (str) => {
    return str[0];
}
console.log(firstChar("Abbas"))

// 4. With function Expression
// const findTarget = function(array, target){
//     for (let i=0; i<array.length; i++){
//         if (array[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// With Arrow Function
const findTarget = (array, target) => {
    for (let i=0; i<array.length; i++){
        if (array[i] === target){
            return i;
        };
    }
    return -1;
}
const array = [1,2,4,5,6,8];
console.log(findTarget(array, 2));


// Some of the trick/important concepts about arrow function.
// 1. If you have only one parameter, then you don't need to put the bracket arround the parameter, but its your choice you can and you can't. But if you have zero and two or more than two parameters, then you have to put the brackets arround your parameters.

const putBracket = num => {
    console.log(num);
}
putBracket(8);


// 2. If you have a fucntion, which is returning only one line of code, then you can write your function only in one line.

const lastChar = str => str[str.length-1];

console.log(lastChar("Abbas"))