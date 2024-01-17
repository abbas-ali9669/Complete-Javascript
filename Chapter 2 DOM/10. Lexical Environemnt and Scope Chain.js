// In this topic we will learn about how we can learn and understand the concept of lexical encironnment and scope chain.

// Let understand with the example, thet we have done alot of time back

const lastName = "Ali";

const personName = function(){
    const firstName = "Abbas";
    console.log(firstName);
    console.log(lastName);
}

personName();

// Now lets analyze this code
// We will start analyzing this code from GEC

// Global Execution Context GEC.
// There are two steps of GEC
// GEC pushed into the stack

// 1. Crational Phase (Global Memory)
    // window: {}
    // this: window
    // Line 1. lastName: uninitialized
    // Line 2. personName: uninitialized
    // Line 3. Call the function.

// 2. Execution Phase
    // Line 1. lastName: "Ali"
    // Line 2. The Function
    // Line 3. Execute the function.
        // Now here the function will start executing.
        // From here the Function Execution Context (FEC) start inside the GEC.
        // Now, FEC has there own two phases.
        // Fec pushed into the stack

        // 1. Creational Phase (Local Memory)
            // Arguents: [Array like object]
            // Line 1. firstName: uninitialized

        // 2. Execution Phase
            // Line 1. firstName: "Abbas"
            // Line 2. Print the firstName (Abbas)
            // Line 3. Print the lastName
                // Now here the crucial part starts.
                // Because in the local memory there is no variable called lastName
                // Then, the function will jump into the GEC and start searching inside its parent until the GEC arrives and start searching the variable till the GEC finishes

                // How did they works ?
                // If the function could not find te varible inside it, then the javascript will start seeaching the funciton lexical environment. Means, where is this specific function defined. And if, the javascript did found the the varible inside lexical environment of the function then it will start searching its super parent until the global scope reaches. If the javascript found the variable insde the global scope, it will print. Otherwise, the error will occur.

                // NOTE - See in the previous lecture named "Lexical Scope".
// Output
// Abbas
// Ali