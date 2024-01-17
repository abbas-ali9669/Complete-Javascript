// IN this topic we will learn about another reference type. That how we can use objects literal also called as objects literal.
// Array is good but not sufficient for storing the real world data.
// Objects don't have index.
// The data is stored in th form of key value pairs
// We can store any type of data in the objects 


// How we can create objects.
const person = {
    name: "Abbas Ali",
    age: 21,
    hobbies: ["Cricket", "Snooker", "Coding", "Reading"]
    // Key value pairs are also called the properties.
};
console.log(person);
console.log(typeof person);

// How to access data from object.
console.log(person.name);
console.log(person.age);

// We can also access array in the objects indexes
console.log(person.hobbies[0])
console.log(person.hobbies[person.hobbies.length-1])   // Accesing "hobbies" array Reversely(Practice).

// How to add data in the objects;
person.gender = "Male";
console.log(person);
console.log(person.gender)