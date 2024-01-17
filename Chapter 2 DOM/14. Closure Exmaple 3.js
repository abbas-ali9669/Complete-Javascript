// In this topic we will learn about closure another example.

function calc (square){
    return function (value){
        console.log(value**square)
    }   
}

const square1 = calc(2);
const ans1 = square1(2) 
ans1

const cube = calc(3)
const ans2 = cube(3)
ans2

// A short form to write this function.
const func = power => number => number ** power;
const var1 = func(2)
const var2 = var1(3)
console.log(var2)

// Now lets analyze this code.
// We will analyze just for line no 11.
// Now lets analyze this code from GEC.
// Pushed into the call stack

// 1. Creational Phase.
    // Line 1. window: {}
    // Line 2. this: window
    // Line 3. ->(funciton)->
    // Line 4. square1: uninitiallzed
    // Line 5. ans1: uninitiallzed

// 2. Execution Phase.
    // Line 1. Call the function "calc(2)"

    // Now here FEC starts
    // Pushed insode the call stack
    // 1. Creational Phase.
        // Line 1. Arguments: [Array like object]
        // Line 2. square: argument value (2)
        // Line 3. returning a function
        // NOTE - That function will carry a number along wiht him

    // 2. Execution Phase.
        // Line 1. square1: retuened function
        // And jump into the GEC. 
        // And popped into the call stack

    // Line 2. Call the square1(2)
        // Now here FEC starts
        // Pushed insode the call stack

        // 1. Creational Phase.
            // Line 1. Arguments: [Array like object]
            // Line 2. value: argument value (2)

        // 2. Execution Phase.
            // print the calculation on the console
            // The value it has inside the parameter. And the square is in the closure of the function. 
            // so that will calculate the values and give us an output.
            
// Output
// 4