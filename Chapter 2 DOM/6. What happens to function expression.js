// In this topic we will learn about how we can learn about the working of function expression in case of var.

// Funciton Expression.
console.log(myFunc)

var myFunc = function (){
    console.log("This my function");
}

console.log(myFunc);


// Now, what would be the expected output of this function ?
// As we seen before there are two steps of javascript cde executing.
// One is the Compilation
// And the second one is the Code execution.
// Now lets analyze this function, and see the output of this function.

// We will see just Global execution context part.
// Phase 1. Creational Phase / Global Memory.
    // window and this value are sets in the memory.
    // And our value of varible which is declare with var is set in the memory.
    // In our case we are invoking our function before declaration.
    // So, the value of the this line will be sets to "undefined".
    // Then after this, our function is declared with the help of var.
    // And in the end the variable will set to the function.

// Phase 2. Code Execution Phase.
    // 1. undefined
    // 2. -(The function will print as it is (Because we are not calling our function just printing))->