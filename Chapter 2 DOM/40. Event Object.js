// In this object we will learn about how we can learn the concept of event object.
// Event object is an object, which is given by the browser. In which there are multiple properties are related to the events. 

const btn = document.querySelector("#one");
const allBtn = document.querySelectorAll(".myButton button");
// console.log(allBtn)

// JS Engine --> Line by line code execution
// Browser --> JS Engine + Extra Features + WebAPI's

// When the event listener applied on the element.
// Whenever the browser get know that the user has performed an event.
// Which we are doing/listening.
// Then the browser does two things.

// 1. Pass the call back function to the JS Engine.
// 2. And give the extra information about which event is performed, In the form of JS object.
// Then how we can get this object from callback. ?
// We have to give one parameter to the call back.

// btn.addEventListener("click", (event)=>{
//     console.log(event);
// })


for (let button of allBtn){
    // Here we have to pass the parameter
    button.addEventListener("click", (event)=>{
        // The event is the object which is given by the browser, in which there is an information about the event.
        // console.log(event)

        // In the event object, there is two most important properties. Which is "1. currentTarget" and "2. target".

        // 1. target - Which elements triggers the events.
        // 2. currentTarget - Which element we have atttached the event listener.
        console.log(event.target)
        console.log(event.currentTarget)
    })
}