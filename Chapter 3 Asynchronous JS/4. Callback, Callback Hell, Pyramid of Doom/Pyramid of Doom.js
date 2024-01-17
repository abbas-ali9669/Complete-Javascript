// In this topic we will learn about pyramid of doom.
// We will do this task with the elp of function.

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

// function changeData(element, text, color, time = 1000) {
//     setTimeout(() => {
//         if (element) {
//             element.textContent = text;
//             element.style.color = color;
//             console.log("Exist")
//         } else {
//             console.log("Does not Exist");
//         }
//     }, time)
// }

// changeData(heading1, "One", "violet", 1000)

// Now we have write the structure of the function. Now we will add the callback function in it.

function webPageEdit(element, text, color, time = 1000, onSuccess, onFail) {
    if (element){
        setTimeout(()=>{
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess()
            }
            else{
                if (onFail){
                    onFail()
                }
            }
        }, time)
    }
    else{
        console.log("Heading Not Present");
    }
}
 
webPageEdit(heading1, "One", "violet", 1000, ()=>{
    webPageEdit(heading2, "Two", "purple", 2000, ()=>{
        webPageEdit(heading3, "Three", "red", 2000, ()=>{
            webPageEdit(heading4, "Four", "pink", 1000, ()=>{
                webPageEdit(heading5, "Five", "green", 2000, ()=>{
                    webPageEdit(heading6, "Six", "blue", 3000, ()=>{
                        webPageEdit(heading7, "Seven", "brown", 1000, ()=>{
                            
                        }, ()=>{console.log("Heading Does not Exist")});
                    }, ()=>{console.log("Heading Does not Exist")});
                }, ()=>{console.log("Heading Does not Exist")});
            }, ()=>{console.log("Heading Does not Exist")});
        }, ()=>{console.log("Heading Does not Exist")});
    }, ()=>{console.log("Heading Does not Exist")});
}, ()=>{console.log("Heading Does not Exist")});

// Now this is the method called pyramid of doom. 
// Because it looks like the pyramid of doom.
// And this method is very usefull readable, understandable and maintainable.
