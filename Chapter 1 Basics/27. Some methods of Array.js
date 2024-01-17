// In this topic we will learn about how we can work with the arrays with some of very usefull methods of arrays.
// In this topic we will discuss about "push", "pop", "shift", "unshift" methods. The arrays is mutable. The method will change the array. BUt the javascript string are immutable, we cannot make changes with string, because that are primitive datatypes

let fruits = ["Mango", "Apple", "Grapes"]
console.log(fruits)
// 1. push() - The push method of array is use to add the item inside the array in the last index.

// fruits.push("Banana")
// console.log(fruits)

// 2. pop() - The pop method of array is use to remove the last item inside the array

// let popped = fruits.pop()
// The pop method will return the item which one is popped. And we can work with that item.

// console.log(fruits)
// console.log(`Popped item is ${popped}`)

// 3. shift() - The shift method is use remove the first item in the array.

// let removed = fruits.shift()
// And as the same it will also return the item which is removed

// console.log(fruits)
// console.log(`The removed items is ${removed}`)

// 4. unshift() - The unshift method is use to add the items on the first index.
// fruits.unshift("Orange")
// console.log(fruits)

// Q - Which one is the fast method from both of them push and pop or shift and unshoft ?
// A - The push and pop method is usefull and fast than the shift and unshift. Because the shift and unshoft method first arrange the presnt items in the memory then will place the element into it. But in the push and pop method, there is no arrangement in the array just put into the last index.
