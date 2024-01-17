// In this topic we will learn about how we can work with the new keyword along wiht our previous example.
// new keyword
// 1. this = {}   Creating empty object
// 2. return this   Returning object
// 3. Object.create(createObject.prototype);   Creating refernce chain with prototype

// These type of functions are also called constructor functions.
function CreateObject(firstName,lastName, age, address, email){
    // const user = Object.create(createObject.prototype);
    // First we manually create reference of chain (__proto__). But new keyword will automatically does this work for us.

    // Here we are adding the value inside the object.
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.email = email;

    // return this
    // And will automatically returns.
    // But, we can also write "return this" (optional).
}

// Creating prototype properties.
CreateObject.prototype.about = function (){
    return `${this.firstName} is ${this.age} years old`;
}
CreateObject.prototype.is18 = function (){
    return this.age >= 18;
}
CreateObject.prototype.fullName = function (){
    return `${this.firstName} ${this.lastName}`;
}

// IMPORTANT NOTE - If for instance i am creating a library where the contructor function is used which we have to create a user by using "new" keyword. Then, how we can aware those developers that you have to create a user by using "new" keyword. Then, we will follow the convention of awaring someone else while using the library. So, the answer is always start your function name with the capital letter

// Objects
const user1 = new CreateObject("Abbas", "Ali", 21, "Shinkiari", "abc@gmail.com")
const user2 = new CreateObject("Bilal", "Ahmad", 19, "Shinkiari", "bilal@gmail.com")
const user3 = new CreateObject("Ali", "Khan", 17, "Mansehra", "ali@gmail.com")
console.log(user1.__proto__)

console.log(user1);
console.log(user1.about());
console.log(user3.fullName());


// Now lets talk about one function called hasOwnProperty()
// This function checks for the the specific property, whether the property is exists in the object or not. 
// We will also use this fucntion for printing the object keys not the prototype keys

for (let key in user1){
    // console.log(key)
    // Now here it is printing all the keys including the prototype.
    // But we dont want the prototype properties, we need just the object properties
    if (user1.hasOwnProperty(key)){
        console.log(key)
    }
}