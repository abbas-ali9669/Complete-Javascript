// In this topic we will learn about two main concepts of oop
// Getter and Setter.

// Getter - Getter is use convert object method into object property.
// Setter - Setter is use change the property

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // For aplying getter we just have to write "get" before method
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // Second manual Method.
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    // Now we will see the setter, that how we can change the fullname of object.
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

const person1 = new Person("Abbas", "Ali", 21);
console.log(person1);
console.log(person1.firstName);


// console.log(person1.fullName());
// Now here we must putt () brackets to call our method.
// But with the help of getter we can treat our method like we treats the object properties. see (line 11)
console.log(person1.fullName)   // Now we can call our methos without paranthesis().


// Now we will see the setter.
// person1.firstName = "Bilal"   // We can also do this manually.
// console.log(person1)

// person1.setName("Bilal", "Khan")   // After Change (Second Manual Method)
// console.log(person1)

// NOTE - Line no. 46 and lineNo. 48 are the same for changing the properties manually.

// With setter
person1.fullName = "Bilal Khan";
console.log(person1)