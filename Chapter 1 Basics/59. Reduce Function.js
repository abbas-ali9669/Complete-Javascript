// In this topic we will learn about how we can work with javascript reduce method.
// This is an another array function, which is very usefull while using array.
// We will learn this method by some example.

// Example 1.
const array1 = [1,2,3,4,5];
const sum = array1.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
}, 0)
console.log(sum);

// How reduce method works ?
// Accumulator     currentValue     return
// 1                2              3       // Next accumulator value will be the last returning value
// 3                3              6
// 6                4              10
// 10               5              15

// NOTE - There is argument called initializer, We can also put the initializer while using reduce method. Then the first value of accumulator will be the initializer.

// Example 2.
const userProduct = [
    {prodId: 1, prodName: "Iphone", prodPrice: 12000},
    {prodId: 2, prodName: "Laptop", prodPrice: 22000},
    {prodId: 3, prodName: "Tv", prodPrice: 15000}
]

const totalAmount = userProduct.reduce((totalPrice, productPrice)=>{
    return totalPrice + productPrice.prodPrice
}, 0)

console.log(totalAmount)