// In this topic we will analyze the function the function and understand the concept of closures.

// Example.

function printFullName (firstName, lastName){
    function printName (){
        console.log(firstName, lastName);
    }
    return printName
}

const fname = printFullName("Abbas", "Ali");
fname()

// We will start from GEC.
// And pushed into the call stack
// 1. Creational Phase
    // Line 1. window: {}
    // Line 2. this: window
    // Line 3. A function
    // Line 4. fname: uninitialized

// 2. Execution Phase.
    // Line 1. A function that is defined.
    // Line 2. call the function "printFullName".
    
    // Now from here the function execution context (FEC) starts.
    // And pushed into the call stack
    // 1. Creaational Phase
        // Line 1. Arguments: [Array like object]
        // Line 2. firstNmae: "Abbas"
        // Line 3. lastName: "Ali"
        // Line 4. ->(Funciton)->

    // 2. Execution Phase
        // Line 1. ->(Funciton)->
        // Line 2. return function

        // >>>> Now here the crucial part starts. If we think. if this funciton return. then, how this function named "printName" print the arguments, if this function return. 
        // Now remember, when this function returns this will carry all the required argument which are used in that function means, important argument (In our case firstName and lastName) are the reuired argument for that function. So iside the closure these argument will return as well with the function. So, this is called closure <<<<

        // So return to the GEC.
        // And popout from the call stack

    // Line 3. ans: "Abbas Ali"
    // Line 4. Call the ans 

    // So from here there is another FEC starts for the function named "printName"
    // Pushed into the call stack

    // 1. Creational Phase
        // Line 1. Arguments: [Array like object]

    // 2. Execution Phase
        // Line 1. Print the "firstName" and "lastName"
        // So, how this function will print these argument ? there is no variable in the local memory of this function.
        // So, this function will print the arguments from its closure, that the function has carried out while returning.
        // So it will print.
        // Popout from the call stack

// Output
// Abbas Ali