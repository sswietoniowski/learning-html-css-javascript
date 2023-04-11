db = db.getSiblingDB('supportdesk');

db.createUser({
  user: 'supportdesk',
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
