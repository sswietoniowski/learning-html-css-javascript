// MEDIATOR PATTERN

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const ChatRoom = function () {
  this.users = []; // List of users
};

ChatRoom.prototype = {
  register: function (user) {
    this.users.push(user);
    user.chatroom = this;
  },
  send: function (message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i] !== from) {
          this.users[i].receive(message, from);
        }
      }
    }
  },
};

const chatroom = new ChatRoom();
const john = new User('John');
const jane = new User('Jane');
const mark = new User('Mark');

chatroom.register(john);
chatroom.register(jane);
chatroom.register(mark);

john.send('Hello everyone!', mark);
jane.send('Hi Mark!');
mark.send('Hi John!', john);
