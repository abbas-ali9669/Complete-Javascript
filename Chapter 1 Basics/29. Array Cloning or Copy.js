// In this topic we will learn about how we can make a clone of an array using some the helping function in the javascript
// There are four techniques which we can use to make the clone of the array

let array1 = ["Item1", "Item2"];

// 1. First methid is for making the clone of an array is copy the list and apaste it again. But this is not usefull.

// 2. Second method is use the slice method with the index 0
// let array2 = array1.slice(0)

// How we can add an extra item in it. Use .concat() method.
// let array2 = array1.slice(0).concat(["Item3", "Item4"])

// 3. Third method is make an empty list and use the .concat() method and put the array
// let array2 = [].concat(array1)

// If we want to add an extra item in it, use the comma inside the concat method and put the items. 
// let array2 = [].concat(array1, "ItemN")


// 4. Fourth method is using the spread operator (Usefull). 
let oneMoreArray = ["Item3", "Item4"]

// let array2 = [...array1]   // Put the ... before adding the array

// If you want to add an extra items then we can add more items 
let array2 = [...array1, ...oneMoreArray, "Item N"]



array1.push('Item3')
console.log(array1 === array2)
console.log(array1)
console.log(array2)