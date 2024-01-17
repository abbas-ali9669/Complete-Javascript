// In this topic we will learn some more and old methods of element
// In this topic we will learn about some old method to support poor internet explorer.
// appendChild
// insertBefore
// replaceChild
// removeChild

// 1. appendChild
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Todo";

// ul.appendChild(li);

// 2. insertBefore(Element, reference).
// This method will need a reference of item where you want insert before.
const reference = document.querySelector(".todo-item");
// ul.insertBefore(li, reference)

// 3. replaceChild(newChild, previousChild)
ul.replaceChild(li, reference);

// 3. replaceChild
ul.removeChild(li)