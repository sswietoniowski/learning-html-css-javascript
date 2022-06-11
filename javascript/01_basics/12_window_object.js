// Window Object represents the window in which the webpage is loaded.
// The window object is the top level object in the browser.
// The window object is the global object.
// The window object is the parent of all other objects.
// The window object is the root of the browser's object hierarchy.

//window.alert('Hello World');
// alert('Hello World');

// const input = prompt();
// console.log(input);

// if (confirm('Are you sure')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// alert, prompt, confirm are not really used anymore

let val = window.outerHeight;
console.log(val);

// Location Object
val = window.location;
console.log(val);
// window.location.href = 'http://google.com';
// window.location.reload();

// History Object
val = window.history;
console.log(val);
// window.history.go(-1);
console.log(window.history.length);

// Navigator Object
val = window.navigator;
console.log(val);
val = window.navigator.appName;
console.log(val);
val = window.navigator.appVersion;
console.log(val);
val = window.navigator.userAgent;
console.log(val);
val = window.navigator.platform;
console.log(val);
val = window.navigator.vendor;
console.log(val);
val = window.navigator.language;
console.log(val);
