// In this topic we will learn about how we can use sort method with the array.
// The sort method in the javascrpt is very logical.
// We will learn sort method with the multiple example.

// Example 1.
const numbers = [10,2,42,53,76,6,5,3,62,18,3,95,72,1];
const newArray = numbers.sort();

console.log(numbers);
// NOTE - The sort method will not give us an extra array, it will chnage our original array.

// Q - HOW SORT METHOD WORKS ?
// A - The sort method takes all the array items in the string. Even if there are a numbers in the array. The sort method will takes it as an string.

// There is an specific ASCII table for the sort method.
// "0" : 48
// "1" : 49
// "2" : 50
// "3" : 51
// "4" : 52
// "5" : 53
// "6" : 54
// "7" : 55
// "8" : 56
// "9" : 57

// The array will sort according to this table. (If the numbers are >10. The sort method will only count the first number. e-g 39 -> 3)

// Q - How to solve this problem ?
// A - The sort method can take the optional callback function. We can use it and overcome this problem.

numbers.sort((a, b)=>a-b);
console.log(numbers);

// How this works ? 
// If a - b = positive value = SWAP
// if a - b = negative value = NOSWAP

// NOTE - If you want to sort the items in descending order then you just have to write (b-a)
// Problem = Solved.

// Example 2.
// Lets sort the English letters.
const letters = ["zohaib", "abbas", "arbaz", "Ahsan", "Zarbab", "abcd", "XYZ"];
letters.sort();
console.log(letters);

// The letters will sort alphabetically.
// The precedence of words which is starting from capital letter/Capital letters will be first then the small letter will get sort.

// The ASCII number of capital letters are starts from the number 65 to 90.
// And the ASCII number of small letters are starts from the number 97 to 122.

// Example 3 (Real Life Example)
// For instance if we see our cart there is an option of sorting like lowToHigh and highToLow. How we can make the program for that.
const cart = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 5000},
    {productId: 3, productName: "p3", price: 3030},
    {productId: 4, productName: "p4", price: 10000},
    {productId: 5, productName: "p5", price: 500},
    {productId: 6, productName: "p6", price: 600},
    {productId: 7, productName: "p7", price: 9000}
];


// First we dont want to change the original cart items, therefore we will make clone

const lowToHigh = [...cart].sort((a,b)=>a.price-b.price);
const highToLow = cart.slice(0).sort((a,b)=>b.price-a.price);

console.log(cart);
console.log(lowToHigh);
console.log(highToLow);
