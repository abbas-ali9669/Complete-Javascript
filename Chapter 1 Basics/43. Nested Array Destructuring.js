// In this topic we will learn about how we can destructure the nested array. object inside the array.


const users = [
    {userId: 1, userName: "Abbas Ali", userGender: "Male"},
    {userId: 2, userName: "Fatima", userGender: "Female"},
    {userId: 3, userName: "Ahmad Khan", userGender: "Male"}
];

// First we will do the formal array destructuring.
// const [user1, , user3] = users;
// With skipping an item
// console.log(user1)
// console.log(user3)


// My method to destructure the object
// const {userId} = user1;
// console.log(userId)

// Formal destructure the inner object
// Foraml Method.
const [{userId, userName}, {}, {userGender: gender}] = users
// These are the object inside the array. 3 object are initialized, one is skipped

console.log(userId)   // First Object
console.log(userName)   // First Object
console.log(gender)   // Third Object

