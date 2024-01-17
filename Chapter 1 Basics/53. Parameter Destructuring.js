// In this topic we will learn about how we can learn parameter destructuring.
// We use this tyoe of destructuring with object.
// Mostly used in react.

const person = {
    firstName: "Abbas",
    gender: "Male",
    age: 21,
    country: "Pakistan"
}

function personDetail(obj){
    console.log(obj.firstName)
    console.log(obj.gender)
}

// personDetail(person)

// Now we will do with parameter destructuring.
function personDetail2({firstName, gender}){
    console.log(firstName)
    console.log(gender)
    console.log(rest)
}

personDetail2(person)

// Example 2 - With using rest parameter.
function personDetail2({firstName, gender, ...rest}){
    console.log(firstName)
    console.log(gender)
    console.log(rest)
}

personDetail2(person)