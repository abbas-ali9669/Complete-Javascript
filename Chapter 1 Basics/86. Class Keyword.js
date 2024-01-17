// In this topic we will learn about the classes in the javascript.
// The classes are introduce in the javascript/es6 in 2015.
// Classes in javascrip are fake.
// Internally the working in the javascript is happening manually.

// We will improvise our previous exmaple with the help of class.
class CreateObject{
    constructor(firstName,lastName, age, address, email){
        // The constructor get called as much as your object creates.
        console.log("Constructor called")
        this.firstName = firstName
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.email = email;
        // The working is same like we did before
    }

    // Instead of creating methods in the prototype we can define here simply.
    about = function(){
        return `${this.firstName} is ${this.age} years old`;
    }
    // Short form
    is18(){
        return this.age >= 18;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    func(a){
        console.log(a);
    }

}

// NOTE - The new keyword is very important for invoking/calling the class contrustor. Without new keyword, we cannot invoke/call class constructor.

const user1 = new CreateObject("Abbas", "Ali", 21, "Shinkiari", "abc@gmail.com")
const user2 = new CreateObject("Bilal", "Ahmad", 19, "Shinkiari", "bilal@gmail.com")
const user3 = new CreateObject("Ali", "Khan", 17, "Mansehra", "ali@gmail.com")
console.log(user1.__proto__)

console.log(user1);
console.log(user1.about());
console.log(user3.fullName());
console.log(user3.is18())
