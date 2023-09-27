/* create variable called x to be random between 1 and 100, and
create variable called y to be random between 1 and 50. Create 
variable for the sum, difference, product, quotient, and remainder
of x and y. Log the output in a string that shows the two numbers
of x and y along with the operator and result */

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

console.log(`${x} + ${y} = ${x + y}`);
// 45 + 48 = 93

console.log(`${x} - ${y} = ${x - y}`);

console.log(`${x} * ${y} = ${x * y}`);

console.log(`${x} / ${y} = ${Math.floor(x / y)}`);

console.log(`${x} % ${y} = ${x % y}`);
