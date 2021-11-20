// https://gram.js.org/getting-started/authorization#logging-in-as-a-user

const input = require('input');

const Client = require('./client');
const Listen = require('./listen');

(async () => {

  const client = Client('user');

  await client.start({
    phoneNumber: async () => await input.text('Phone:'),
    phoneCode: async () => await input.text('Code:'),
    password: async () => await input.text('Password:'),
    onError: console.error,
  });

  await Listen(client);

})();
