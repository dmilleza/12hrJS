let x;

const name = 'Asuna';
const age = 15;

// template literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(x);
// Hello, my name is Asuna and I am 15 years old.

// string properties and methods

let s = 'Hello World';
// turns into object = new String("Hello World")
x = s.length - 1;
// console.log(x);
// 11

s = new String('Hello World');
x = typeof s;
// console.log(x);
// object

// acess value by key
x = s[0];
// H

x = s.__proto__;
// console.log(x);

x = s.toUpperCase();
// HELLO WORLD

x = s.charAt(0);
// same as x = s[0]

x = s.indexOf('l');
// 2

// string inside the string
x = s.substring(0, 4);
// Hell

// with slice, we can start with negative numbers
x = s.slice(-10, -4);
// ello W

// removes white spaces at beginning and end
x = '     jello';
x = x.trim();
// jello

x = s.replace('World', 'Everyone');
// Hello Everyone

// returns true or false if a string is found within
// the string
x = s.includes('orld');
// true

// gets true primitive of string object
x = s.valueOf();
// Hello World

x = s.split(' ');
// [ 'Hello', 'World' ]
console.log(x);
