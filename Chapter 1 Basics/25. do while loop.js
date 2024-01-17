// In this topic we will learn about how we can work with the do while loop. And how this is different from while loop.


let i = 10;

// First we will see in the while loop.
while (i<=9) {
    console.log(i);
    i++;
}
console.log(`The value of 'i' is ${i}`)
// In the while loop if we change the value of i to the 10. Then the while loop does not execute in the start, because the condition will false.

// In the while loop the condition first check the executes.

// Do while loop.
let x = 10;
do{
    console.log(x);
    x++;
}while (x<=9);

console.log(`The value of 'x' is ${x}`)

// But in the do while loop, the do block execute first, then the while block will execute and check the condition.
// The do while loop will execute at least one time even the condition is false.