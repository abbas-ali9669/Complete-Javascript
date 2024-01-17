// In this topic we will learn about how we can get the dimensions of an elements.

const section = document.querySelector(".section-todo");
console.log(section.getBoundingClientRect().width);
console.log(section.getBoundingClientRect().height);
console.log(section.getBoundingClientRect().x);
console.log(section.getBoundingClientRect().y);