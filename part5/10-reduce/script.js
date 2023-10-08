const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
// 55

const sum2 = numbers.reduce((acc, curr) => acc + curr, 10)
// 65

// using a for of loop
const sum3 = () => {
  let start = 0
  for (const num of numbers) {
    start += num
  }
  return start
}
// 55

const cart = [
  { id: 1, name: 'product 1', price: 100 },
  { id: 2, name: 'product 2', price: 150 },
  { id: 3, name: 'product 3', price: 189 },
]

const total = cart.reduce((acc, curr) => acc + curr.price, 0)
//439

console.log(total)
