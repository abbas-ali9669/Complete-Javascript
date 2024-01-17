// In this topic we will learn about how we can get() and set() attribute of JS
// These method are using for getting and setting the values of elements attribute.
// What are attributes ?
// The attributes are used inside the tags/element i-e class, id, href, name, src etc.

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
// In this out you will get hash(#) symbol, But if you want to skip then, you can simply put .slice(1).
// console.log(link.getAttribute("href").slice(1))

// Setting an attribute
link.setAttribute("href", "https://www.google.com.pk");

const link2 = document.querySelector(".todo-form input");
console.log(link2.getAttribute("type"));

// Setting Attribute of an element
link2.setAttribute("name", "inputTodo");
console.log(link2.getAttribute("name"));