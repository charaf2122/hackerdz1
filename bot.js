const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("573928541041983508")
setInterval(function() {
channel.send(`u are hacked by :D`);
}, 30)
})

client.login(process.env.BOT_TOKEN);