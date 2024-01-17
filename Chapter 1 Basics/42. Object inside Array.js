// In this topic we will learn about how we can make object iniside an array.

const users = [
    {userId: 1, userName: "Abbas Ali", userGender: "Male"},
    {userId: 2, userName: "Fatima", userGender: "Female"},
    {userId: 3, userName: "Ahmad Khan", userGender: "Male"}
];

// We will treat as an normal array from outside. Because it is as array from outside, if we want to access inner items from an object, then we will use as we access data from object.

// How to access the user data
// console.log(users[0])
// console.log(users[0].userName)

// How to iterate.
// We will simply use first for of loop on the array.
// Or if you want to iterate inner object then you can iterate inner object by using for in loop or what you want.
for(let user of users){
    // console.log(user.userName)
    // console.log(user)

    // Iterating inner object.
    for(let innerUsser in user){
        console.log(user[innerUsser])
    }
}