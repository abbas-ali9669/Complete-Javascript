// In this topic we will do a little practice with the click event.
// Task - When the button get clicked, change the color of background and foreground.

const allbutton = document.querySelectorAll(".myButton button");


allbutton.forEach(button => {
    // We can also use event object.
    button.addEventListener("click", (e)=>{
        button.style.background = "Yellow"
        button.style.color = "#333"
        e.target.style.border = "Yellow"
    })
})