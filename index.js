
const TelegramBot = require('node-telegram-bot-api');
const token = '1671846956:AAH2sMEv7ojBXEwZNHE3ZK9aHG_sCckChXc';
const bot = new TelegramBot(token, {polling: true});

function botsend(){
  bot.on('message', (msg) => {
        console.log(msg);
        //type other code here
        const chatId = '1164330043';
        const text = 'test';
        bot.sendMessage(chatId, 'Received your message: '+text);
      });
};
      
botsend();