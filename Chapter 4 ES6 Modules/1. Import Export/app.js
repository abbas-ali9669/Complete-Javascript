// In this topic we will learn avout how we can import and export the variable and function from one file to another.
// We oftenly do this for code maintenance. When the code get too much.
// Hwo do we import the function/variable from another file. (See firstName.js file)

// as keyword - If you have a big or larger name of you function, class or variable, then you can create your desired name by using "as" keyword.

import { firstName as fname} from "./utils/firstName.js";
import { age } from "./utils/age.js";
import myPerson2, { Person } from "./utils/Person.js";

// console.log(fname, age);

const person = new Person("Abbas", "Ali", 22);
// console.log(person)   // Now here the object created.
person.info()

// Export default
// const defaultPerson = new myPerson2("Abbas", "Ali", 22);
// console.log(defaultPerson)

console.log(myPerson2)
// Now here we have changed the defualt export from Person.js file. But we can use in this file by any name. It will always search for default if the name of module is changed.