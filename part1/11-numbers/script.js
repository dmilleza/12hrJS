let num = 55;
let x;

// to get the length of a number, turn it into a string first
x = num.toString().length;
// 2

// toFixed() allows you to specify the number of decimal points,
// however it returns a string
num = 55.8548;
x = Number(num.toFixed(2));
// 55.85

// gives you the number of digits
x = num.toPrecision(3);
// 55.9

// gives number in specified language, here is Egypt
num = 4;
x = num.toLocaleString('ar-EG');
// ٤

// gets the largest possible number for the number type
x = Number.MAX_VALUE
// 1.7976931348623157e+308

// gets the smallest possible number for the number type
x = Number.MIN_VALUE
// 5e-324
console.log(x);
