// In this topic we will learn about how we can work woth the computed properties.
// The computed properties is the rechniques of using external variable values as internal in the object.

// Example
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "keyvalue1";
const value2 = "keyvalue2";
// Task - Now the task is use the values of these variable into the object key value pairs.

// Solution.
const obj = {
    // For using the external variable inside the object use square bracket.
    [key1]: value1,
    [key2]: value2
};
console.log(obj);

// Second method to do this task.
const obj2 = {};

obj2[key1] = value1;
obj2[key2] = value2;
obj2['Name'] = 'Abbas'   // Additional
console.log(obj2)