// In this topic we will learn about how we can learn and undersand the closure breifly. The last exmaple.

function func (){
    let counter = 0;
    return function(){
        if (counter < 1){
            console.log("Function Invoked")
            counter++
        }
        else{
            console.log("Function Already Invoked");
        };
    };
    
};

const myFunc = func();
myFunc();
myFunc();
myFunc();

// Now lets analyze this code.
// We will start from GEC
// Pushed into the call stack

// 1. Cretional Phase.
    // Line 1. A function
    // Line 2. myFunc: uninitialized

// 2. Execution Phase
    // Line 1. Call he function

    // Now here the FEC starts and it has also two phases.
    // Pushed into the call stack

    // 1. Creatonal Phase
        // Arguments: [Array Like Object]
        // Line 1. counter: uninitialized
        // Line 2. Returning a function

    // 2. Execution Phase
        // Line 1. counter 0
        // Line 2. myFunc: Funciton returned with the carry of counter variable.

        // Process Finished 
        // Jump into the GEC and popout from call stack.

    // Line 2. Call myFunc
        // Now again the FEC starts
        // Pushed into the call stack
        
        // 1. Creational Phase
            // Line 1. Arguments: [Array Like Object]
            // Line 2. If condition
            // Line 3. Else Condition
        // 2. Execution Context
            // Line 1. Check if the counter value is less than 1. then print the if statement. And increment the counter by 1, which they have carried from its lexical scope while returning.
            // Line 2. Else print the else block.
            
            // Process finished
            // Popout from call stack
    
    // Line 3. Again call the myFunc()
        // Now here the crucial part starts, The same FEC present inside the memory, and again it will be called the funciton FEC. But, this time the counter value is not less than 1. So, the else block will execute.     