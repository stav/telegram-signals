/**
 ** Example .env
 **
 ** CHATS="1 2 3 -1004"
 **/

module.exports = process.env.CHATS.split(' ').map(id =>parseInt(id))