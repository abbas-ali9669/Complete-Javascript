// In this topic we will learn about how we can use to access the bracket and dot notation.
// We will see the flexibility of both.
// Which one is easy to use.

const person = {
    // The name of the keys are string type. We can also put inside the single or double quotes.
    name: "Abbas Ali",
    'age': 21,
    "hobbies": ["Cricket", "Snooker", "Coding", "Reading"],

    // 3. What if we need the key name including spaces. Then we have to put the key name in the string.
    // country name: "Pakistan"   // We cannot do like this
    "country name": "Pakistan"
    // Now see the point no. 3 below.
}

// 1. Accessing the Element.

// With dot notation
console.log(person.name)

// With bracket notation
console.log(person["name"])
// Here we have to put key inside the string otherwise this will declare as undefined.


// 2. Adding the Elements.

// With dot notation.
person.gender = "Male"

// With bracket notation
person["gender"] = "Male"


// 3. Accessing Key including spaces
// First see the point three in the object
// Now how we can acces the "country name" with the dot notation.

// With Dot Notation
// person.country name 
// We cannot acces the keys including spaces with the dot notation.

// With bracket notation
console.log(person["country name"])
// Here we can access the keys including spaces with bracket notation.


// 4. The little practice program.
const key = "email";

// Task - Here we have to put the value of the key variable as a key in the object.

// With dot notation.
// person.key = "abbasali@gmail.com"
// Here we couldn't did this workd with dot notation.

// With bracket notation.
person[key] = "abbasali@gmail.com"
// Here we have did this work with bracket notation.
// Rememberance - Here we dont have to put name of the variable inside the string in the bracket notation, because we are using through variable not directly.

console.log(person)
