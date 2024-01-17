// In this topic we will learn about another method of creating HTML elements.
// We will use "insertadjacentHTML(where, HTML)" method to create HTML element.

const todoList = document.querySelector(".todo-list");

todoList.insertAdjacentHTML("beforeend", "<li>Todo 2</li>");

// There are 4 method to choose where you want to put your element.
// beforebegin - It will put element bofore starting
// afterbegin - Put the element after starts
// beforeend - Put the element in last last
// afterend - Put the element after ends.

// NOTE - There are alot of method which you can use to put your element into your html. But you should use one (My preference is use method which is defined in file no. 31). 
