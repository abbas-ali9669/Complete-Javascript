// In this topic we will learn about how we can use static methods and static properties in the class
// The static methods and properties are directly related to the class.
// We don't need object for invoking the staic methods or properties.

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    // For creating static methods we use "static" keywords.
    // Static method
    static classInfo(){
        return "This is Static Method";
    }

    // Static property
    // For understanding static property, You can just keep in mind these are the class variable along with "static" keyword.
    static desc = "Static Property";

    // When to use static methods ?
    // We use static method/properties for initializing our class.


    // So these are the object method.
    // We need an object for calling these functon/methods
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating`;
    }

}

const person1 = new Person("Abbas", "Ali", 21);
console.log(person1.eat());

// For calling static method/properties we just need a class.
console.log(Person.classInfo())
console.log(Person.desc)