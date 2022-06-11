// Single elements selectors
// document.getElementById('my-id');
// document.getElementById('my-id').id;
// document.getElementById('my-id').className;
// document.getElementById('my-id').innerHTML;
// document.getElementById('my-id').style.color;
// document.getElementById('my-id').style.backgroundColor;
// document.getElementById('my-id').style.fontSize;
// document.getElementById('my-id').style.fontFamily;
// document.getElementById('my-id').textContent = 'Hello World';
// document.getElementById('my-id').innerHTML = 'Hello World';
// document.getElementById('my-id').innerText = 'Hello World';
// const myElement = document.getElementById('my-id'); // more efficient
// document.querySelector('#my-id'); // newer, way more powerful, returns the first element that matches the selector

// Multiple elements selectors
// const items = document.getElementsByClassName('my-class');
// document.getElementsByTagName('p'); // returns a HTMLCollection
// document.querySelectorAll('.my-class'); // returns a node list!
// const liOdd = document.querySelectorAll('li:nth-child(odd)');

// Traversing the DOM
let val;
const list = document.querySelector('ul');
const listItem = document.querySelector('ul li:first-child');
val = listItem;
val = listItem.parentNode;
for (const node of list.childNodes) {
  console.log(node);
}
val = Array.of(list.children);
val.forEach(function (node) {
  console.log(node[0].nodeName);
  console.log(node[1].nodeType);
});
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

console.log(list.firstChild);
list.firstElementChild.style.color = 'red'; // lastElementChild, lastChild
console.log(val);
// list.parentNode.style.backgroundColor = '#ccc';
// list.parentElement.style.backgroundColor = '#0f0';
// listItem.nextSibling;
// listItem.nextElementSibling;
// listItem.previousSibling;
// listItem.previousElementSibling;
// node vs element - they are different!
