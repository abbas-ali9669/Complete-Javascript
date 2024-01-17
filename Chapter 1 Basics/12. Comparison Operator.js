// In this topic we will learn about comparison operator, That how we can compare different values.

// That program will print the boolean values on the console (truw/false).

// 1. Greater than > and less than <.
let val1 = 20;
let val2 = 10;

console.log(`Greater Than --> ${val1 > val2}`);
console.log(`Less Than --> ${val1 < val2}`);

// 2. Greater than or equal to, less than or equal to
console.log(`Greater Than or Equaltoo --> ${val1 >= val2}`);
console.log(`Less Than or Equaltoo --> ${val1 <= val2}`);

// 3. == vs ===
// Double Equal (==) - == always check the values not the datatypes.
// Triple Equal (===) - === will also check for the values and the datatypes
let equalval1 = 10;
let equalval2 = "10";

console.log(`Double Equals --> ${equalval1 == equalval2}`)
console.log(`Triple Equals --> ${equalval1 === equalval2}`)

// 4. != vs !==
// This is same as equal to 
console.log(`Sungle Not Equal to --> ${equalval1 != equalval2}`)
console.log(`Double Not Equal to --> ${equalval1 !== equalval2}`)