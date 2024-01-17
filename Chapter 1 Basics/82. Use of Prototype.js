// In this topic we will learn about how we can use the prototype in our real life exmaple.
// We will see the perfect example of prototyp, as the example we did in our last lectures.

// Example
// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return age >= 18;
//     },
//     fullName: function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Now we dont need these object methods


// Now here we define our method in a separate object.
// But we can also store these method in to the function prototype and acces them through __proto__.
// So in this lecture we will do the same.

function createObject(firstName,lastName, age, address, email){
    const user = Object.create(createObject.prototype);
    // And we can easily assign our function protoype.

    // Here we are adding the value inside the object.
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    // NOTE - We can also assign our properties in the prototype object inside the function
    return user
}

// Creating prototype properties.
createObject.prototype.about = function (){
    return `${this.firstName} is ${this.age} years old`;
}
createObject.prototype.is18 = function (){
    return this.age >= 18;
}
createObject.prototype.fullName = function (){
    return `${this.firstName} ${this.lastName}`;
}


// Objects
const user1 = createObject("Abbas", "Ali", 21, "Shinkiari", "abc@gmail.com")
const user2 = createObject("Bilal", "Ahmad", 19, "Shinkiari", "bilal@gmail.com")
const user3 = createObject("Ali", "Khan", 17, "Mansehra", "ali@gmail.com")

console.log(user1)
console.log(user1.about());
console.log(user3.fullName());

// Here it works fine
