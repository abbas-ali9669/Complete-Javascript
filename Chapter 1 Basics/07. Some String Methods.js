// In this topic we will learn about how we can use some usefull and very important methods
// 1. trim() - For removing spaces in string
// 2. toUpperCase() - Convert you string characters into uppercase
// 3. toLowerCase() - Convert you string characters into lowercase
// 4. slice() - Print he specific character of your string

// NOTE - Tha javascript string are immutable, We cannot make chages into the original string

// 1. trim()
let firstName = "     Abbas     ";

let new_fName = firstName.trim();
// This method will not change the original string, this will provide the its own trimmed string. But we can assign with original string
// firstName = firstName.trim();    like this 

// console.log(new_fname.length);
// console.log(firstName.length);


// 2. toUpperCase
let upper = "abbas";
// This method will also does not change the original string. But as usuall we can assign into the original
upper = upper.toUpperCase();
console.log("Uppercase --> "+upper);


// 3. toLowerCase
let lower = "abBaS";
// This method will also does not change the original string. But as usuall we can assign into the original
lower = lower.toLowerCase();
console.log("Lowercase --> "+lower);


// 4. slice(Start Index, End Index+1)
let slicing = "abbas";

// We will add +1 number to the ending index
// If you want to print the first three letter of your string
// In the second parameter of slice method we have to add one number additional. Because slicing works that, remember only start from 0 position
let range = slicing.slice(0, 3);
let range2 = slicing.slice(2)   // It means your string will start printing from this index to the end.

console.log("Starting from to the end --> "+range2)
console.log("Slicing --> "+range)