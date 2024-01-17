
// Some Method
// Math.random - This will give a random number between 0 - 0.999 (not 1). But we can multiply with whatever the number we need. i-e *10, *100 etc
// Math.floor - This method will give you the integer(1) not float value (.0000).

const btn = document.querySelector("button");
const body = document.body;

function randomNumberGenerator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const color = `rgb(${red}, ${green}, ${blue})`
    return color
}

btn.addEventListener("click", ()=>{
    const randomNum = randomNumberGenerator();
    body.style.background = randomNum;
    const curColor = document.querySelector(".current-color");
    curColor.textContent = randomNum;
})
