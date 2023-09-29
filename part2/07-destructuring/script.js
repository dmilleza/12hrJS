const firstName = 'Yotsuba';
const lastName = 'Nakano';

// can type just the property if it's the same value as the
// variable value
const quint = {
  firstName,
  lastName,
};

// { firstName: 'Yotsuba', lastName: 'Nakano' }

// destructuring objects
const todo = {
  id: 1,
  title: 'get trash',
  user: {
    name: 'Ichika',
  },
};
const {
  id: hello,
  title,
  user: { name },
} = todo;

// console.log(hello, title, name);
// 1 get trash Ichika

// destructure arrays
const numbers = [23, 58, 34, 68];

// rest operator is the same as spread, gets rest of array
const [first, second, ...rest] = numbers;

// console.log(first, second, rest);
// 23 58 [ 34, 68 ]

console.log(rest);
