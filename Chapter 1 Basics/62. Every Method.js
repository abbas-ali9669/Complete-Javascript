// In this topic we will learn about how we can use another method of javascript array.
// The every mehtod is use to check the every item in the array. Which you are looking for.
// In my opinion the every method is works like the AND operator.
// We will understand this method with just of example.


// Example 1.
// Check the every item in the arary, if it is even or not
const numbers = [2,4,6,8,10];
const ans = numbers.every((number)=>number%2===0);
console.log(ans);
// It will return the boolean value (True/False).
// In our case its True.


// Example 2 (Realistic).
const users = [
    {Id: 1, name: "Abbas", age: 21},
    {Id: 2, name: "Amed", age: 31},
    {Id: 3, name: "Hamza", age: 26},
    {Id: 4, name: "Usama", age: 12}
];

const checkAge = users.every((user)=>user.age > 18);
console.log(checkAge);

// NOTE - If one of the value in the array is false, teh every method will declared as false.