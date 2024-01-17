// In this topic we will learn about how we can learn and understand the concept of Global Execution Context.

// Global Execution Context.
    // The first Execution context created by JS environment.

// There are two phases of Global Execution Context.
// 1. Creation Phase / Global Memory.
// 2. Code Execution Phase.

// 1. Creational Phase / Global Memory.
    // When the creational phases creates, there are some property sets in the global memory i-e this, window/global object, and variable before executing the single line.

    // In our case (See the code below).
    // 1. this.
        // In the case of browser this value will be bind with the global object / window (The browser provides wondow object). this value will be different on the different platforms, i-e nodejs etc.
        // this : window {}
    // 2. Variable (var).
        // In the case of var the variable will initialized as undefined according to our code. But, in the case of let and const, there will be different output.
        // var firstname : undefined
    // 3. window / Global Object.
        // The window object and also called as global object, is an global object containing multiple key value pairs
        // window : {key: value}


// 2. Code Execution Phase
    // Now in here we will execute our previous code, and will compare with to the exact output.
    // NOTE - The javascript is a sychrnous programming language. Means, the next line will not be executed until the first line executes completely. Means the JS is a single threaded programming language. The features of Asynchronous programming provided by the browser.
    // Now lets execute our code.
        
    console.log(this);
    console.log(window);
    console.log(firstName);
    var firstName = "Abbas";
    console.log(firstName);
    // Output
    // Line 1. window / global object.
    // Line 2. window / global object.
    // Line 3. undefined (In the case of var).
    // Line 4. firstName = "Abbas".
    // Line 5. Abbas.