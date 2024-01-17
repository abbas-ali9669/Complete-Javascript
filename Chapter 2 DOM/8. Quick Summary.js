// In this topic we will do a quick summary of what we learnt in the previous lectures about how javascript works.

// How Javascript Works.
// There are two main phases of javascript to execute the code in javascript.
// 1. Compilation Phase.
// 2. Code Execution Phase.

// 1. Compilation Phase.
    // Early error checking
    // Determining appropriate scope for variable.
    
    // There are 3 main phases of compilation.
    // 1. Tokenizing/Lexing
    // 2. Parsing
    // 3. Execution

// 2. Execution Phase.
    // All the execution of javascript code happens in the execution context.
    // And the first execution context is global execution context.
    
    // Global Execution Context.
        // There are two phases in the global execution context.
        // The global execution context stand in the stack memory.
        // 1. Creational Phase
        // 2. Code Execution Phase

        // 1. Creational Phase
            // In this phase, Inside the gobal memory there are some of the values are sets in the global memory i-e this, window, variables.
            // Window  object provided by browser
            // this value will be bind with with window object.
            // The var will be set on undefined
            // let and const are set on the "ininitialized"
        // 2. Execution Phase
            // In this phase, The code is executes line by line.

// Tips - The javascript stores all the variable inside the object called Environment Record.
// TDZ - Stands for "Temporal Dead Zone", The time of variable between undefined to define and uninitialized to initialized called TDZ. Once the value assigned to variable, the variable will not be in the TDZ.