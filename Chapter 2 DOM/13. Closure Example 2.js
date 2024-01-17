// In this topic we will learn about closure with an different example.

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a, b, c);
    }
}

const ans = hello("args");
ans()

// Now lets analyze this code from GEC.
// Pushed into the call stack

// 1. Creational Phase.
    // Line 1. window: {}
    // Line 2. this: window
    // Line 3. ->(funciton)->
    // Line 4. uninitialized

// 2. Execution Phase.
    // Line 1. Call the function "hello()"

    // Now here FEC starts
    // Pushed insode the call stack
    // 1. Creational Phase.
        // Line 1. Arguments: [Array like object]
        // Line 2. x: argument value ("args")
        // Line 3. a: uninitialized
        // Line 4. b: uninitialized

    // 2. Execution Phase.
        // a: varA
        // b: varB
        // return a function(anonymous)
        // NOTE - This function will return along with the arguments and the variables which are ised inside that function.(a, b, x)

        // And jump into the GEC. 
        // And popped into the call stack
    
    // Line 2. ans: a returned function
    // Line 3. Call the ans()
    // Now from here the new FEC starts 
    // AND pushed into the call stack.

    // 1. Creational Phase.
        // Line 1: Arguments
    
    // Execution Phase.
        // Print the varible (a, b, x)
        // The this function wlll print all the variable which they have carried our while returning. (a, b, x)
        // And popout from the call stack.
        // And jump outfrom call stack
    // And the GEC will also popout from call stack.(process finished)

// Output
// varA varB args