// In this topic we will learn about how we can define same method in the subclass, which is already defined in parent class.
// We will see our previous exmaple for better understanding.

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


class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age)   // For creating name and age we uses parent constructor.
        this.speed = speed;
    }

    run(){
        return `${this.name} can run ${this.speed}Kmph`
    }

    // Now here we will define eat method, which is already defined in the parent class.
    eat(){
        return `Modified : ${this.name} is eating`;
    }
}

const dog1 = new Dog("Tommy", 2, 80);

console.log(dog1.eat())
// Here the modified method will executed, because we are invoking with dog class.
