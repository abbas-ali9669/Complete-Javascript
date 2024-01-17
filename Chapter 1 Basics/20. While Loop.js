// In this topic we will learn about how we can work with the while loop.

// e-g; If we have to generate the list of a number from 1 to 10. Then What would we do write the line of code like console.log(0,2,3,4...). SO this will looks very weird. So, for this work we have a loop called while.

let i = 0;
while(i<=9){
    console.log(i);
    i++; // This id for the incrementing the values of i from 0 to 9. If i equal to the 9 the while loop will break.
}
// The loop breaks at tis point because the value of i reached above 9.
console.log(`The value of 'i' raised from condition, therefore the value of i is ${i}`)


// e-g; 2
// In this example we are incrementing yhe value by the 10.
let x = 0;
let y = 10;
while (x<=10){
    console.log(y);
    // x++;
    x += 1
    y += 10;
}