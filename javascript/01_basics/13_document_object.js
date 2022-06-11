let val;

val = document;
val = document.all;
val = document.all[2]; // returns the third element in the document
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

console.log(val);

val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
// val = document.scripts[2].getAttribute('src');

let elementArr = Array.from(document.scripts);
for (const element of elementArr) {
  console.log(element.getAttribute('src'));
}

console.log(val);
