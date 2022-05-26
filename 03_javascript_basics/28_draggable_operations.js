const onDragStart = (event) => {
  const element = event.target;
  if (element.innerText === '') {
    return;
  }

  const dt = event.dataTransfer;

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 50;

  const ctx = canvas.getContext('2d');
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();
  dt.setDragImage(canvas, 25, 25);

  dt.setData('text/plain', 'Just Text');
  dt.setData('text/uri-list', 'Red|Green|Blue|Yellow');

  dt.effectAllowed = 'copy';
};

const onDragEnd = (event) => {
  const element = event.target;
  element.innerText = '';
};

dragMe = document.querySelector('#drag-me');
dragMe.addEventListener('dragstart', onDragStart);
dragMe.addEventListener('dragend', onDragEnd);

const onDragEnter = (event) => {
  //   console.log('Drag enter');
  event.preventDefault();
};

const onDragOver = (event) => {
  //   console.log('Drag over');
  event.preventDefault();
};

const dragLeave = (event) => {
  //   console.log('Drag leave');
};

const dragDrop = (event) => {
  //   console.log('Drag drop');
  const dt = event.dataTransfer;
  const element = event.target;
  const id = element.id;
  if (id === 'place-text-here' && dt.types.includes('text/plain')) {
    const text = document.createElement('p');
    text.innerText = dt.getData('text/plain');
    element.appendChild(text);
  } else if (id === 'place-list-here' && dt.types.includes('text/uri-list')) {
    const listItems = dt.getData('text/uri-list');
    const list = document.createElement('ul');
    list.className = 'list';
    listItems.split('|').forEach((item) => {
      const listItem = document.createElement('li');
      listItem.innerText = item;
      list.appendChild(listItem);
    });
    element.appendChild(list);
  }
  event.preventDefault();
};

const dropAreas = document.querySelectorAll('.drop-area');
dropAreas.forEach((dropArea) => {
  dropArea.addEventListener('dragenter', onDragEnter);
  dropArea.addEventListener('dragover', onDragOver);
  dropArea.addEventListener('dragleave', dragLeave);
  dropArea.addEventListener('drop', dragDrop);
});
