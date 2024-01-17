// In this topic we will learn about asynchoronous callback.
// We will learn about 3 types of callback.
// 1. Callback
// 2. Callback Hell
// 3. Pyramid of Doom

// 1. Callback
// Now the task is in every 1 or 2 second change the text and the color of headings.
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");

setTimeout(()=>{
    heading1.textContent = "One";
    heading1.style.color = "red"
}, 1000)
setTimeout(()=>{
    heading2.textContent = "Two";
    heading2.style.color = "purple"
}, 2000)
setTimeout(()=>{
    heading3.textContent = "Three";
    heading3.style.color = "orange"
}, 3000)

// But is this method is very usefull ?
// No, this technique/method is not very usefull. There is alot of code repitition again and agian time writing, If by mistakenly someone has changed the time there will be a huge difference will be made. The order will be change. And the order is very important.
// Now in the next file we will see Callback hell.