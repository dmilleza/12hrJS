// ||= assigns the right side value only if the left is a falsy value
let a = false;

if (!a) {
  a = 10;
}

// does same thing
a = a || 10;
// even shorter
a ||= 10;
console.log(a);
// 10

// &&= assigns the right side value only if the left is a truthy value
let b = 10;

if (b) {
  b = 20;
}

// does same thing
b = b && 20;
// even shorter
b &&= 20;
console.log(b);

// ??= assigns the right side value only if the left is null or undefined
let c = null;

if (c === null || c === undefined) {
  c = 20;
}

// does same thing
c = c ?? 20;

c ??= 20;
console.log(c);
