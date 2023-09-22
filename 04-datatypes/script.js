// string
const firstName = 'Miku';
// const output = firstName;
// console.log(output, typeof output);
// Miku string

// number
const age = 22;
const temp = 98.8;
// const output = temp;
// console.log(output, typeof output);
// 98.8 number

// boolean
const passedTest = true;
// const output = passedTest;
// console.log(output, typeof output);
// true boolean

// null
const aptNumber = null;
// const output = aptNumber;
// null has type object because of mistake, refer to docs
// console.log(output, typeof output);
// null object

// you don't usually set things to undefined

// symbol
const id = Symbol('id');
// const output = id;
// console.log(output, typeof output);
// Symbol(id) symbol

// bigInt
const n = 90081882349881n;
// const output = n;
// console.log(output, typeof output);
// 90081882349881n bigint

// reference types

const quints = [1, 2, 3, 4, 5];
// const output = quints;
// console.log(output, typeof output);
// [ 1, 2, 3, 4, 5 ] object

const person = {
  name: 'Ichika',
};
// const output = person;
// console.log(output, typeof output);
// { name: 'Ichika' } object

function sayHi() {
  console.log('wsp');
}
// const output = sayHi;
// console.log(output, typeof output);
// [Function: sayHi] function
/* it's still an object, it's just defined as a 
function object */
