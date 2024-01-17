// In this topic we will learn aout how can fincd the difference between the block vs function scope

// let and const are the block scope.
// var is the function scope

// Q - What is Block ?
// A - The block is where we write our code inside the curly braces{}. i-e if else, function, for and while loop etc

{
    let firstName = 'Abbas';
    console.log(firstName);
}
{
    const firstName = "Abbas";
    console.log(firstName);
}

// The range of these varibale is inside the blocks. We cannot acces these variable outsides the blocks.

// But in the case of var we can.
{
    var firstName = "Abbas";
}
console.log(firstName);

// Lets understand with the example of real world program
if(true){
    let var1 = "Abbas";
    console.log(var1);
}
// console.log(var1);
// Also we cannot access the variable which is defined inside the block of if. Only in the let const case. But we can acces in case of var.

function myApp() {
    if(true){
        const inFuncName = "Abbas";
        console.log("inFuncName is", inFuncName);
        // The range iof the const and let declared varible is only last in the block, not outisde of the block. We can only work with these variable inside the block, not outside.
    }
    console.log(inFuncName);
}
myApp()