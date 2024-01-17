// In this topic we will learn about hwo we can add event listener on multiple button at the same time.
// We will loop for adding the event listener with the buttons.

const allButtons = document.querySelectorAll(".myButton button");
// console.log(allButtons);   // Nodelist

// for (let button of allButtons){
//     button.addEventListener("click", function(){
//         // Now here we have to print all the buttons textContent and for this we need this keyword. We can also use direct varible, But we can use this keyword as well
//         // console.log(button.getAttribute("id"))
//         console.log(this.textContent)

//     })
// }


// Simple for loop
// for (let i=0; i<allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this.textContent);
//     });
// };

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(button);
        console.log(this.textContent);
    });
});