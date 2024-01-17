// In this topic we will learn about how we can use the filter function in the js.
// The filter method is also works like the iterator.
// The filter method is use to filter out the array. And grab your desired items from array.

// We will understand with some of the example.
// Example 1.
const numbers = [1,2,3,4,5,6,7,8,9,10];

function isEven(obj){
    return obj%2 === 0;
}
const values = numbers.filter(isEven)
console.log(values)

// Example 2.
const values2 = numbers.filter(isOdd=>isOdd%2 !== 0)
console.log(values2)

// Example 3.
const array2 = [
    "Abbas",
    "Ahmad",
    "Bilal",
    "ali",
    "Usama"
]

const grabName = array2.filter(function(obj){
    return obj[0] === "A" || obj[0] === "a";
})
console.log(grabName)