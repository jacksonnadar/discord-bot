require('dotenv').config();
const { Client } = require('discord.js');

const WORDS = require('./words');

const client = new Client();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// monty 534629359810772993
// jack 431490737683824661

client.on('message', (msg) => {
  console.log(msg.author);
  if (
    msg.author.id == '534629359810772993' ||
    msg.author.id == '431490737683824661'
  ) {
    msg.reply(chooseRandomSentence());
  }
});

function chooseRandomSentence() {
  const random_no = Math.floor(Math.random() * WORDS.monty.length);
  return WORDS.monty[random_no];
}
