// In this topic we will learn about how we can use the nested if else statement.
// Nested If Else - If Else statement inside the if else.
// We will understand the nested if else with the program example.
// We will make a game where user will input the numbe. If the number is correct, then we will print correct. Else, big number or small number

let winningNum = 19;
// For taking the userinput in javascript use "prompt()" function. Prompt function takes inout in the string. In our case we need an integer, so we will put the +mark before teh prompt function
let userInput = +prompt("Guess a number: ");

if (userInput === winningNum){
    console.log("YOHoooo...!!! you guess the correct number...")
}
else{
    // Now this is the nested if else.
    if (userInput > winningNum){
        console.log("You Guessed the Bigger Number...");
    }
    else{
        console.log("You Guessed the Smaller Number");
    }
}