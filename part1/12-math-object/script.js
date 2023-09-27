let x

x = Math.sqrt(9)
// 3

x = Math.abs(-10)
// 10

x = Math.round(4.2)
// 4

// rounds up
x = Math.round(4.6)
// 5

// round down
x = Math.floor(4.9)
// 4

x = Math.pow(2, 3)
// 8

// return the smallest of two or more numbers
x = Math.min(4, 6 , 3)
// 3

x = Math.max( 45, 65, 24, 9)
// 65

// gets random number between 0 and 10
x = Math.random() * 10

// to get whole number using random, use floor
x = Math.floor(Math.random() * 10)

// add a 1 at the end to exclude between 0 and 1
x = Math.floor(Math.random() * 100 + 1)

console.log(x);