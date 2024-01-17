// In this topic we will learn about one more method called setInterval.
// This method will recall itself by the given time.

// The behind the scene workng is same as the previous method setTimeout. Means the javascrit will handle this methid to browser and the browser will return this function to the javascript after the specific time. And the callback function will be store into the callback queue. And start waiting for the callstack to empty. The setInterval method will execute again and again. 

console.log("Script Start")
const id = setInterval(()=>{
    console.log(Math.random());
}, 1000)
console.log("Script End")

// The setInterval has also an ID
clearInterval(id)


// Lets make a little project using setInterval 
// In this project the color of the body will be change after 1 second.
// And there will be a button which. And the button is for stopping the color from changing.

const body = document.body;
const button = document.querySelector("button");

const bodyId = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
}, 1000);

button.addEventListener("click", ()=>{
    button.textContent = body.style.background;
    button.style.color = body.style.background;
    // This method will stop the method.
    clearInterval(bodyId);
})