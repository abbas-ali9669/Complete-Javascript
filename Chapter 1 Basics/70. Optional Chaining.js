// In this topic we will learn about how we can learn about optional chaining.
// Optional chaining is all about checking the specific items in the object. If the key is exists or not.
// With the use of optional chaining we can prevent errors.

// How to use it.
const user = {
    firstName: "Abbas",
    // address: {houseNo: "1234"}
    country: "Pakistan"
};

// console.log(user.address.houseNo)   // It will throw an error, if the specific key is not present in the object. But we can prevent the errror by using chaining.

// With the chaining.
// You just have to put the marks "?" before dot "."
console.log(user?.address?.houseNo)

// ? - The question mark is working like the if statement. If the specific key exists, then it will prints. Otherwise, they will decalare as undefined.