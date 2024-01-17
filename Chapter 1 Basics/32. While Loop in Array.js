// In this topic we will learn about how we can apply while loop on the array. How we can iterate the array using while loop.

const fruits = ["Apple", "Orange", "Grapes"];

let i = 0
while(i<fruits.length){
    console.log(fruits[i])
    i++
}

const fruits2 = []
let x = 0;
 
while(x<fruits.length){
    fruits2.push(fruits[x]);
    x++
}
console.log(fruits2)