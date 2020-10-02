const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const prefix = botconfig.prefix;


module.exports.run = async(bot,message,args) =>{

   let Iembed = new Discord.MessageEmbed()
   .setAuthor(`Commands Info`, message.guild.iconURL)
   .setThumbnail(bot.user.displayAvatarURL())
   //.setTimestamp()
   .setDescription(`The bot prefix is: ${prefix}`)
   //.addField(`Commands:-`)
   .addFields(
       {name:"1. ``//mb``",value:"-->To select random Map and 3 \n       Brawler\n\n\n"},
       //{name:"\u200B",value:"\u200B"},
       {name:"2. ``//ping``", value: "-->User and Bot Ping in ms"}
   )
   .setFooter("Developed by Dark King | Relics Quadron")
   message.channel.send(Iembed);

    



}



module.exports.config = {
    name:"info",
    aliases: ["help"],
    usage: "//usage",
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
}
