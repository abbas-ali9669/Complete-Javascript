// In this toic we will learn more abou prototype.
// We will learn about how the prototype can be converted into array.

const number = [1,2,3];
console.log(Object.getPrototypeOf(number))
console.log(number)

// But the prototrype comes wth only functions. Then, how did the array has the prototype ?
// If we create an array like simply in the bracket [1,2,3]. Then the internally javascript will create the array like that Array(1,2,3). Which is the function.
// And in function has the pototype. And inside the array constructor, there is all the array methods stores.

// Object.getPrototypeOf() - This method is used identify the chain of proto, from which the array/object is connected to other object/array

const number2 = new Array(1,2,3);
console.log(Array.prototype)   // But this prototype is the array.


// Both are the same for the Array constructor
// console.log(Object.getPrototypeOf(number2)); 

// Checking the type of prototype
console.log(Array.isArray(Array.prototype))   // True

console.log(number2)

// Q - Can the prototype can be an array ?
// A - Yes, the prototype can be an array. We can change the prototype in to the array.

// Example.
function cvtToArray(){
    console.log("Checking of prototype")
}

console.log(cvtToArray.prototype)   // This prototype is array.

// But we can change.
cvtToArray.prototype = []
console.log(cvtToArray.prototype)

console.log(Array.isArray(cvtToArray.prototype))   // True

// Hence, the function prototype can be changed into the array
