let amount = '100';
// console.log(amount, typeof amount);
// 100 string

// 1st way to convert string to number
amount = parseInt(amount);

// 2nd way to convert string to number
amount = +amount;

// 3rd way to convert string to number
amount = Number(amount);
// all have console.log(amount, typeof amount)
// equal to "100 number"

// 1st way to covert number to string
amount = amount.toString();
// console.log(amount, typeof amount);
// 100 string

// 2nd way to convert number to string
amount = String(amount);
// console.log(amount, typeof amount);

// convert string with decimal to number
let decimal = '99.7';
decimal = parseFloat(decimal);
// console.log(decimal, typeof decimal);
// 99.7 number

// convert number to boolean
decimal = Boolean(decimal);
// console.log(decimal, typeof decimal);
// true boolean

let zero = 0;
zero = Boolean(zero);
// console.log(zero, typeof zero);
// false boolean

// five ways to end up with NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);
// let hello = 'wsp';
// console.log(parseInt(hello));
