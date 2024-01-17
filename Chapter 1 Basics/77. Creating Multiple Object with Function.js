// In this topic we will learn about how we can create the multiple object using function

// For instance, if we have an object and we want to create more infinite object. Then what should we do.
// We will make a function and inside the function we will make the the object where we can assign multiple object.

// Lets understadn with the help of exmaple.

function createObject(firstName,lastName, age, address, email){
    const user = {};
    // Here we are adding the value inside the object.
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email
    // Adding Functions/Mehtods.
    user.about = function(){
        console.log(`${this.firstName} is ${this.age} years old`);
    }
    user.is18 = function(){
        console.log(age >= 18);
    }
    return user
}

// Now here our object is ready to assign thr values

// Objects
const user1 = createObject("Abbas", "Ali", 21, "Shinkiari", "abc@gmail.com")
const user2 = createObject("Bilal", "Ahmad", 19, "Shinkiari", "bilal@gmail.com")
const user3 = createObject("Ali", "Khan", 17, "Mansehra", "ali@gmail.com")
console.log(user1)

// Checking Objects methods.
user1.about()
user3.is18()