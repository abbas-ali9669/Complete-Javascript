// In this topic we will learn about how we can learn about prototype in javascript.
// We will learn about STEP-BY-STEP.

function hello(){
    console.log("Hello World");
}

// Here we can work with our function just like we treat object.
console.log(hello.name);   // This will print the name of the function.

// We can also add the property in the functions.
hello.myOwnProperty = "My Unique Property";
console.log(hello.myOwnProperty)

// But What is prototype ?
// Prototype is the free object, which is given by the functions only, to store the information about function.

console.log(hello.prototype)
// How to add property in to the function prototype.
hello.prototype.myOwnProperty2 = "My Unique Property2";
hello.prototype.abc = "ABC";
hello.prototype.xyz = "XYZ";
// We can also store the function inside the prototype
hello.prototype.sing = function(){
    return "lalalalalal"
}

// Retreiving the prototype peroperties.
console.log(hello.prototype)
console.log(hello.prototype.myOwnProperty2)
console.log(hello.prototype.abc)
console.log(hello.prototype.xyz)
console.log(hello.prototype.sing())

// NOTE -Only function provides prototype. Not anyother datatypes in javascript.

if (hello.prototype){
    console.log("Prototype is Present")
}else{
    console.log("Prtotype is Not Present")
}

// Checking for anyother datatypes.
const helloObject = {};
if (helloObject.prototype){
    console.log("Prototype is Present")
}else{
    console.log("Prtotype is Not Present")
}

// Realistic Example.
function userInfo(fName, age, address, email){
    console.log(fName, age, address, email);
}

const user = userInfo("Abbas", 21, "Shinkiari, Mansehra", "abbas@gmail.com");

// Now we will set the prototype for this function.
userInfo.prototype.funcInfo = "This function is taking some of the user personal info like name, age, address and email and return the exact values to the end."

console.log(userInfo.funcInfo)