// In this topuc we will learn about how we can learn and understand the concepts of closures.

// We will understand closures with some of the different examples.

// A function can return function.

function outerFunction(){
    function innerFunction(){
        console.log("Hello World");
    }
    return innerFunction
}

const ans = outerFunction();
ans()

// This was simple as expected.

function printFullName (firstName, lastName){
    function printName (){
        console.log(firstName, lastName);
    }
    return printName
}

const fname = printFullName("Abbas", "Ali");
fname()

// So, now you are thinking this is all normal. But no, there is someting hidden inside these function.
// Lets analyze the function in the next lecture.

