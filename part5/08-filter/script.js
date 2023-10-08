const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter((num) => num % 2 === 0)
// [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers)

const quints = [
  { name: 'ichika', hairColor: 'pink' },
  { name: 'nino', hairColor: 'pink' },
  { name: 'miku', hairColor: 'brown' },
  { name: 'yotsuba', hairColor: 'orange' },
  { name: 'itsuki', hairColor: 'red' },
]

const pink = quints.filter((quint) => quint.hairColor === 'pink')
console.log(pink)
