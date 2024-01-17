// In this topic we will learn about how we can clone a node or clone a new element which we will create.

const ul = document.querySelector('.todo-list');

const li = document.createElement("li");
li.textContent = "New Todo";

const li2 = li.cloneNode(true);
// true - This wil copy the text as well means deep cloning. But we can also define indivisually if needed.
// li2.textContent = "Li2";

ul.prepend(li2)
ul.append(li)


