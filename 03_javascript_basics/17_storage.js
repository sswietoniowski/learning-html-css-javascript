// set local storage item
localStorage.setItem('name', 'John Doe');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
localStorage.clear();
// set session storage item
sessionStorage.setItem('name', 'Alex Fox'); // cleared up after closing the browser
console.log(sessionStorage.getItem('name'));
