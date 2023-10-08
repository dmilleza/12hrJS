const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map((num) => num * 2)
// [ 2, 4, 6, 8, 10 ]

const quints = [
  { name: 'ichika', hairColor: 'pink' },
  { name: 'nino', hairColor: 'pink' },
  { name: 'miku', hairColor: 'brown' },
  { name: 'yotsuba', hairColor: 'orange' },
  { name: 'itsuki', hairColor: 'red' },
]

// create an array of quint names
const names = quints.map((item) => item.name)
// [ 'ichika', 'nino', 'miku', 'yotsuba', 'itsuki' ]
console.log(names)

// create an array with just hairColor
const colors = quints.map((quint) => {
  return {
    hairColor: quint.hairColor,
  }
})
console.log(colors)
// [
//     { hairColor: 'pink' },
//     { hairColor: 'pink' },
//     { hairColor: 'brown' },
//     { hairColor: 'orange' },
//     { hairColor: 'red' }
//   ]

// chain map methods
const squareAndDouble = numbers
  .map((item) => Math.sqrt(item))
  .map((item) => item * 2)

// chaining different methods
const evenDoubled = numbers
  .filter((item) => item % 2 === 0)
  .map((item) => item * 2)
