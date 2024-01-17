// In this topic we will learn about how can learn the concept of et and const, and see whether the let and const are hoisted or not.

// console.log(firstName);
// let firstName = "Abbas";
// console.log(firstName);

// Now lets analyze this code.
// First phase is compilation
// And the second on is execution phase

// We will analyze the second phase which is global execution context.
// In the global execution context there are also two phases.
    // 1. Creational phase
        // Wherethe following value sets in the memory.
        // window = {}
        // this = window  -> In the browser.
        // In case of var, the var value is assigned in memory as undefined.
        // But in the case of var and let, it will be assigned as "Uninitialized"
        // So, the let will be uninitialized.
        // firstName = "Uninitialized";

    // 2. Code Execution Phase
        // Error : Uncaught ReferenceError:
        // Cannot access 'firstName' before initialization

        // Because the let and the const are assigned in the memory as uninitialized.
        // Therefore, the error occurs

// Q - Are let and const are hoisted ?
// A - Yes, The let and thr const are hoisted. Because in the memory they both are assigned with uninitialized.

// What happens if we print directly fName ?
// console.log(firstName);
// Uncaught ReferenceError: firstName is not defined

// This error occur, because the variaible is not defined with anyone (var, let or const). Therefore, the error occurs. On the above, we defineed firstName later with the value of "Abbas" with let. Therefore the initializer error occurs.

// console.log(typeof firstName);