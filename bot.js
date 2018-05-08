const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "p!";

client.on("ready", () => {
  console.log("Ready no bo co");
});

client.on("message", (message) => {
   if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith(prefix + "say")) {
    message.channel.send("kek");
  }
  if (message.content.startsWith(prefix + "help")) {
    console.log("helllper")
    message.channel.send("|p!say - powiedz kek|");
    message.channel.send("|p!lepsze - lepsze jest...|");
    message.channel.send("|p!2 ile to jest 2+2?|");
    message.channel.send("|p!xiaomi - co jest najlepsze w xiaomi|");
  }
  if (message.content.startsWith(prefix + "lepsze")) {
    console.log("lepsze");
    message.channel.send("Huawei lepsze!");
  }
  if (message.content.startsWith(prefix + "2")) {
    console.log("2");
    message.channel.send("4");
  }
  if (message.content.startsWith(prefix + "xiaomi")) {
    console.log("xiaomi");
    message.channel.send("to że się nazywa xiaomi kappa");
  }
  if (message.content.startsWith(prefix + "spam")) {
    console.log("spam");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
    message.channel.send("kek");
  }
});

client.login("process.env.BOT_TOKEN");
