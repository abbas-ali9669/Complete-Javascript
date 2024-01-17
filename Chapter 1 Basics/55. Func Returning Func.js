// In this topic we will learn about how we can learn and understand the process of function returning function.

// Example
function myFunc (){
    // But what if we make a function and return that function.
    function myFunc2(name){
        let var1 =  (`Hello World with ${name}`)
        return var1
    }
    return myFunc2
}

const ans = myFunc();
// Inside here that func is stored in the variable name "ans", We can easily acces that function by putting ()
console.log(ans("Abbas"));