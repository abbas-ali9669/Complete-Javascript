// In this topic we will learn about how we can work with more two methods.
// These method will privide all the data/text inside elements

// NOTE - These all the outputs are the javascript obejct. We can treat all this as we treat the objects. (Changing and accessing the properties).

// 1. textContent
const mainHeading = document.getElementById("main-heading");
const data = mainHeading.textContent
// mainHeading.textContent = "Hello"   // Changing the text.
console.log(data)

// But for instance if we uses anyother tag inside of this and we use the css property "display: none". The element will not show on the screen. BuT IN THE console the data of that display: none element will display. (Not on the webpage)

// 2. innerText
const mainHeading2 = document.querySelector("#main-heading");
const data2 = mainHeading2.innerText
console.log(data2)

// But in this method the display: none element will not show on the console same as the webpage. 