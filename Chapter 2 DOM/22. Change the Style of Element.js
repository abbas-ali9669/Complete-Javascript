// In this topic we will learn about how we can change the style of an element with the javascript

// We can also select our elements, that how we can select elements in css.
const mainHeading = document.querySelector("div.headline h2");
// It will provide all the css proerties which we can use to apply with an element
console.log(mainHeading.style);

// Chnaging style.
mainHeading.style.color = "#fff";

// But what happens when we use that type of properties, in which the hyphen(-) uses.
// S, we will write camelCase writing style instead of using hyphen.
mainHeading.style.backgroundColor = "#000"
mainHeading.style.border = "10px solid white"
mainHeading.style.padding = "1rem"



// For just Practice
const section = document.querySelector("section.section-todo h2")
section.textContent = "SignUp Kar"
section.style.color = "brown"



const section2 = document.querySelector("section.section-todo input[type='text']")
console.log(section2)
section2.style.border = "none"
section2.style.outline = "none"
section2.style.boxShadow = "0px 0px 30px 0px rgb(0, 0, 0, 0.5)"
section2.style.borderRadius = "30px"