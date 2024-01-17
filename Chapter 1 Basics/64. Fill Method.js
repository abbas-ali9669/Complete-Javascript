// In this topic we will learn about fill method in javascript array.
// Fill method is use to fill the items in the array.

// Structure of fill method:
// fill(Value, Start, End+1);

// Example 1.
// How we can use it.
// Inside the constructor "Array()" we initialize our range.
const newArray = new Array(10).fill(0)
console.log(newArray);

// Example 2.
const alph = new Array(3).fill("Hello")
console.log(alph)

// NOTE - The fill method changes our orginal array.

// Example
const numbers = [1,2,3,4,5,6,7,8,9,10];
// Lets replace the '3 4 5' with the number 0.
const replaced = numbers.fill(0, 2, 5);
console.log(replaced)
