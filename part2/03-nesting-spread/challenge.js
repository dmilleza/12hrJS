// 1st challenge
const arr = [1, 2, 3, 4, 5];
// turn it into [6, 5, 4, 3, 2, 1, 0]

// cannot chain because push() returns a number
arr.unshift(0);
arr.push(6);
arr.reverse();

// 2nd challenge
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr2.shift(0);
const arr3 = [...arr1, ...arr2];

// 3rd challenge
console.log(arr3);
