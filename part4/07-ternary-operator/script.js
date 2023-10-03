const age = 34;

if (age >= 18) {
  console.log('you can vote');
} else {
  console.log('you cannot vote');
}

// using ternary operator
age >= 18 ? console.log('you def can vote') : console.log('def cannot vote');

// assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;

// console.log(canVote);

// multiple statements

const auth = true;
// let redirect

// if (auth) {
//   alert('welcome to dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('access denied');
//   redirect = '/login';
// }

// shorter version
// const redirect = auth
//   ? (alert('welcome to dashboard'), '/dashboard')
//   : (alert('access denied'), '/login');

// console.log(redirect);

// if there is no "else"
// if auth is false, we don't see anything
auth ? console.log('welcome to dashboard') : null;
// even shorter
auth && console.log('welcome friend');
// ^^ use this a lot
