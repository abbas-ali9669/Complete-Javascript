// In this topic we will learn about ho we can iterate elements with the use of different loops.

// We will see for the both HTMLCollection and nodeList.
// HTMLCollection.
let navItems = document.getElementsByTagName("a");   // HTMLCollection
// console.log(navItems)
// We can apply 
// 1. Simple For loop, because it has a length.
// 2. For of loop,
// 3. But we cannot apply forEach method, For applying forEach we have to convert it into the array

// 1. Simple For Loop.
// for (let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "White";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// 2. For Of Loop.
// for (let navItem of navItems){
//     // console.log(navItem)
//     navItem.style.background = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold"
// }

// 3. forEach Method - For applying forEach method we have to convert it first into the array.

// navItems = Array.from(navItems)
// // Array.from() - This method will return an iterable object.

// navItems.forEach((navItem) => {
//     navItem.style.background = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold"
// })

// #################################################################################

// 2. NodeList
const navItems2 = document.querySelectorAll("a");
// console.log(navItems2);

// We can apply thrice of them of NodeList.
// 1. Simple For Loop
// 2. For Of Loop
// 3. forEach Method.

// 1. Simple For Loop.
// for (let i=0; i<navItems2.length; i++){
//     // console.log(navItems2[i])
//     let navItem = navItems2[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// 2. For of Loop.
// for (let navItem of navItems2){
//     // console.log(navItem)
//     navItem.style.background = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// 3. forEach Method.
// navItems2.forEach((navItem) => {
//     // console.log(navItem)
//     navItem.style.background = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
//     console.log(navItem.getAttribute("href").slice(1))
// })

