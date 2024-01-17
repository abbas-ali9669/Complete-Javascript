// In this topic we will learn about the defference between static list vs live list.

const listItems = document.querySelectorAll(".todo-list li");
const li = document.createElement("li");
li.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(li)

// Static List - querySelectorAll will give us a NodeList which is a static list
// Live List - getElementBySomething will give us an HTMLCollection which is a live list

// Now in the case of querySelector will not show the sixth list item on the console. Beacuse it will a NodeList and the NodeList are static 

// Now will try on getElementsBySomething.
const listItems2 = document.querySelector(".todo-list");
const li2 = listItems2.getElementsByTagName("li")
const sixthLi = document.createElement("li")
sixthLi.textContent = "Item 6";
listItems2.append(sixthLi);

console.log(listItems)   // NodeList(5) [li, li, li, li, li]
console.log(li2)   // HTMLCollection(6) [li, li, li, li, li, li]

// So this is the difference between statis list vs live list.