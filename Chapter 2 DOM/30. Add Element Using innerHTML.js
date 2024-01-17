// In this topic we will learn about how we can add the element in our webpage using innerHTML.

// Now in our webpages we have added the todo list now how can we add some more todo list items into that.

// Adding elements using inner HTML.
const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML)

// Now here we will add more element using innerHTML.
todoList.innerHTML += "<li>todo 2</li>"
todoList.innerHTML += "<li>todo 3</li>"
todoList.innerHTML += "<li>todo 4</li>"

// Q - But is this method is very usefull ?
// A - This technique is not usefull at all. This technique will directly impact on our website performance. Beacause the browser has to render all the existing code again and again. Therefore, the performance of the website will be slow.

// When you should use it ?
// When you have an html file and you have to change that html data not append, changes all the data. then you can use this method. Does not use for adding the new elements