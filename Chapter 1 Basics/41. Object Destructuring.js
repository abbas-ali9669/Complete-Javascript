// In this topic we will learn about how we can learn about object destructuring.
// The object destrcturing is same like the array destructuring.

const person = {
    name: "Abbas Ali",
    age: 21,
    country: "Pakistan",
    city: "Mansehra"
};

// The formal method to do this task.
// const name = person["name"];
// const age = person["age"];


// With Object Destructuring - Now we will do this with the object destructuring.

// const {name, age} = person;
// For changing the name of the variable.
// const {name:var1, age:var2} = person;

// NOTE - You have to keep the name of variable as same as the key name. Or if you want to change the name of the variables. then you can use like this i-e (name:var1). Now your variable name has been changed to the var1.

// In the object case you have to keep the same name as the varible. And the variable will assign the same value as with the name of key. i-e: If we change the name of the age into the country then the variable's value will be chnage from age to the country.


// Rest Element - If you want to store the rest element/key value pairs into the specific/different variable then you can easily use spread operator after the variables. Always remember the rest element will always write on the last position. not first and not in the centre.

const {name, age, country, ...restElement} = person;
// Now the rest element will store in the variable name "restElement".

console.log(name);
console.log(age);
console.log(country);
console.log(restElement);

