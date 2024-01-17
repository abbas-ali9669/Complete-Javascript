// In this topic we will learn about how we can create delete the new element using accurate and easy way.

// Making Element
const newTodoItem = document.createElement("li");
// Inserting Text (This is the lengthy way to add the data)
// const newTodoItemText = document.createTextNode("Todo 22");
// Adding text into the element.
// newTodoItem.append(newTodoItemText);
// Shortest way to add the data inside the element is
newTodoItem.textContent = "Todo 2"

// Now adding into the main ul list.
const todoList = document.querySelector(".todo-list");
// There are 5 methods which you can use to edit the elements.
// appendChild - This method will also work, but this method is now er old.
// append - It will add element at the last
// prepend - It will add element at the first
// before - Before the element
// after - After the element
// remove - It will remove the element

todoList.append(newTodoItem)
// todoList.prepend(newTodoItem)
// todoList.before(newTodoItem)
// todoList.after(newTodoItem)


// newTodoItem.remove()
console.log(newTodoItem);
