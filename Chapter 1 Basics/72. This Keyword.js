// In this topic we will learn about this keyword. That how this keyword works.

"use strict"
// What if we print this keyword directly.
console.log(this);

// If you directly print this keywrord, then it will print the window object.
console.log(window);
// NOTE - "window" and "this" keyword is the same.

console.log(this === window);


// Lets take the example of function.
function myFunc(){
    // "use strict"
    console.log(this);
}

myFunc()
// window.myFunc();
// But here we can call our function with the window object.

// NOTE - By doing this sometime it will create the big problem for us.
// How to prevent this error ?
// Use "use strict" keyword in the function or on the top of the file. By using "use strict" we can prevent this type of error, confussions.