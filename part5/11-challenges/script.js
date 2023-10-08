const people = [
  {
    firstName: 'eren ',
    lastName: 'yaeger',
    email: 'eren@gmail.com',
    phone: '111-1111-111',
    age: 39,
  },
  {
    firstName: 'rudeus',
    lastName: 'greyrat',
    email: 'rudeus@gmail.com',
    phone: '222-2222-222',
    age: 25,
  },
  {
    firstName: 'yotsuba',
    lastName: 'nakano',
    email: 'yotsuba@gmail.com',
    phone: '444-4444-444',
    age: 45,
  },
  {
    firstName: 'marin',
    lastName: 'kitagawa',
    email: 'marin@gmail.com',
    phone: '333-3333-333',
    age: 19,
  },
  {
    firstName: 'mikasa',
    lastName: 'ackerman',
    email: 'mikasa@gmail.com',
    phone: '555-5555-555',
    age: 23,
  },
]
// challenge 1
// returns array with people 25 and under with name and email only
const youngPeople = people
  .filter((item) => item.age <= 25)
  .map((item) => ({
    name: `${item.firstName}, ${item.lastName}`,
    email: item.email,
  }))

// challenge 2
// add all positive numbers in the array
const numbers = [2, -30, 50, 20, -12, -9, 7]

const pos = numbers
  .filter((item) => item >= 1)
  .reduce((acc, curr) => {
    acc + curr, 0
  })
// 79

// challenge 3
// create new array with the words from words array with first letter capitalized
const words = ['coder', 'programmer', 'developer']

// capitalize first letter fast
const capitalizedWords = words.map(
  (item) => item[0].toUpperCase() + item.slice(1)
)
// [ 'Coder', 'Programmer', 'Developer' ]

// slow way to do above code block
// let capitalizedWords = []
// for (const letter of words) {
//   const s = new String(letter)
//   let lower = s.charAt(0)
//   let upp = lower.toUpperCase()
//   let uppered = s.replace(lower, upp)
//   capitalizedWords.push(uppered)
// }
// console.log(capitalizedWords)
