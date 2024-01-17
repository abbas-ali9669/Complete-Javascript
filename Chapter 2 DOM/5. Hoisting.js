// In this topic we will learn about how we can understand the concept of hoisting
// So what is hoisting.
// According to the official Ecmascript specification/documentation. The hoisting is about, before code execution phase, these all the variable are stored and created in the memory. But how they stores ?. Because when the global execution context creates or when the control enter in to the gobal execution context, The variables creates in the memory. Then after the code executes.

console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);

// Why and how these variable are printing on the console ?
// Because, while creation of the global execution context or when the control enter in to the gobal execution context and in the creational phase, these all variable has been stored in to the memory. Therefore, we can print ll these variable on the screen.(In the case of var).

function myFunc(){
    console.log("This is function");
}

var firstName = "Abbas";
var lastName = "Ali";
var fullName = firstName +" "+ lastName;
console.log(fullName);

// And when all the code of global execution context executes. Then it will pop out from the meory stack. And the rest will remain at the top in the stack is current execution constext