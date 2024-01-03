const fs = require('fs');
const Eris = require('eris')
const tokens = fs.readFileSync('tokens.txt', 'utf-8').split('\n').filter(Boolean);

const bots = [];
for (const token of tokens) {
    const bot = new Eris(token);
    bot.connect();
    bots.push(bot);
}
