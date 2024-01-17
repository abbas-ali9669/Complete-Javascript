// In this topic we will learn about the Events. 
// Events are all about, what will happen if the button will get click or he  specific keyboard button will click.
// You can easily search multiple events on "mdn event reference" on google.
// There are totally three method of events.

// In this topic we will only see mouse "click" event.

// 1. onclick attrubute of button.
// {/* <button class="btn btn-headline" onclick="console.log("i am clicked">Learn More</button> */}
// But this method is not usefull and does not use now.

// 2. Access the attribute here.
const btn = document.querySelector(".btn-headline");
// // console.log(btn);
// btn.onclick = function(){
//     console.log("I am Clicked")
// }

// But this method is also does not uses.

// 3. addEventListener(Event, function)
// This method is very usefull, and all the developer uses this method all the the time. And we will also use this method in out upcoming lectures.

// btn.addEventListener("click", ()=>{
//     console.log("Arrow Clicked")
// });
// You can both arrow and separate function its up to you. Arrow function recomended.

// For practicing.
function clickMe(event){
    // event parameter is the document/object, which has the multiple properties and we uses key property which shows us which key pressed.
    if (event.key === "Enter"){
        console.log("Enter Pressed")
    }
    
}


btn.addEventListener("keypress", clickMe);

