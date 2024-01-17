
export class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    info(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

// What is export default
// First of all we can only use "export default" only one time in one file.
// And we can use any name while importing the default function/variable/class.

export class Person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    info(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

const hello = "Hello";
export default hello;