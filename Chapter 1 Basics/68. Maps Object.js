// In this topic we will learn about how we can learn another data structure called object.
// Map is an iterable.
// Store data in ordered fashion.
// Store key value pair (like object).
// Duplicate keys are not allowed like object.

// Difference between object and Map - Object can only have string or symbol as key, but the Map object can have any type of key which we want.
// We can use anything as the key e-g string, array, number, object etc

// 1. How to make object ?
// Method of Map()
// 1. set() - For storing the data.
// 2. get() - For retrieving the data.
// 3. keys() - Shows all the keys in the Map object.

const mpobj = new Map();   // Our Map object has created.
// we use set() method for adding the data inside the Map
mpobj.set("fName", "Abbas");
mpobj.set("Age", 18);
mpobj.set("Gender", "Male");

// How to retrieve/access data from Map.
console.log(mpobj)
console.log(mpobj.get("fName"))
console.log(mpobj.keys())   // Map Iterator.

// Iterating the Map(). 
// We can apply for of loop on Map, because it is iterable.

// On the keys.
for (let keyDetail of mpobj.keys()){
    // console.log(keyDetail)   // Will print the keys
}

// On the Instance.
for (let keyDetail2 of mpobj){
    // console.log(keyDetail2)   // This will print the Map data in the set/pair of array. And we can easily destructure it. (See down below)

};

// Destructuring 
for (let [key, value] of mpobj){
    // console.log(key, value)
};

// Another method of storing the data in the Map().
const newMap = new Map([
    ["Name", "Abbas"],
    ["Age", 21],
    ["Gender", "Male"]
    // This method will work as the storing the data inside Map.
]);
console.log(newMap.get("Age"));

// Storing different type of keys in the Map.
const diffKeys = new Map();
diffKeys.set([1,2,3], "An Array");
diffKeys.set({1:"one"}, "An object");
diffKeys.set("String", "A String");

console.log(diffKeys.get("String"))

// A realistic example.
const person1 = {
    Name: "Abbas Ali",
    Age: 21
}
const person2 = {
    Name: "Smavia",
    Age: 19
}

// Now we have to keep this "personInfo" object as a key in the Map.
const extraInfo = new Map();
extraInfo.set(person1, {gender: "Male", Country: "Pakistan"})
extraInfo.set(person2, {gender: "Female", Country: "Pakistan"})

console.log(extraInfo.get(person1))
console.log(extraInfo.get(person2))
// Sub Information
console.log(extraInfo.get(person1).gender)   // Dot Notation
console.log(extraInfo.get(person2)["gender"])   // Bracket Notation







// As an example of object literal.
const person = {
    firstName: "Abbas",
    age: 21,
    1: "one"
};
// console.log(person)

for (detail of Object.keys(person)){
    // console.log(detail, typeof detail);

    // As in the type of keys, you can easily see the type of the third key (1), there is a string. Because the object converts key into the string. But Map object will not do like this. We can assign whatever we want (array, object, string number). The Map object will not convert that key type.
};