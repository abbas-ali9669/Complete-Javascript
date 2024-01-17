// In this topic we will learn about how we can understand what is happening behind the scene of execution. 
// How the JS Engine and the browser works together.

console.log("Script Start !!!!");
const allButton = document.querySelectorAll(".myButton button");

allButton.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        // And now lets add a delay while triggering the event
        let total = 0
        for(let i=0; i<=100000000; i++){
            total += i;
        }
        console.log(event.currentTarget.textContent);
        console.log(total)
    });
});

let outerVar = 0
for (let i=0; i<=100000000; i++){
    outerVar += i
}

console.log(outerVar)
console.log("Script End !!!!!")

// Now lets understand what is hapenning behind the scene. (theory)
// Browser has two thing
// The JS Engine and the WebAPI's
// And the JS Engine uses this API's
// The JS Engine are different on other web browsers.
// Chrome - V8
// Firefox - Spider Monkey
// Every Engine has its own specs, features.
// But the Javascript implementation is 99.9% same on every Engine.


// Now lets understnd our code.

// 1. The JS Engine.
    // What is inside the JS Enigne ?
    // In our previous lectures we have under very briefly whats inside the JS enigine i-e Call Stack, GEC, FEC etc.
    
    // -> Stack
        // GEC - Line by line code Execution.
        // Nodelist
        // Button 1
        // Button 2
        // Button 3
    
    // But the JS give Nodelist of button to the browser. The browser will handle this when the button will get clicked. And the browser will give the call back fucntion to the JS (Which is defined inside the eventListener). Then the browser will handle this through all of their API's. Then the browser will check whether the user will click on the button or not. The JS gives all the button[Nodelist] to the browser.

    // And when the use will click all the button at the same time. Then the callback function is added into the queue, until the next process done in the call stack. If it will not added into the queue, then the all function/callback will be added to the callstack for processing and get mix and will not able to understandable.

    // -> Queue
        // Button 1, <- Button 2, <- Button 3.
    
    // Now when this button will added to the call stack for processing ?
    // When the next process will get finished then the button callback function will get execute. But how it get know the process is finished in the call stack or not. There is an program called "Event Loop". The Event Loop will check whether the call stack is ready to execute this button call back function or not.

    // In our case the stack is not ready for executing the button callback. Because there is an execution started of the second for loop(outerVar) and console line. Once that finished then the button callback execution will get start (Line 19 to 25).

    // Then the GEC will be popout from callstack.
    // Then the Event Loop will check if the call stack is ready to execute the button call back. (In our case the callstack is empty now). Then the EventLoop will remove the callback from Queue. And added to call stack for execution, once the execution is done then it will be removed from callstack and ready for next. And so on the process will be executes.

    // Now the "button 1" is added into the call stack 
        // (Values Printed)

// 2. WEB API's
    // [Button 1, Button 2, Button 3]

// Console.
// 1. Script Start !!!!
// 2. outerVAR value will be print.
// 3. Script End !!!!!
// Now you can execute further button call back
// 4. My Button One
// 5. 5000000050000000
// 6. My Button Two
// 7. 5000000050000000
// 8. My Button Three
// 9. 5000000050000000