const { TelegramClient } = require('telegram');
const auth = require('./auth');

module.exports = function (botOrUser) {
  return new TelegramClient(
    auth.session[botOrUser],
    auth.apiId,
    auth.apiHash,
    auth.config
  )
}
