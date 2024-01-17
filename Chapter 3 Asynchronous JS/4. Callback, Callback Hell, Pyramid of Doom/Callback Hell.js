// In this topic we will learn about callback hell.
// Which means the formal method to do a specific task.

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// Now we have to complete one task
// Text     Delay     Color
// One      1s        Violet
// Two      2s        Purple
// Three    2s        Red
// Four     1s        Pink
// Five     2s        Green
// Six      3s        Blue
// Seveen   1s        Brown

// Now we have to apply these all the requirment on the headings
// 1
setTimeout(()=>{
    heading1.textContent = "One";
    heading1.style.color = "violet";
    // Now here we have apply again setTimeout function.
    // 2
    setTimeout(()=>{
        heading2.textContent = "Two";
        heading2.style.color = "purple";
        // 3
        setTimeout(()=>{
            heading3.textContent = "Three";
            heading3.style.color = "red";
            // 4
            setTimeout(()=>{
                heading4.textContent = "Four";
                heading4.style.color = "pink";
                // 5
                setTimeout(()=>{
                    heading5.textContent = "Five";
                    heading5.style.color = "green";
                    // 6
                    setTimeout(()=>{
                        heading6.textContent = "Six";
                        heading6.style.color = "Blue";
                        // 7
                        setTimeout(()=>{
                            heading7.textContent = "Seven";
                            heading7.style.color = "brown";
                        }, 1000)
                    }, 3000)
                }, 2000)
            }, 1000)
        }, 2000)
    }, 2000)
}, 1000)

// Now we did this on ordr wise.
// But there is a problem.
// This code is not readable and understandable.
// The person cannot tell what this will does easily.
// Alot of code repitition
// And not understandable.
// Difficult to maintain the code
// Now we will do this same task with pyramid of doom.