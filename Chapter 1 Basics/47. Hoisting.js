// In this topic we will learn about how we can work hoisting. 
// Hoisting is a concept of javascript. Which work differently with the variable decalration type(var, let, const).

// hello()
// function hello() {
//     console.log("Hello World");
// }
// What if we call our function before the function is declared. This case will only work with function declaration. Not with the function expression and arrow function.

// With Funciton Expression
hello2()
console.log("Tesing")
const hello2 = function () {
    console.log("Hello World 2")
}

// With Arrow Function
hello3()
const hello3 = () => {
    console.log("Hello World 2")
}


// NOTE - We will cover letter this topic. As we will uncderstand that, how javascript actually works.