// In this topic we will learn about how we can use break and the continue keyword with our porgrams

// 1. Break keyword
for(let i=1; i<=10; i++){
    if(i === 5){
        break;
    }
    // The condition, if the 'i' reaches to the value '5'. The loop will stop due to the break keyword and jump over the for loop. and execute the further code
    console.log(i)
}

console.log("Break keyword")

// 2. Continue keyword
for(let i=0; i<=10; i++){
    if(i===4){
        continue
    }
    // The condition, the continue keyword will jump to the starting of the for loop and skip the part (4). And continue to execute next.
    console.log(i)
}
console.log("Continue keyword")
