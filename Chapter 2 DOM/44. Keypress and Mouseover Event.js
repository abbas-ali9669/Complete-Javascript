// In this topic we will learn about some more events like
// 1. keypress
// 2. mouseover
// 3. mouseleave

// 1. keypress
// Task - If you want the user is present in your website and if the user presses any on the keyboard, and you want to know what key the user has pressed. Then, we uses keypress event. instead of we can also apply on other element.

const body = document.body;
const btn = document.querySelector(".btn-headline");

body.addEventListener("keypress", (event)=>{
    // console.log(event);
    // For printing specifically, we can also print "key" property
    console.log(event.key)
})

// 2. mouseover
// This event is related to hovering cursor over the button or other element.
btn.addEventListener("mouseover", (event)=>{
    console.log("Mouseover Event Occurred")
})

// 3. mouseleave
// This event is related to when you move/leave your cursor from specific element.
btn.addEventListener("mouseleave", ()=>{
    console.log("Mouseleave Event Occurred");
})