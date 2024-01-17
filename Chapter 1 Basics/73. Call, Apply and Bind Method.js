// In this topic we will learn about call, apply and bind method.
// That how we can use these method and work with these methods.

// 1. Call Method - Call method is use to set the value of "this" keyword/binding of "this" keyword, no matter where the method is defined in any object.

// Example 1.
const user1 = {
    firstName: "Abbas",
    age: 21,
    // Now lets add the the extra parameter.
    about: function(country, hobby){
        console.log(this.firstName, this.age, country, hobby);
    }
}

const user2 = {
    firstName: "Bilal",
    age: 19,
}

// Now here the "user2" has no about property and the function.
// Task - bind the "user2" with the "user1" about property, Here we will use the call method to bind the function with the "user2".
// user1.about.call(user2);
// NOTE - The call method set the value for "this" keyword.

// Passing extra arguments into the function.
// user1.about.call(user2, "Pakistan", "Coding");

// Q - What if we do not pass the argument into the call method.
// A - This will declared as undefined.
// user1.about.call();

// If you want to use for the "user1" and you used the call method, Then you have to put the argument in the call method "user1" again.
// user1.about.call(user1);
// Normally
// user1.about()   // On the above we used call method with the "user1".


// Example 2.
// Here we will define our function from outside the object

function about(country, hobby){
    console.log(this.firstName, this.age, country, hobby);
}

const user3 = {
    firstName: "Abbas",
    age: 21,
}

const user4 = {
    firstName: "Bilal",
    age: 19,
}

about.call(user4, "Pakistan", "Coding");


// 2. Apply Method - Apply method is the same as the call method. Internally apply method uses call method. The difference is just the we have to put our extra arguments inside the array.

// Example.

function aboutApply(country, hobby){
    console.log(this.firstName, this.age, country, hobby);
};

const user5 = {
    firstName: "Abbas",
    age: 21
};

const user6 = {
    firstName: "Ahmad",
    age: 27
};

aboutApply.apply(user5, ["Pakistan", "Coding"]);
// This is the physical difference about apply and call mehtod.


// Bind Mehtod - The binf method is also the same as like both call and apply, The bind method is just return the function at the end and we just have to call it again.

// Example.

// Here we will define our function inside the object. (For just best practice)

const user7 = {
    firstName: "Abbas",
    age: 21,
    aboutbind: function (country, hobby){
        console.log(this.firstName, this.age, country, hobby);
    }
};

const user8 = {
    firstName: "Ahmad",
    age: 27
};

// Here we dont have to put the extra argument inside the array. Same as the call.
const func = user7.aboutbind.bind(user8, "Pakistan", "Coding")
func()