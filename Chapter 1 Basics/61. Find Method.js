// In this topic we will learn about how we can work with the find method of javascript array.
// We can do these works with other method like applying loops
// But there is predefind method in the javascript array.

// Example 1.

const animals = ["Dog", "Tiger", "Lion", "Cow", "Cat", "Cheetah"];
// We will identify which item has the length of 3.
const measureLen = animals.find(obj=>obj.length===3);
console.log(measureLen);

// NOTE - This method will give you the only one items which it will find first. It will break if it finds the item with a length of 3.

// Example 2 (Realistic)
const users = [
    {Id: 1, name: "Abbas", age: 21},
    {Id: 2, name: "Amed", age: 31},
    {Id: 3, name: "Hamza", age: 26},
    {Id: 4, name: "Usama", age: 19}
]

const findUser = users.find(user=>user.Id===3);
console.log("With Find method\n", findUser)

// Doing this for just practice.
let singleUser = {}
for (let user of users){
    if (user.Id === 4){
        singleUser = user
    }
}
console.log("With For Loop\n", singleUser)