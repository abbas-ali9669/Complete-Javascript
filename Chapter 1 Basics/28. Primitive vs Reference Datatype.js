// In this topic we wil; learn about primitive vs reference data type. That how these both data type works differently form each other.

// 1. Primitive Datatype.
let num1 = 5;
let num2 = num1;
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);
// Now here we will increment the value of num1.
num1++;
console.log("After Incrementing")
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);

// Theory(Defined) - Now here, why the value of num2 did not match to the num1, because we assign num2 as a value of num1 then why num2 did not matched ?
// It is because in the memory stack, there is two specific spaces for both of the variable. num1 has its own address in the memory stack and the num2 has its own address in the memory stack. They are not dependent on each other. Each one has its own space in the memory. Because it store in the memory.


// 2. Reference Datatype
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("Array1 is", array1)
console.log("Array2 is", array2)
// Now here we will add the item into the array1.
array1.push("item3");
console.log("Array1 is", array1)
console.log("Array2 is", array2)

// Theory(Defined) - Now in the reference datatype, the arrays is stored in the heap with the specific address and the specific pointer inside the memory which will retrieve the array. Now there is array2 is dependent on the array1. Because the address of both arrays are same. But in the memory there is two specific spaces and the pointers for the both arrays but with the same address. And both the pointer will retrieve the same address which is the array1.
// Therefore the value will be changed, if the one array is changed.