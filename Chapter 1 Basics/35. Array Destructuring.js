// In this topic we will learn about how we can learn about array destructuring.
// Array Destructuring is the process of assign the array elements into the variable With the specific javascript syntax.

// We will learn array destructuring with some of the use cases(Examples).
const myArray = ["Value1", "Value2"];

// Now the task is assign these two array items into the specific variables.
// First we will see the traditional methods. Then will see the javascript destructuring method.

// Traditional Method
// let var1 = myArray[0];
// let var2 = myArray[1];

// Now this is the dafault method (logic). That every language supports.

// Now will see the javascript destructuring.
// let [var1, var2] = myArray;
// var1 = "Value chnanged"   // In let case

// Here we can change the value of varibles because we used the let. if const then we can't.

// Now we will see the use cases with some of the related to some question(Examples).

// Example 1:
// What if the array element is more than our initialized variables ?

// const myArray2 = ["Value1", "Value2", "Value3"];
// let [var1, var2] = myArray2;
// The remaining item will remain last. That will not added in the variable, until we assign new variable.


// Example 2:
// What if the variable is more than the items in the array.
// const myArray3 = ["Value1"];
// let [var1, var2] = myArray3;

// That remaining variable will declared as undefined until the new item added to the array.


// Example 3:
// What if we want to skip the element from our array. 
// const myArray4 = ["Value1", "Value2", "Value3", "Value4"];
// Now here we want to skip the first index (Value2) of array.

// let [var1, , var2] = myArray4;
// We just have to put the commma between the var1 and var2. for skipping an item. The more you want to skip the items. THe more you have to put the commas between your variables.

// Skipping more than one elements.
// let [skip1, , , skip2] = myArray4;
// console.log("Skipping more than one elements is", skip1, skip2);

// Example 4:
// We have to destructure the first two elements and make an extra array of remaining elements.
const myArray5 = ["Value1", "Value2", "Value3", "Value4"];

let [var1, var2, ...myNewArray] = myArray5;
// The first elements will assign in the variable. And the remaining items will store in to the new array which we have defined.

// let myNewArray = myArray5.slice(2);   // Traditional Method.
// The new method will apply on the destructuring line.

console.log(myNewArray);
console.log("Value of var1 is", var1);
console.log("Value of var2 is", var2);
