// loop through arrays
const quints = ['yotsuba', 'itsuki', 'ichika', 'miku', 'nino']

// for (let i = 0; i < quints.length; i++) {
//   console.log(quints[i])
// }

// shorter way, cleaner and more modern
// for (const quint of quints) {
//   console.log(quint)
// }
// yotsuba
// itsuki
// ichika
// miku
// nino

// const users = [{ name: 'kirito' }, { name: 'asuna' }, { name: 'klein' }]
// for (const user of users) {
//   console.log(user.name)
// }
// kirito
// asuna
// klein

// loop over strings
const str = 'ohai'
// for (const letter of str) {
//   console.log(letter)
// }
// o
// h
// a
// i

// loop over maps
const map = new Map()
map.set('name', 'Yotsuba')
map.set('age', 22)
for (const [key, value] of map) {
  console.log(key, value)
}
// name Yotsuba
// age 22
