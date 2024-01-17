// In this topic we will learn aboutt how we can learn tow different method in javascript. 
// 1. getElementByClassName()
const navtem = document.getElementsByClassName("nav-item");   // HTML Collection
// So in the output it will give us an Array like object (HTML Collection). It is not an array. We can easily do an indexing
console.log(navtem);
console.log(navtem[0].style);

// 2. querySelectorAll()
const navItem2 = document.querySelectorAll(".nav-item");   // Nodelist
// In the outputt, it will give us an Array like object as well but not an array.
// And we can iterate it easily. We can easily do an indexing
console.log(navItem2);
console.log(navItem2[1].textContent);




// For practicing.
const textArea = document.querySelector(".signup-form textarea");
textArea.style.fontSize = "1rem";
textArea.style.fontFamily = "poppins";
textArea.style.padding = "5px"

let count = 0
for (let obj of navItem2){
    if (count === 1){
        console.log(obj.style);
    }
    count++
}