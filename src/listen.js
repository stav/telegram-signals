const { NewMessage } = require('telegram/events');
const chats = require('./chats');

function parseMessage(message) {
  const re = /XAUUSD (?<type>BUY|SELL)\s+ENTRADA: (?<price>[\d.]+)\s+SL: (?<sl>[\d.]+)\s+(?<tps>.+)/s;
  try {
    const m = message.match(re).groups;
    const tps = m.tps.split('\n').map(tp => +tp.trim().match(/[\d.]+$/)[0]);
    console.log(m.type, 'GOLD', '@', m.price, 'unless', m.sl, 'tps', tps);
  }
  catch (e) { }
}

async function handler(event) {
  console.log();
  if ('message' in event) {
    const m = event.message;
    const message = m.message.replace(/\s+/g, ' ');
    const sender = await m.getSender();
    const name = sender.username || sender.title;
    const date = new Date(m.date * 1000);
    console.log(event.chatId, date, name, '|', message);
    if (event.chatId === -1001235920908 ) {
      parseMessage(m.message)
    }
  }
  else {
    console.warn(event)
  }
}

module.exports = async function (client) {

  const me = await client.getMe();
  const username = me.username ? `(${me.username})` : ''
  console.log('Logged in as', me.firstName, username)
  client.addEventHandler(handler, new NewMessage({ chats }));
  console.info('Listening', client.session.save(), chats);

}
