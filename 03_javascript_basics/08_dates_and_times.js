// Basic operations with dates and times
let val;
const today = new Date();
val = today;
console.log(val);
console.log(typeof val); // object
let birthday = new Date('1981-12-01 11:25:00');
val = birthday;
console.log(val);
console.log(val.getMonth()); // 11 - zero based, so 11 == December
console.log(val.getDate());
console.log(val.getDay()); // 0 - Sunday, 1 - Monday, ..., 6 - Saturday
console.log(val.getFullYear());
console.log(val.getHours());
console.log(val.getMinutes());
console.log(val.getSeconds());
console.log(val.getMilliseconds());
console.log(val.getTime()); // milliseconds since January 1, 1970
console.log(val.toDateString()); // Sun Dec 01 1981
console.log(val.toTimeString()); // 11:25:00 GMT+0100 (Central European Standard Time)
console.log(val.toLocaleString()); // 1.12.1981, 11:25:00 AM
val.setMonth(2); // March
val.setDate(12);
val.setFullYear(1982);
val.setHours(0);
val.setMinutes(0);
val.setSeconds(0);
val.setMilliseconds(0);
console.log(val);
