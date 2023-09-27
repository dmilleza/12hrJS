// take the variable "myString" and capitalize the first
// letter of the word. Put the result in a variable called
// "myNewString"

const myString = 'quintuplet';
let myNewString;

// 1st method
// gets first letter
const s = myString[0];

// turns it into uppercase
const cap = s.toUpperCase();

// replaces first letter with uppercased letter
myNewString = myString.replace('q', cap);

// 1st solution
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// 2nd solution
myNewString = myString[0].toUpperCase() + myString.substring(1);

// 3rd solution
myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
