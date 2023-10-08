/* print the numbers from 1 to 100
for multiples of three, print 'fizz' instead of number
for multiples of five, print 'buzz'
for numbers which are multiples of both three and five,
print 'fizzbuzz' */

for (let i = 1; i <= 20; i++) {
  // can also use (i % 15)
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('fizzbuzz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(i)
  }
}
