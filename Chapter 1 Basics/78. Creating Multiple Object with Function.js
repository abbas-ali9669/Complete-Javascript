// In this topic we will check for the missing things which is not present in the previous lecture.

// What is the problem ?
// The problem is, the more we creating the object the more these methods are creating and stores into the memory. This cause is too much memory consuming.
// So how we can preven these problems ?
// So we will make these both method specifically and assign the address into the function.

// Example.
const userMethods = {
    about: function(){
        console.log(`${this.firstName} is ${this.age} years old`);
    },
    is18: function(){
        console.log(age >= 18);
    }
}

function createObject(firstName,lastName, age, address, email){
    const user = {};
    // Here we are adding the value inside the object.
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    // So, now doing this will store the function in the memory and assing the address in to the objects.
    // NOTE - We cannot store our method reference(For storing the method reference into the variable then we have to use the bind method) into the variable, But we can store our method reference into another object
    return user
}

// Now here our object is ready to assign thr values

// Objects
const user1 = createObject("Abbas", "Ali", 21, "Shinkiari", "abc@gmail.com")
const user2 = createObject("Bilal", "Ahmad", 19, "Shinkiari", "bilal@gmail.com")
const user3 = createObject("Ali", "Khan", 17, "Mansehra", "ali@gmail.com")

user1.about();