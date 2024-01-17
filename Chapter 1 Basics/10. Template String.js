// In this topic we will discuss about template string that how you can use your variable into the string
let firstName = "Abbas";
let age = 21;

// The formal method
let aboutMe = "My name is "+ firstName +" and my age is "+ age;

// With template string
// NOTE - Always use backticks (``) while using template strings.
let aboutMe2 = `My name is ${firstName} and my age is ${age}`;

console.log(aboutMe);
console.log(aboutMe2);