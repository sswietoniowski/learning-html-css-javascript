// Event Listeners & the Event Object

function onClick(event) {
  event.preventDefault(); // use # symbol inside href to prevent default behavior
  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.className);
  console.log(event.target.classList);
  event.target.innerText = 'You clicked me!';
  console.log(event.timeStamp);
  console.log(event.clientX);
  console.log(event.clientY);
  console.log(event.offsetX);
  console.log(event.offsetY);
}
document.querySelector('#btn').addEventListener('click', onClick);
