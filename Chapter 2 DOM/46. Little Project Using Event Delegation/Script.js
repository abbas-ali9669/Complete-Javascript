
const todoForm = document.querySelector(".todo-form");
const formInput = document.querySelector(".todo-form input[type='text']");
const todoList = document.querySelector(".todo-list");

// Now here we will add the submit event on form.
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()   // This method is use to prevent page reloading.
    const inputValue = formInput.value;

    const newLi = document.createElement("li");
    const newLiText = `<span class="text">${inputValue}</span>
    <div>
        <button class="todo-button done">Done</button>
        <button class="todo-button remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiText;
    todoList.append(newLi)

    formInput.value = ""   // Use for emptying the input
})
// Now the form work has been done. Now we have to add events for buttons.

// Here we use event delegation for buttons
todoList.addEventListener("click", (e)=>{
    // Done Button
    if (e.target.classList.contains("done")){
        // Approaching its parent sibling for changing text
        const targetParent = e.target.parentNode.previousElementSibling
        targetParent.style.textDecoration = "line-through"

    }
    // Remove Button
    if (e.target.classList.contains("remove")){
        const targetParent = e.target.parentNode.parentNode;
        targetParent.remove()
    }
})