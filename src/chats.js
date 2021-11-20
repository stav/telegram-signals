/**
 ** Example .env
 **
 ** CHATS="1 2 3 -1004"
 **/
const dotenv = require('dotenv');

dotenv.config(); // loads .env into process.env

const chatsString = process.env.CHATS || ''

module.exports = chatsString.split(/\s+/).map(id => parseInt(id)).filter(Boolean)
