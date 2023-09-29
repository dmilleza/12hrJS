// to set default argument, use "=" after parameter
function registerUser(user = 'Miku') {
  return user + ' is registered';
}

// console.log(registerUser('Itsuki'));
// Itsuki is registered

// console.log(registerUser());
// Miku is registered

// rest parameter
function sum(...numbers) {
  return numbers;
}
// console.log(sum(1, 2, 3));
// [ 1, 2, 3 ]

function addEm(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
// console.log(addEm(1, 2, 3, 4, 5));
// 15

// objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Nino',
};
// console.log(loginUser(user));
// The user Nino with the id of 1 is logged in

// console.log(loginUser({ id: 2, name: 'Yotsuba' }));
// The user Yotsuba with the id of 2 is logged in

// arrays as params
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

// don't need to make into an array because rest operator turns it into array
getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
