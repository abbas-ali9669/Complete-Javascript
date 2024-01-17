// In this topic we will do some practice with global execution phases.

console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);

function myFunc(){
    console.log("This is function");
}

var firstName = "Abbas";
var lastName = "Ali";
var fullName = firstName +" "+ lastName;
console.log(fullName);

// Now lets execute this code.

// Step 1.
// Compilation.
    // In the compilation al the code will compile globally according to the JS compilation.

// Step 2.
// Code Execution.
    // All the code will execute inside the execution constext.
    // The first execution will creates, which is Global execution context.

// Global Execution Context.
    // Whats insdie the global scope ?
    // firstName
    // lastName
    // fullName
    // myFunc()

// Also two phases.
    // 1. Creatoinal Phase / Global Memory.
        // All the value will be sets according to how they relates to their environment. Befire exexuting any single line, these all the properties will store inside the global memory.

        // In our case.
        // Line 1. this will bind with window object / global object, in case of browser.
            // this = {window}
        // Line 2. window = {window}

        // Line 3. A function is declared in the global scope. 
        // NOTE - In the case of function declaration, the output will be different. And also in the case of functon expressio and arrow function output will also be different

        // Line 4. firstName: undefined
        // Line 5. lastName: undefined
        // Line 6. fullName: undefined


// TIP - The javascript all the variable inside the object in the form of key value pair, and i is also called as Environment Record.

// And the second phase is Executing phase.
    // Code Execution Phase.
    // Line 1. this:  {window object}
    // Line 2. window: {window object}
    // Line 3. The funciton will print as it is, because we are just printing the function, not calling.
    // Line 4. undefined (In case of var)
        // Later, the variable values will be changed.
        // Line 4. firstName = "Abbas"
        // Line 5. lastName = "Ali"
        // Line 6. fullName = firstName +" "+ lastName
    // Line 5. console.log(fullName): Abbas Ali
    
