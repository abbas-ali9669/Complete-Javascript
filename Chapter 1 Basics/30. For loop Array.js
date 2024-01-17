// In this topic we will learn about how we can apply for loop on the array. How we can iterate the array and print the items on the console.

let fruits = ["Mango", "Apple", "Orange", "Banana"];

// How we can apply the for loop on it. We will use the length property for applying on array, because the length property is very important in the array.

// Normal printing on the console
for(let i=0; i<=fruits.length-1; i++){
    console.log(fruits[i]);
}

console.log("With no equal to sign")
// Normal printing on the console but with not using =
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

// Putting the array elements into the new array.
let newFruits = [];
for (let i=0; i<fruits.length; i++){
    newFruits.push(fruits[i].toUpperCase())
}
console.log(newFruits)



// With while loop just for practice
let i = 0;
while (i<=fruits.length-1){
    console.log(fruits[i]);
    i++
}