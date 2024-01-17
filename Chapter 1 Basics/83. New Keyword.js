// In this topic we will learn about how we can work with new keyword along with our previous example.
// First we will take out another example just to understand the working of new keyword.

// Example.
function creatUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

// Adding function into the function prototype.
creatUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}

const user1 = new creatUser("Abbas", 21);

// So how did this object creates ?
// The new keyword is doing 3 works.
// 1. Creates the new empty object 
    // Which is refered by this => (this = {})
// 2. return this object (automatically)
// 3. Setting a __proto__ value automatically the function prototype.

console.log(user1);
user1.about();