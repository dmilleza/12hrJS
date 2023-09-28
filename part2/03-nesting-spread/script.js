let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries)

// x = fruits[3][1]
// blueberry

const allFruits = [fruits, berries];
// [
//     [ 'apple', 'pear', 'orange' ],
//     [ 'strawberry', 'blueberry', 'raspberry' ]
//   ]
x = allFruits[1][0];
// strawberry

// adds array to array with individual elements
x = fruits.concat(berries);
// [ 'apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry' ]

// spread operator, used with arrays and more with objects
x = [...fruits, ...berries];
// [ 'apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry' ]

x = [...fruits, berries];
// [
//     'apple',
//     'pear',
//     'orange',
//     [ 'strawberry', 'blueberry', 'raspberry' ]
//   ]

// flatten array
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]

// static methods on array object

// checks to see if something is an array
x = Array.isArray(fruits);
// true

x = Array.from('12345');
// [ '1', '2', '3', '4', '5' ]

// create an array from a set of values
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a,b,c);
// [ 1, 2, 3 ]

console.log(x);
