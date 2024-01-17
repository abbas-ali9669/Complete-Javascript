// In this topic we will learn about how we can clone the object by using Object.assign method.

// Normal Cloning Using Spread Operator.
const obj1 = {
    key1: "Value1",
    key2: "Value2"
};

console.log(obj1);

const obj2 = {...obj1};   // Here's how the clone makes using cpread operator.
// BUt the spread operator is new in the javascipt, people before spread operator was using the method Object.assign() method.


// Now we will make the clone using Object.assign() method.
const cloning = Object.assign({testing: "testing"}, obj1);
// The curly braces is important, if you do not put the braces, the clone is not going to make. And if you want to add extra information into your new cloning object, Then you can simply put the data inside the braces.

obj1.key3 = "Value3";   // Adding key, value into the obj1 for checking.

console.log(cloning);


