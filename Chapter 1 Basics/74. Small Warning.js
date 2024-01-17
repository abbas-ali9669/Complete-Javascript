// In this topic we will learn about how we can prevent a small warning, which can create a big confusion in our code.

// Example.

const user  = {
    firstName: "Abbas",
    age: 21,
    about: function (){
        console.log(this.firstName, this.age);
    }
}

// Simply printing our function.
user.about();

// But what if we store our function into the variable. ?
const myFunc = user.about;   // We are just storing not calling.
myFunc()   // This will not work. "this" keyword will not bind with the object.

// NOTE - We cannot store our method reference(For storing the method reference into the variable then we have to use the bind method) into the variable, But we can store our method reference into another object

// '''

// Here what happens ?
// const myFuncExample = function (){
//     console.log(this)
//     console.log(this.firstName, this.age);
// }
// myFuncExample()

// This is what happens here. Because here no this.firstName and the this.age here. For doing this we have to bind out function.

// '''

// Q - When do we get to know the value of this keyword ?
// A - When the function get calls.

// But here we are not calling our function, We are just storing the reference of our function which will change the value of this keyword.

// Q - What should we do then ?
// A - You have to bind your function, Using bind method.

// The correct method when you want to store your fucntion/method into the variable.
const myFunc2 = user.about.bind(user);
myFunc2()