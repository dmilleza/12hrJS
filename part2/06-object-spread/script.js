// object constructor
const todo = new Object()
todo.id = 1
todo.name = 'buy milk'

// spread operator is similar to arrays

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

let obj3 = { obj1, obj2 }
// { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }

// if you want to take properties in obj1 and obj2 and
// combine them into a single object3, use spread

obj3 = { ...obj1, ...obj2 }
// { a: 1, b: 2, c: 3, d: 4 }

const todos = [
  { id: 1, name: 'buy milk' },
  { id: 2, name: 'buy cheese' },
  { id: 3, name: 'buy juice', type: 'fun' },
]

let x = todos[0].name
// buy milk

// get keys of an object and put them into an array
x = Object.keys(todos[0])
// [ 'id', 'name' ]

// get length of an object, number of properties
x = Object.keys(todos[0]).length
// 2

// get values of an object and put them into an array
x = Object.values(todos[1])
// [ 2, 'buy cheese' ]

// get array of key/value pairs
x = Object.entries(todos[2])
// [ [ 'id', 3 ], [ 'name', 'buy juice' ], [ 'type', 'fun' ] ]

// gives boolean indicating if the object has specific property
x = todos[0].hasOwnProperty('name')
// true
