let x;

// array literal
const numbers = [12, 45, 33, 29, 30];

// array constructor
const fruits = new Array('apple', 'grape', 'orange');

const mixed = [12, 'hi', true, null];

x = numbers[0];
// 12

x = numbers[2] + numbers[3];
// 62

x = `My favorite fruit is an ${fruits[2]}`;
// My favorite fruit is an orange

x = fruits.length;
// 3

// change a value in an array
fruits[2] = 'blueberry';
// [ 'apple', 'grape', 'blueberry' ]

// fruits.length = 2;
// [ 'apple', 'grape' ]

// add element to array
fruits[3] = 'strawberry';
console.log(fruits);
