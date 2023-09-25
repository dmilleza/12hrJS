// take the variable "myString" and capitalize the first
// letter of the word. Put the result in a variable called
// "myNewString"

const myString = 'quintuplet';

// gets first letter
const s = myString[0];

// turns it into uppercase
const cap = s.toUpperCase();

// replaces first letter with uppercased letter
const myNewString = myString.replace('q', cap);

console.log(myNewString);
