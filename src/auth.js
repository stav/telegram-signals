const { StringSession } = require('telegram/sessions');
const dotenv = require('dotenv');

dotenv.config(); // loads .env into process.env

const session = {
  bot: new StringSession(process.env.BOTSESSION),
  user: new StringSession(process.env.USERSESSION),
}

module.exports = {
  token: process.env.TOKEN,
  apiId: +process.env.APIID,
  apiHash: process.env.APIHASH,
  session,
  config: { connectionRetries: 5 },
}
