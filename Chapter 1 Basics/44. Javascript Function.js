// In this topic we will leanr about how we can make our own function using javascript.
// This is the very importatnt topic of the javascript.
// Function are like the servent, they will whatever you want.
// We will see the different examples of the function.

// 1. Print something on the console using function.

// For decaring the function we use "function" keyword. then the name of the function
function printSomething(){
    console.log("Happy Birthday to youuu...")
}

// Now calling the funciton.
// NOTE - If you are printing something inside the function, then you don;t have to print hte function while calling. Or, If you are retruning something inside the function, then you have to print the function while calling.
printSomething();

// 2. Addition of Numebrs.
function addition(num1, num2){   // These (num1, num2) are parameters.
    return num1 + num2
}

const numbers = addition(2, 2)   // These are arguments.
console.log(numbers)

console.log(4 + undefined + undefined)   // This will declare as NaN (Not a Number).

// 3. Odd/Even Numbers filter.
function isEven(num){
    return num%2 === 0;
}
const oddEvenNum = 3;
console.log(isEven(oddEvenNum))

// Printing the first character of string.
function firstChar(str){
    return str[0];
}

const char = "zbc";
console.log(firstChar(char));


// 4. Now in this there will two parameter will enter. one is the array, and the second one is the target. If the target is found in the array then function will print the index of that target else -1

function findTraget(array, target){
    for (let i=0; i<array.length; i++){
        if (array[i] === target){
            return i
        }
    }
    return -1
    // This is the shortcut for writing an else statement in the function.
}

// This function will work with both string and integers
const pack = ["xyz", "abc", "xxx"]
console.log(findTraget(pack, "abc"))



// For Understanding of NaN (Not a Number).
console.log("Understanding NaN")

function addition2(num1, num2){
    return num1 + num2
}

console.log(addition2(2))   // This will print NaN

// If the funciton requirement is two arguments, and we pass it to the one arguments, then the function will declare NaN. because undefined + undefined = NaN.
console.log(undefined + undefined)
console.log(undefined + undefined + undefined)