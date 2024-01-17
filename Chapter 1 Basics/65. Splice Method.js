// In this topic we will learn about how we can use another method of javascript array.
// Its called the splice mehtod.
// The splice method id use to delete and insert the items at any index of the array on the same time.
// How we can use.

// Structure of splice method.
// .splice(Start, Delete("Numbers of how many items you want to delete from started position"), Insert).

// NOTE - The splice method change your original array(Mutating original array).

// First we will see deletion than insertion and both together.

// Example 1 (Deletion).
const myArray = ["Item1", "Item2", "Item3"];
const deletedItem = myArray.splice(0, 1);
console.log(myArray);
console.log("Deleted Items are", deletedItem);

// NOTE - While deleting, Remember the splice method will return the items whom its deleted.

// Example 2 (Insertion).
const myArray2 = ["Item1", "Item3", "Item4"];
myArray2.splice(1, 0, "Item2");   // We can also add more than one items.
console.log(myArray2)


// Example 3 (Deletion and Insertion).
const myArray3 = ["Item1", "Item2", "Item3"];
// const deletedItems3 = myArray3.splice(1, 2, "Inserted Item2", "Inserted Item3")
// It will also return the deleted items
console.log(myArray3)
// console.log("Deleted Items are", deletedItems3);


// How to find the index of the specific value/item.
for (let i=0; i<=myArray3.length; i++){
    if (myArray3[i]=== 'Item2'){
        console.log(i)
    }
}