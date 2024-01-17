// In this topic we will convert our pervious code into the new one with the help of promises.

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText (element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("Element Not Found");
            }
        }, time)
    })
}

// Now here we can consume our pomise with the function
changeText(heading1, "one", "red", 1000)
// No here function is returning a promise.
// An we can apply .then() method.


    // And inside of .then method we can recall the function. And the function is returning the promise and we can again apply .then()
    .then(()=> changeText(heading2, "two", "brown", 1000))
    .then(()=> changeText(heading3, "three", "purple", 2000))
    .then(()=> changeText(heading4, "four", "green", 1000))
    .then(()=> changeText(heading5, "five", "yellow", 1000))
    .then(()=> changeText(heading6, "six", "orangered", 1000))
    // Here we are using the shorthand for arrow function.
    // But if you are using arrow function formally then you have to write return
    .then(()=> {
        // return keyword is important.
        return changeText(heading7, "seven", "orange", 1000)
        // If you do not return something from .then().
        // Then it will automatically assign as undefined.
    })
    .catch((error)=>{
        alert(error)
    })