// In this topic we will laern about how we can store the reference into the defined object in the function.
//  Which will not let us to write the method in the object again and again.
// For doing this we will have to understand the javascript __proto__, [[prototype]].
// Which is defined in the file no 80. 
// First see the file no 80, Then come back here


const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return age >= 18;
    },
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function createObject(firstName,lastName, age, address, email){
    const user = Object.create(userMethods);
    // Here we are adding the value inside the object.
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    // Now here we dont need to write/integrate the method with this object.
    // The method are integrated with the object "user" with the help of __proto__ or [[prototype]]
    
    // NOTE - We cannot store our method reference(For storing the method reference into the variable then we have to use the bind method) into the variable, But we can store our method reference into another object
    return user
}


// Objects
const user1 = createObject("Abbas", "Ali", 21, "Shinkiari", "abc@gmail.com")
const user2 = createObject("Bilal", "Ahmad", 19, "Shinkiari", "bilal@gmail.com")
const user3 = createObject("Ali", "Khan", 17, "Mansehra", "ali@gmail.com")

console.log(user1.about());
console.log(user3.fullName());
console.log(user3)