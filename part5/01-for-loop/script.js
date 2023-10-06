// for ([initial] ; [condition] ; [increment]) { statement}

// use let instead of const because i changes
// for (let i = 0; i <= 3; i++) {
//   console.log(i);
// }
// 0
// 1
// 2
// 3

// for (let i = 0; i <= 3; i++) {
//   if (i === 2) {
//     console.log('2 is lucky');
//   }
//   console.log(i);
// }
// 0
// 1
// 2 is lucky
// 2
// 3

// for (let i = 0; i <= 3; i++) {
//   if (i === 2) {
//     console.log('2 is lucky');
//   } else {
//     console.log(i);
//   }
// }
// 0
// 1
// 2 is lucky
// 3

// nest loops
// for (let i = 1; i <= 3; i++) {
//   console.log(i);
//   for (let j = 1; j <= 2; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
// 1
// 1 * 1 = 1
// 1 * 2 = 2
// 2
// 2 * 1 = 2
// 2 * 2 = 4
// 3
// 3 * 1 = 3
// 3 * 2 = 6

// loop through array
const names = ['yotsuba', 'ichika', 'miku'];
for (let i = 0; i < names.length; i++) {
  names[i] === 'yotsuba'
    ? console.log('yotsuba is cool')
    : console.log(names[i]);
}
// yotsuba is cool
// ichika
// miku
