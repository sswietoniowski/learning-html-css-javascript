// OBSERVER PATTERN

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (observer) {
    this.observers.push(observer);
    console.log(`Subscribed ${observer.name}`);
  },

  unsubscribe: function (observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log(`Unsubscribed ${observer.name}`);
  },

  fire: function () {
    this.observers.forEach((observer) => observer.call());
  },
};

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurrentMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', () => {
  click.subscribe(getCurrentSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurrentSeconds);
});
document.querySelector('.sub-m').addEventListener('click', () => {
  click.subscribe(getCurrentMinutes);
});
document.querySelector('.unsub-m').addEventListener('click', () => {
  click.unsubscribe(getCurrentMinutes);
});
document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});

// Click handlers
const getCurrentMilliseconds = () => {
  const date = new Date();
  console.log(date.getMilliseconds());
};

const getCurrentSeconds = () => {
  const date = new Date();
  console.log(date.getSeconds());
};

const getCurrentMinutes = () => {
  const date = new Date();
  console.log(date.getMinutes());
};
