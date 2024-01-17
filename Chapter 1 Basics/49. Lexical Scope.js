// In this topic we will learn about the lexical scope and the lexical environemnt.
// LexicalScope - Mean where the function is defined.

const myVar = "value1";
// Example
function myApp(){
    // const myVar = "value1";
    // // What if we comment out this variable. And declare this into the global environment.
    const myFunc = function(){
        // const myVar = "value59";
        // What if we comment out this variable.
        
        // Q - How lexical Scope works ?
        // A - If we initialize our variable in some of the space, Then the lexical scope checks search the variable inside the function, whether the variable is defined or not. If not then they will check the function lexical environment, that where the function is defined, Again if not, then at the last it will check the the all function lexical environment, and if the variable is found inside the global scope, then it will grab the value and print it.

        function myFunc2(){
            console.log("Inside myFunc", myVar);
        }

        myFunc2();

        // In our case, The function named "myFunc2" checks inside of their own function. If not found then the javascript checks its lexical environment inside "myFunc". If not found then the javascript checks its lexical environment inside the function "myApp". If not found then the javascript check the leaxicl environemnt of "myApp". The 'myApp' fucntion is defined inside the gloabal environment, Then it will check its environemnt, that where the variable is defined. If found then they will print out, if not the error will occur. 
    }
    console.log(myVar)
    myFunc()

}
myApp();

// The function is defined here cleanly
const my_Var = "Value1"
function my_App() {
    // const myVar = "Value1"
    function my_Func() {
        // const myVar = "Value59"
        function my_Func2() {
            console.log("Inside myFunc2", my_Var)
        }
        my_Func2()
    }
    console.log(my_Var);
    my_Func();
}

my_App();



