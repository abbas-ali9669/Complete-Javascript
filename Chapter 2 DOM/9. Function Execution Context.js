// In this topic we will learn abou how we can understand the concept of funciton execution context.
// We will analyze the following code, and see how the FEC works.

let foo = "foo";
console.log(foo);

function getFullName(firstName, lastName){
    console.log(arguments);
        // Inside arguments, there is an array like object. Means, we can do the indexing and it has the length
    let var1 = "Functional Variable";
    console.log(var1);
    let fullName = firstName +" "+ lastName;
    return fullName
}

const personName = getFullName("Abbas", "Ali");
console.log(personName);

// Now lets analyze the following program.
// We will just start from GEC.

// 1. Creational Phase
    // Line 1. window: {}
    // Line 2. this: window
    // Line 3. foo: unintialized
    // Line 4. personName: unintialized

// 2. Execution Phase (Console)
    // 1. foo
    // 2. Now here the funciton execution context start.
        // From here the program into the function.
        // And here it will start s function execution context.
        // It also has two phases same as global execution context.
        
        // Function Execution Context (FEC).
        // 1. Creational Phase
        // 2. Execution Phase

        // 1. Creational Phase
            // Line 1. argument(Inside the argument, there is array like object inside (Passed Arguments))
            // firstName: "Abbas"
            // lastName: "Ali"
            // Line 2. var1: uninitialized
            // Line 3. fullName: uninitialized
        
        // 2. Execution Phase (Console)
            // 1. [Array like object (Passed Arguments)]
            // 2. Functional Variable
            // 3. return "Abbas Ali" into personName variable
            // And from here the functional execution terminates and jump to the global execution context. And will popout from stack.
    // Abbas Ali

// Final Ouput
// 1. foo
// 2. [Array like object (Passed Arguments)]
// 3. Functional Variable
// 4. Abbas Ali
