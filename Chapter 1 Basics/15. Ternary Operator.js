// In this topic we will learn about how we can use ternary operato instead of using if else in some of the minor cases

// With if else statement
let age = 10;
let drink;
if (age >= 8){
    drink = "Coffee";
}
else{
    drink = "Milk";
}
console.log(drink)


// Now lets try this with the ternary operator also called conditonal operator
let age2 = 9;
let drink2 = age2 >= 10 ? "Coffee" : "milk";
console.log(drink2)

// Here you can see we have done this work with less line of code.