const fs = require('fs');
const Eris = require('eris');
const tokens = fs.readFileSync('tokens.txt', 'utf-8').split('\n').map(token => token.trim()).filter(Boolean);

const bots = [];
for (const token of tokens) {
    console.log(token);
    const bot = new Eris(token);
    bot.connect();
    bots.push(bot);
}
