// values are stored on the stack
const name = 'Zerotwo';
const age = 22;

// reference values are stored on the heap
const person = {
  name: 'Ichigo',
  age: 22,
};

let newName = name;
// console.log(name, newName);
// Zerotwo Zerotwo

newName = 'Asuna';
// console.log(name, newName);
// Zerotwo Asuna

let newPerson = person;
// console.log(person, newPerson);
// { name: 'Ichigo', age: 22 } { name: 'Ichigo', age: 22 }

newPerson.name = 'Kyoko';
// console.log(person, newPerson);
// { name: 'Kyoko', age: 22 } { name: 'Kyoko', age: 22 }
/* since person and newPerson have the same reference,
they will have the same value */
