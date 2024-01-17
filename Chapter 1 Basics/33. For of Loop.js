// In this topic we will learn about for of loop. The for of loop is very easy like in python.

const fruits = ["Apple", "Mango", "Banana", "Grapes"];

for(let fruit of fruits){
    console.log(fruit)
}
// The for of loop is very easy. The variable will just execute to the length of an array. And we can just use our iterate variable "fruit" ot just work with them.

const newFruits = [];
for(let fruit of fruits){
    newFruits.push(fruit.toUpperCase())
}
console.log(newFruits)