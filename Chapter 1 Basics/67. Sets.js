// In this topic we will learn about how we can learn and work with the another datatype of javascript.
// Set is unordered collection of items.
// Only stores unique items (No duplicates).
// We will undersatnd set with some examples.
// Set also has its own methods.
// Ordered is not guaranteed
// NOTE - Set is iterable. But it has no length.

// How to define set
const dec = new Set()   // This is how the set is defined.
// Inside of this we can store our values.

// 1. Example (How to use).
const set1 = new Set([1,2,3]);
// console.log(set1)

// 2. How to add data.
const items = ["item1", "item2", "item3"];
const set2 = new Set();
// We use "add()" method for storing the data.
set2.add(1)
set2.add(2)
set2.add(3)
set2.add(4)
set2.add(4)   // Set will not store duplicate data.
set2.add(items)
set2.add(items)   // Will not store.

// But there is one method is use to add the duplicate is by adding two item specifically
set2.add(["item1", "item2"])
set2.add(["item1", "item2"])   // This technique will work, because they both have their own address in the memory.
// console.log(set2)


// 3. Iterable.
const set3 = new Set();
set3.add("Item1")
set3.add("Item2")
set3.add("Item3")
set3.add("Item4")

for (let item of set3){
    // console.log("set3 is iterated:", item);
}

// console.log(set3)

// 4. Length.
const set4 = new Set();
set4.add("Item1")
set4.add("Item2")
set4.add("Item3")
set4.add("Item4")
set4.add("Item5")

// console.log(set4)
// console.log(set4.length)   // undefined

// Q. How we can find the length of set ?
// A - Make a variable with the value 0 and inside the iterator, increment it by 1.

let length = 0;
for (let i of set4){
    length++
}
// console.log("The length of set4 is:", length)

// 5. How to extract unique items in the array.
const myArray = [1,2,2,3,4,5,4,3,2,5];
// how we remove duplicates
let rmdp = new Set(myArray);
// console.log(rmdp)   // Duplicate Removed.

// 6. has() Method.
// Check if the specific values exists in the set or not.
const set5 = new Set();
set5.add("Item1")
set5.add("Item2")
set5.add("Item3")
set5.add("Item4")
set5.add("Item5")

console.log(set5.has("Item3"))   // It will return True/False.

// With if else.
if (set5.has("Item8")){
    console.log("Present")
}else{
    console.log("Not Present")
}