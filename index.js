//The token you want to forward messages from
let usertoken = "";
//The channels you want to forward from (channel IDs)
let forwardfrom = ['953605123282702386'];
//The channels you want to forward to (channel IDs)
let forwardto = ['https://discord.com/api/webhooks/943542138027794462/', 'https://discord.com/api/webhooks/965394588607053874/--'];
const {
    Webhook
} = require('discord-webhook-node');

const Discord = require("discord.js-selfbot-v11");
const user = new Discord.Client();
user.login(usertoken);
user.on("ready", ready => {
    user.on("message", message => {
        if (forwardfrom.includes(message.channel.id)) {
            forwardto.forEach(channel => {
                let hook = new Webhook(channel);
                hook.setAvatar("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg")
                hook.setUsername(message.author.username)
                hook.send(message.content);
            });
            //forward all attachments
            /*
            if (typeof message.attachments.array()[0] != "undefined") {
                var media = message.attachments.array();
                let urls = [];
                media.forEach(item => {
                    urls.push(item.url);
                });
                forwardto.forEach(channel => {

                    hook.send(message.author.tag + "\nImage URLs:\n" + urls.join("\n"));
                });
            }
            //forward all embeds
            message.embeds.forEach(embed1 => {
                let embedfinal = new Discord.RichEmbed(embed1);
                console.log(embedfinal);
                forwardto.forEach(channel => {
                    hook.send(embedfinal);
                });
            });*/
        }
    });
});