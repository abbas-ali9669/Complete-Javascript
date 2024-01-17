// In this topic we will learn about string indexing

let firstName = "Abbas";

//  A B B A S --> String
//  0 1 2 3 4 --> Index
// Index always start from 0 (zeroth) porsition

console.log(firstName[2]);

// For finding the total lenght of string, we use lenght funtion

console.log("Total Length is "+firstName.length);
// NOTE - The length function starts from 1 position. As well as the spaces includes
// TIP - If you want the last character in your string/array use the length function with -1. Or you want to acces your string reversely

console.log("Print last item index with length function", firstName.length-1);   // Print Index
console.log("Printing last item " + firstName[firstName.length-1]);    // Print Last character