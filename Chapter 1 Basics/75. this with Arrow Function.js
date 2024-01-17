// In this topic we will learn about how we can work with the arrow function while using this keyword.

// Example
const user = {
    firstName: "Abbas",
    age: 21,
    about: () => {
        console.log(this)
        console.log(this.firstName, this.age);
    }
};

// Now what if we we printout our this using arrow function.
user.about()

// This will declare as undefined. why ?
// Because arrow function has no this keyword itself.
// Arrow function borrow this from its sorrounding. Means the window object.
// But what if we call that method/function with the call method.

user.about.call(user);   // No defference.
// Because we cannot change the value of this in case of arrow function.