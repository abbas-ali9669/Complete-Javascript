// In this topic we will learna bout how we can learn the concept of callback function.
// callback means passing function into the function
// First we will see the sychronous callback then we will learn asynchronous callbacks.

// Example 1.
// function myFunc(callback){
//     console.log("This is myFunc 1");
//     callback()
// }

// function myFunc2(){
//     console.log("This is myFunc 2");
// }

// myFunc(myFunc2)
// Or we can also define myFunc 2 inside myFunc.
// myFunc(()=>{
//     console.log("This is myFunc 2")
// })

// Example 2.

function additionCheck(n1, n2, onSuccess, onFail){
    // This is how in the javascript we check for datatypes.
    if (typeof n1 === "number" && typeof n2 === "number"){
        onSuccess(n1, n2)
    }
    else{
        onFail()
    }
};

// function myFunc3(n1, n2){
//     console.log(n1+n2);
// }

// function myFunc4(){
//     console.log("Wrong Input");;
// }
// additionCheck("3", 5, myFunc3, myFunc4)

// Or else we can also do that.
additionCheck(5, 5, (n1, n2)=>{
    console.log(n1 + n2);
}, ()=>{
    console.log("Wrong Input");
})