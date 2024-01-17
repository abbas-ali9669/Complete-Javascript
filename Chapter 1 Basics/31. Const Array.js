// IN this topic we will learn about how we can use const for declaring an array.
// Most of the case the senior developer are using const for declaring an array.

// Const
const fruits = ["Apple", "Banana"];
fruits.push("Grapes");
// fruits = []   // We cannot do like this in case of const

// Here the "Grapes" will be added in the fruits because we are not declaring this variable again or assigning another value in it. This method is very usefull for declaring an array. No one can change the value or assigning new value in it. 
// Here we are just adding an item in the array using array methods, we are not assigning it as a new variable.
// But in the case of let we can do anything we can assign again new value on the place of previously declared variable. But this is not usefull.
// In case of let the new declared variable overwrite the previously one.
console.log(fruits);

// Let
let fruits2 = ["Apple", "Banana"];
fruits2 = [];
// We can do like this in case of let. Because the array store in the heap and doing like this, this will change the array address, but using array methods, that will not change the address of an array. They are just adding the items in it.
console.log(fruits2);

// Tip - Always use const for declaring an array.