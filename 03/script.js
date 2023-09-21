// variable naming conventions
// - only letters, numbers, underscores, and dollar signs
// - can't start with a number

let age = 27;

// re-assigning variables
age = 48;
console.log(age);
// 48

if (true) {
  age += 1;
}
console.log(age);
// 49

const arr = [1, 2, 3];
// cannot re-assign arr = [1, 2, 3, 4], will result in error
// need to use push method instead

const quint = {
  name: 'Yotsuba',
  height: 154,
};

// to add property to object, use dot notation
quint.number = 4;
console.log(quint);

// declare multiple values at once
let a, b, c;
const d = 10,
  e = 20,
  f = 30;
console.log(e);
// 20