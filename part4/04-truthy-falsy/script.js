// falsy values:
// false
// 0
// "" or '' (empty string)
// null
// undefined
// NaN

// truthy values:
// anything not falsy
// true
// '0'
// ' '
// 'false'
// []
// {}
// function() {}

const x = 8;
// console.log(Boolean(x));
// true

const y = null;
// console.log(Boolean(y));
// false

// truthy and falsy caveats
const children = 0;

if (children) {
  console.log(`you have ${children} children`);
} else {
  console.log('enter number of children');
}
// enter number of children
// to get "you have 0 children", change to "if (children !== undefined)"

// checking for empty arrays
const posts = [];

if (posts) {
  console.log('list posts');
} else {
  console.log('no posts');
}
// list posts
// to validate an empty array, change to "if (posts.length > 0)"

// checking for empty objects
const user = {}

if (user) {
    console.log('list user');
} else {
    console.log('no user');
}
// list user
// to validate empty object, change to "if (Object.keys(user).length > 0)"
// we can use length because Object.keys() returns an array

// loose equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);
// all return true

// strict equality
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
// all return false
