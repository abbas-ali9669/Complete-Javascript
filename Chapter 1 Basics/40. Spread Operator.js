// In this topic we will learn about how we can use spread operator with the object. As same as ew did with arrays. 
// We will first revise spread operator using arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

let newArray = [...array1, ...array2];   // Array Spreaded.
// console.log(newArray)

// We can also spread the defined array elemnts.
const forSpread = [..."abcdefghijklmnopqrstuvwxyz"]
// With doing like this, this will spread our elements into the one by one elements.
// console.log(forSpread)

// So now we will discuss spread operator using object

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4",
    // key1: "UniquesValue"   // This will overwrite the previous one.
}
// Now here we will combine these two objects into one with the help of spread operator
const newObj = {
    // The method is same as it was in array.
    ...obj1, ...obj2,

    // Or if you want to add another key value pairs you can add
    key5: "value5"
};

console.log(newObj);

// Repitition Case - If you have a same key in both the object and with a different/same value. So, Then the second one will overwrite the first one. But if you want the first one then you have to assign after while using spread operator.

// Spread Operator with defined object.
const forSpread2 = {
    ..."abcdefghijklmnopqrstuvwxyz"
};
// By doing this, This will give the number as a key. like, 0,1,2...so on.
console.log(forSpread2);

const forSpread3 = {
    ...["Item1", "Item2"]
};
// This will also give the index to every element.

console.log(forSpread3)
