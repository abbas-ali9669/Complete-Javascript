// In this topic we will learn about how we can wirte the default parameters using javascript

// Old method before 2015
// Default parameter means predefined parameter inside the functions
function addTwo (a, b) {
    // Before 2015 method for checking the empty parameter. And assigning the value.
    if (typeof b === "undefined"){
        b = 1
    }
    return a + b
}

// NOTE - The given argument will overwrite the default parameter.

// What if the user does not pass one argument into the parameter
let ans = addTwo(4,);
console.log(ans)

// Example 2 
function addTwo2(a, b=0){
    return a + b;
}

const ans2 = addTwo2(4);
console.log(ans2);

function test(b){
    //console.log(b)
    if (b === undefined){
        console.log("yes")
    }
    
}

test()