// In this topic we will learn about javascript __proto__ or [[prototype]].
// the __proto__ and [[prototype]] is same. Both are the same.
// What is __proto__ or [[prototype]].
// The __proto__ or [[prototype]] is the reference in which, if the javascript has not found some of the property in the specified object, then the __proto__ or [[prototype]] will search in the reference object. Which is defined in the __proto__ or [[prototype]].

// How to create/define __proto__ or [[prototype]].
// We will use Object.create("referenceObejct").
// The reference object is work like backup. If one prperty is not defined in the specified object then the __proto__ or [[prototype]] will search inside the reference object. if __proto__ or [[prototype]] found that property in the reference object, it will print out.
// That is the very usefull method to prevent alot of lines of codes.
// In the simple words __proto__ or [[prototype]] is the reference of assigned object.

// We just have to specified the reference object and work will be done.

// Example.
const obj1 = {
    key1: "Value1",
    key2: "Value2"
}

// Here is another way to declare the object.
const obj2 = Object.create(obj1);
// This method will done 2 works for us.
// 1. Create an empty object for us.
// 2. Creating the chain between 2 objects __proto__ or [[prototype]] and set the value with assigned object. The __proto__ or [[prototype]] is the refrence of assigned/backup object.

// If javascript has found the specific property, then javascript will start findeing that property in the __proto__ or [[prototype]].
// The __proto__ or [[prototype]] creating the bond between two objects.
obj2.key3 = "Value3";

console.log(obj2.key3)
// Now what happens when we search the key2 in the obj2. Which is ot defined in the object 2

console.log(obj2)
console.log(obj2.__proto__)
console.log(obj2.key2)   // The key "key2" is not defined in the "obj2". But it is printing why ? Because of __proto__ or [[prototype]].

// Now see the lecture no 79.