// Creating elements
const container = document.querySelector('#container');
container.style.backgroundColor = '#eee';
const p = document.createElement('p');
p.className = 'my-paragraph';
p.setAttribute('title', 'This is a paragraph');
p.appendChild(
  document.createTextNode(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta facere aperiam, nesciunt amet culpa doloremque error hic porro beatae.'
  )
);
container.appendChild(p);
alert('Before changing paragraph textContent');
p.innerText = 'This is a paragraph';

// Removing and replacing elements
const h2 = document.createElement('h2');
h2.classList.add('test');
h2.getAttribute('title');
h2.setAttribute('title', 'This is a h2');
h2.hasAttribute('title');
h2.removeAttribute('title');
h2.appendChild(document.createTextNode('This is a h2'));
alert('Before replacing paragraph with h2');
container.replaceChild(h2, p);
h2.classList.remove('test');
alert('Before removing container content');
h2.remove();
// container.removeChild(h2);
