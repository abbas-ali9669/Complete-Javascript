// In this topic we will learna bout how we can assign the truthy and falsy values

// 1. Falsy Values:

// false
// 0
// null
// undefined
// Empty String - ""
// These kinda string or values will be assign as false

// Lets understand with the if else statement.
let firstName;

if (firstName){
    console.log(firstName);
}
else{
    console.log("The String is empty");
}

// Output - The else statement will execute because the main string is assigned with falsy values. If there is an event in the variable/assigned truthy value, Then the if block will execute. otherwise false runs else statement



// Truthy Values:
// The truthy values are all are except falsy values
// the negative values are also assign as truthy value except zero (0).

let example2 = "Abbas";
if (example2){
    console.log(example2)
}
else{
    console.log("String is empty")
}


// Output - Truthy values could be anything including negative values (-1), except falsy.