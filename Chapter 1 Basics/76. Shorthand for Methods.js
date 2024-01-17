// In this topic we will learn about how we can declare our method using short syntax.

// What we were doing for now.
const user1 = {
    firstName: "Abbas",
    age: 21,
    about: function(){
        console.log(this.firstName, this.age);
    }
};

user1.about();
// The normal method which we were use to declare the method.

// But now we will see the shorthand for this.
const user2 = {
    firstName: "Abbas",
    age: 21,
    about(){
        console.log(this.firstName, this.age);
    }
}
user2.about();

// The same output...
// With the short syntax.