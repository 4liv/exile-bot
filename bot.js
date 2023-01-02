const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', message => {
    if (!message.content.startsWith("/")) return;
  
    // Split the message into an array by spaces
    const args = message.content.slice("/".length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Check which command was sent and execute it
    if (command === "ping") {
      message.channel.send("Pong!");
    } else if (command === "foo") {
      message.channel.send("Bar!");
    }
  });
  