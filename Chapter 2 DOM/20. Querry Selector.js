// In this topic we will learn about how we can work with another method of DOM dccument.
// There are tow method of selecting the elements for class and id both.

// 1. querySelector()
// We can select both id and the class. But in term of how we select the elemets in css (#, .)
const header = document.querySelector(".header");
const mainHeading = document.querySelector("#main-heading")
console.log(header)
console.log(mainHeading)


// 2. querySelectorAll()
// Sometime the same classes are more than one. But the id is unique according to the rules.
// The querySelector mehtod just print the only first items of class. Not more.
console.log(document.querySelector(".nav-item"))

// But what if we have to select all the elements of same class. ?
// Then we will use querySelectorAll method.
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem)
// In the output, there will be nodeList. It looks like array but it is not.

// This is just for practicing to iterate the nodeList of all the elements

// for (let i of navItem){
//     console.log(i)
// }


