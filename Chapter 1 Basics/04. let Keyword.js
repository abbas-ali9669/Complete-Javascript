// IN this topic we will cover the let keyword
// The let keyword is same as the var

// var
var firstName = "Abbas";
var firstName = "Bilal";
// Here we use the var keyword twice. (as we can do with var keyword). But in the case of let we cannot use the let keyword twice for the changing the value of variable
console.log(firstName)

// let
let lastName = "Ali";
lastName = "Ahmad";    //So we cannot use let twice
// Error - Uncaught SyntaxError: Identifier 'lastName' has already been declared
console.log(lastName);

// Q - What is the difference between var and let
// A - Block Scope vs Function Scope (Covered letter in the lecture 50)