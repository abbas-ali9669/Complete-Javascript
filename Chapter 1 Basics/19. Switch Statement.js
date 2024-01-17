// In this topic we will learn about how we can use the switch statement.

// First we will see using if else statement
let days = 0;

if(days === 0){
    console.log("Sunday");
}
else if(days === 1){
    console.log("Monday");
}
else if(days === 2){
    console.log("Tuesday");
}
else if(days === 3){
    console.log("Wednesday");
}
else if(days === 4){
    console.log("Thursday");
}
else if(days === 5){
    console.log("Friday");
}
else if(days === 6){
    console.log("Saturday")
}
else{
    console.log("Invalid Day")
}


// Now lets do this with the switch statement
let days2 = 1;

switch(days2){
    // We have to put the "break" after where every case ends.
    // This is how the switch statement works.
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}


// For practices with the stings
let name = "abbas";

switch(name){
    case "Abbas":
        console.log("Correct Name");
        break;
    case "abbas":
        console.log("Correct but 'a' is small");
        break;
    case "Ali":
        console.log("This is the last Name");
        break;
    case "ali":
        console.log("Also correct but last name with small 'a'");
        break;
    default:
        console.log("Input Correct Name.");
}