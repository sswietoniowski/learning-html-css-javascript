db = db.getSiblingDB('supportdesk');

db.createUser({
  // file deepcode ignore NoHardcodedCredentials: this is just a demo code
  user: 'supportdesk',
  // file deepcode ignore NoHardcodedPasswords: this is just a demo code
  pwd: 'Password',
  roles: [
    {
      role: 'readWrite',
      db: 'supportdesk',
    },
  ],
});

db.createCollection('users');

db.createCollection('tickets');

db.createCollection('notes');
