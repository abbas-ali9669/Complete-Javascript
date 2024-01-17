// IN this topic we will learn about for in loop. This loop similar as the traditional for loop, but with the in keyword enters.

// How we can write the code for for in loop.

const fruits = ["Apple", "orange", "grapes", "banana"];

const fruits2 = []
for (let fruit in fruits){
    fruits2.push(fruits[fruit].toUpperCase());
    // This for in loop gives us the index of an array.
    // For printing an elements we have to write fruits[fruit]
    // This loop is not very usefull as compared to the traditional or for of loop.
    // The for of loop is very usefull.
}

console.log(fruits2);

// Traditional for loop.
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}