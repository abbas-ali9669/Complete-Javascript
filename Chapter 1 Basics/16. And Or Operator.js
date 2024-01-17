// In this topic we will learn about and & or operator, how we can work with and & or operator

// 1. AND Operator(&&)
let age = 21;
let firstName = "Abbas";

if (age > 18 && firstName[0] === "A"){
    console.log("If Block")
}
else{
    console.log("Else Block");
}
// NOTE - If all the condition is true then the AND operator will declare it true. If one of them is false, then all the condition will false. AND Operator is always search for the false value, if there is any false value detected by AND operator, then all the condition will assign false
console.log(0 && 1)


// 2. OR Operator(||)
let age2 = 15;
let firstName2 = "Abbas";

if (age2 > 18 || firstName2[0] === "A"){
    console.log("If Block");
}
else{
    console.log("Else Block")
}

// NOTE - OR Operator always search for true value, if there is one true values will detected by the OR operator, then the whole condition declare as true.
console.log(0 || 1)