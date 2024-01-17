// in this topic we will learn about how we can use the super keyword for adding additional properties in the sub class.

// We will use existing example for better understanding.

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

// Now here for constructing first two peoperties we will Animal constructor.
// But for the additional properties we use Dog class constructor.

// Super() - Super keyword is used to define additional properties in the sub class.

class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age)   // For creating name and age we uses parent constructor.
        this.speed = speed;
    }

    run(){
        return `${this.name} can run ${this.speed}Kmph`
    }
}

const dog1 = new Dog("Tommy", 2, 80);

console.log(dog1.run())
console.log(dog1.speed)
console.log(dog1.isCute())