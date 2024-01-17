// In this topic we will learn the new method which is used to edit he element inside the document object.
// The browser makes an object of an elements, and store inside document object.

// And we will see the different mehtod that how we can access these all the elements by using document methods.
// The first method we will use is getElementById()

const jsRep = document.getElementById("main-heading");
// This will print the javascript representation

const humanRep = window.document.getElementById("main-heading");
// It will print the human readible representation

console.log(jsRep)
console.log(humanRep)

// But the output is not fixed, Sometime ot will print human and sometime jas representation.