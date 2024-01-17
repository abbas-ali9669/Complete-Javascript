// In this topic we will learn about how we can work with the javascript reference type called arrays.
// The Arrays is the ordered collection of items/element.
// The arrays can store any type of data number, string, null, undefined etc.
// The array is mutable

// How to create arrays

let fruits = ["Mango", "Apple", "Grapes"];  // This is how we can create an array.
console.log("The length of array is", fruits.length)
// Replacing an element - Here we will see how we can replace the element in the array
console.log(fruits);
fruits[1] = "Banana";
console.log(fruits)

// Indexing. - Here we will see how we can retrieve the element from an array
console.log(`First item of array is ${fruits[0]}`)

// Checking type - Here we will see how we can check the type of array
// If we print the type of array, this will print the "object" which is true. The array is the object of javascript.
console.log(typeof fruits);
// But if we want to check for the only array, then we have to check with another javascript function called "Array.isArray()"
console.log(Array.isArray(fruits));

let obj = {};   // This is the javascript object literal
console.log(typeof obj)
console.log(Array.isArray(obj));

// Mixed Array.
let mixed = [1,2,2.3, "string", null, undefined]
