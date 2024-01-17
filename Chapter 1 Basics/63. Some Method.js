// In this topic we will learn about how we can use the some mehtod of the javascript array.
// The some is the same as the previous one "every".
// But the some mehtod working like the OR operator.

const numbers = [3,2,5,4,3,6,7,8];
const ans = numbers.some((number)=>number%2===0);
console.log(ans)

// It checks for the one value, if it finds then it will return True.

// Example 2 (Realistic)
const users = [
    {Id: 1, name: "Abbas", age: 21},
    {Id: 2, name: "Amed", age: 31},
    {Id: 3, name: "Hamza", age: 26},
    {Id: 4, name: "Usama", age: 19}
];

const checkAge = users.some((user)=>user.age < 18);
console.log(checkAge);