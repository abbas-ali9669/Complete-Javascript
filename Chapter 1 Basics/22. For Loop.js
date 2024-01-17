// In this topic we will learn about how we can work with the for loop. The for loop is same as the while loop (We can do same work with while and for loop)

// For declaring the for loop use the keyword for

for(let i=0; i<=9; i++){
    console.log(i)
}
// If we use the let inside the for, then we cannot use that variable from outisde of the for loop. But if we use var then we can access the variable from outside of the for loop
console.log(i)  // If let then we cannot access.

// If we declare our let variable before the for loop for the for loop, then we can access the variable. But we don't usually do that.