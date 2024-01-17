// In this topic we will learn about concept of inheritance. 
// In java script "extends" keyword is used  for inheritance.

// Lets understand with inheritance with an example.
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Mehtods
    eat(){
        return `${this.name} is eating`;
    }
    isCute(){
        return true
    }
    isSuperCute(){
        return this.age < 1;
    }
}

const animal1 = new Animal("Tom", 2);
console.log(animal1);
console.log(animal1.isSuperCute());

// Inheritance.
// Now here we will create the sub class, which will extend//inherit all the properties of their parent class.
// With the use of inheritance we can prevent code repitition.

class Dog extends Animal {};

// Here the dog class is created, we dont need to write anything, ecxept we want other specific properties for the dog class
// The dog class will use Animal class constructor for creating object.
const dog1 = new Dog("Tommy", 2, "Italian");
console.log(dog1);
console.log(dog1.isCute())