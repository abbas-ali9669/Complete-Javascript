// In this topic we will learn about how we can learn about classes of html.
// With the use of this property we can see, add, remove, contain(Check Existance), Toggle the classes.

const section = document.querySelector(".section-signup");
console.log(section.classList);   // Will print all the classes inside the section.

// Add the class into the classlist.
section.classList.add("hello");   // This method will add the class.
console.log(section.classList);

// Remove the class.
section.classList.remove("hello");
console.log(section.classList);

// Check class existance.
console.log(section.classList.contains("container"));

// Toggle the class.
// The toggle method is works on : If the class is already exists, it will remove the class and if the class does not exists it will add the class.
section.classList.toggle("hello");
console.log(section.classList);