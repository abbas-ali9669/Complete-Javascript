// In this topic we will learn about how we can write the code for elif statement. Javascript does not support elif (keyword) statement.
// We have to write else if statement for writing the elif statement.
// Elif statement is all about even if you have multiple conditions to implement.

// Lets take an example of the temperature.
let temp = 31;

if(temp < 0){
    console.log("Whether is too cold...!!!");
}
else if(temp < 15){
    console.log("Whether is also too cold...!!!");
}
else if(temp < 30){
    console.log("Whether is very bearable.");
}
else if(temp < 45){
    console.log("Whether is too much hot...!!!");
}
else{
    console.log("Whether is too much hot can't Control.")
}

// Case 2
let temp2 = 21;

if(temp2 > 40){
    console.log("Whether is too much hot...!!!");
}
else if(temp2 > 30){
    console.log("Whether is also very hot...!!!");
}
else if(temp2 > 20){
    console.log("Whether is very good like normal Whether.")
}
else if(temp2 > 10){
    console.log("Whether is very very cold...!!!")
}
else{
    console.log("Whether is very cold Can't bearable...!!!")
}
