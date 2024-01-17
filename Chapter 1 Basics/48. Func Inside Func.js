// In this topic we will learn about how we can make a function inside function.

// We can also make our main function whatever we want func declaring, function expression or arrow function.

function main_func() {
    // We can make function by our choice, no matter which function declaring approach you are using. func declaring, function expression or arrow function.

    // First we will make function declaration
    function func1() {
        console.log("Hello World")
    }

    // Now we will declare function expression 
    const func2 = function (num1, num2){
        return num1 + num2;
    }

    // And in the last we will make arrow function
    const func3 = (num) => {
        return num**2;
    }
    // Arrow shorthand
    const multiply = (num1, num2) => num1 * num2

    console.log("Main Function Executes");

    // Now for executing inner function we have to call these function from inside the function.
    func1();
    console.log(func2(2,2));
    console.log(func3(3));
    console.log(multiply(2,3))
}

main_func()