let d;

d = new Date();
// Tue Sep 26 2023 13:58:49 GMT-0700 (Pacific Daylight Time)

// we can turn the date object into a string
d = d.toString();

d = new Date(2021, 6, 10);
// Sat Jul 10 2021 00:00:00 GMT-0700 (Pacific Daylight Time)
// the reason it says July is because the month is 0 based/index

d = new Date(2021, 6, 10, 14, 34, 12);
// Sat Jul 10 2021 14:34:12 GMT-0700 (Pacific Daylight Time)

// instead of passing in arguments, you can pass in many types
// of strings formatted in different ways
d = new Date('2023-07-11');
// Mon Jul 10 2023 17:00:00 GMT-0700 (Pacific Daylight Time)

d = new Date('2023-07-10T14:28:49');
// Mon Jul 10 2023 14:28:49 GMT-0700 (Pacific Daylight Time)

d = new Date('07/10/2022 15:15:30');
// Sun Jul 10 2022 15:15:30 GMT-0700 (Pacific Daylight Time)

d = new Date('12-10-2034');
// Sun Dec 10 2034 00:00:00 GMT-0800 (Pacific Standard Time)

// Unix timestamp
d = Date.now();
// 1695762824664

// get timestamp of a specific date
d = new Date('07-10-2023 12:30:00');
d = d.getTime();
// 1689017400000 will be consistent

// create date object from a timestamp
d = new Date(1695766329805);
// Tue Sep 26 2023 15:12:09 GMT-0700 (Pacific Daylight Time)

// get timestamp in seconds instead of milliseconds
d = Math.floor(Date.now() / 1000);
// 1695767098
console.log(d);
