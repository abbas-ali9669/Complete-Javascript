// In this topic we will learn about how we can use the different datatypes of javascript

// Primitive Data Types
// 1. String
// 2. Numbers
// 3. Booleans
// 4. Undefined
// 5. Null
// 6. Big Int
// 7. Symbol


// 1. typeof: This function tell the exact type of our object, that this is string or number or anyother datatype
let firstNname = "Abbas";
let age = 21;

console.log(typeof age);
console.log(typeof firstNname);

// Trick to changes number into string without function
let num = 20;
num = num + "";   // Join the string with number
console.log("Without Function --> "+typeof num);  // The output will be string

// Trick to change string into the number without function
let str = "20";
str = +str;   // Join the + Symbol with string
console.log("Without Function --> "+typeof str);

// Now we will see the functions, that how we can changes string to number and number to the string with functions

// 1. With String() Function
let withStr = 10;
let chgToStr = String(withStr);
console.log("With String Function --> "+typeof chgToStr);

// 2. With number() Function
let withNum = "20";
let chgToNum = Number(withNum);
console.log("With String Function --> "+typeof chgToNum);