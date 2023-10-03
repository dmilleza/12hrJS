// when using &&, everything has to be true
console.log(10 > 20 && 30 > 15);
// false

console.log(10 > 20 || 30 > 15);
// true

// && will return first falsy value or the last value
let a;

a = 10 && 20;
console.log(a);
// 20

a = 10 && 0 && 30;
console.log(a);
// 0

let posts = [];
// console.log(posts[0]);
// undefined;

// to avoid showing undefined for an empty post array, change to
// posts.length > 0 && posts[0]
posts = [];
posts.length > 0 && console.log(posts[0]);
// shows nothing, checks if something is there first because we don't
// want to display something that's not there

// || will return the first truthy value or the last value
let b;

b = 10 || 20;
// console.log(b);
// 10

b = 0 || 20;
// console.log(b);
// 20

// all falsy, so returns last
b = 0 || null || '' || undefined;
// console.log(b);
// undefined

// nullish coalescing operator
// ?? returns the right side operand when the left is either null or undefined
let c;

c = 10 ?? 20;
console.log(c);
// 10

c = null ?? 30;
console.log(c);
// 30
