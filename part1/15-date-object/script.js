let x;

let d = new Date();

// get specific part of the date
x = d.getFullYear();
// 2023

x = d.getMonth();
// 8 (actually 9 but is zero based)

x = d.getDate();
// 26

x = d.getHours();
// 15

x = d.getMinutes();
// 44

x = d.getSeconds();
// 42

x - d.getMilliseconds();
// 57

// to construct a date from these methods
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
// 2023-9-26

x = Intl.DateTimeFormat('en-US').format(d);
// 9/26/2023
x = Intl.DateTimeFormat('en-GB').format(d);
// 26/09/2023

// get default locale
x = Intl.DateTimeFormat('default').format(d);
// 9/26/2023

// get month
x = Intl.DateTimeFormat('en-US', { month: 'long' }).format(d);
// September

// alternative way, newer way of doing things
x = d.toLocaleString();
// 9/26/2023, 3:53:09 PM
console.log(x);
