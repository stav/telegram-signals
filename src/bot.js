// https://gram.js.org/getting-started/authorization#logging-in-as-a-bot

const dotenv = require('dotenv');

const Client = require('./client');
const Listen = require('./listen');
const auth = require('./auth');

dotenv.config(); // loads .env into process.env

(async () => {

  const client = Client('bot');

  await client.start({ botAuthToken: auth.token });

  await Listen(client);

})();
