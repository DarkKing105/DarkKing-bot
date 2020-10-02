const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async(bot,message,args) =>{

    

    if(message.member.roles.cache.find(r => r.name === "Admin") || message.member.roles.cache.find(r => r.name === "''") || message.member.roles.cache.find(r => r.name === "..") ||  message.member.roles.cache.find(r => r.name === "Tournament Admin" )){ 

    let c = Math.random()<0.5 ? "On" : "Off";
    let randomMaps  = map();
    let ImgMap = randomMaps.split(" "). join("");

    function choice(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    

    function map(){
    var maps = ["Will of the Wisp","Two Thousand Lakes", "Eggshell","Treasure Hunt","Shadow Spirits","Point of View","Riverside Ring","Feast or Famine","Clash Colosseum","Cavern Churn","Grassy Gorge","Safety Center","Dark Passage","nruhC nrevaC","Victor Valley"];
    return choice(maps);
    }


    if (args[0]){

        let argument = args[0];


        if (argument == "all"){
            let aEmbed = new Discord.MessageEmbed()
            .setColor(colours.voilet)
            //.setTitle("Relics Quadron")
            //.setThumbnail(message.guild.iconURL())
            //.setDescription("ABC")
            .setAuthor(`${message.guild.name}` , message.guild.iconURL())
            .addField("**Map **", `${randomMaps}`,true)
            .addField("**Brawler **",`Any Brawler`,true)
            .addField("**Ban**","Bea,Emz,Gale,Surge,Nani,Jacky,8-Bit,Rosa")
            .addField("**Gadgets**",`${c}`)
            .attachFiles([`./maps/${ImgMap}.webp`])
            .setImage(`attachment://${ImgMap}.webp`)
            .setFooter(`Developed by Dark King | Relics Quadron`, bot.user.displayAvatarURL());
            
            message.channel.send({embed: aEmbed}).then(eMessage => {
                eMessage.react('👍')
                .then(()=>eMessage.react('👎'))
            });

            function choice(arr){
                return arr[Math.floor(Math.random() * arr.length)];
            }
                
            function map(){
            var maps = ["Will of the Wisp","2k Lakes", "Eggshell","Treasure Hunt","Shadow Spirits","Points of View","Riverside Ring","Feast or Famine","Clash Colosseum","Cavern Churn","Grassy Gorge","Safety Centre","Dark Passage","nruhC nrevaC","Victor Valley"];
            return choice(maps);
            }
    
                
            }else{


    


        
        let aEmbed = new Discord.MessageEmbed()
                .setColor(colours.voilet)
                //.setTitle("Relics Quadron")
                //.setThumbnail(message.guild.iconURL())
                //.setDescription("ABC")
                .setAuthor(`${message.guild.name}` , message.guild.iconURL())
                .addField("**Map **", `${randomMaps}`,true)
                .addField("**Brawler **",`${brawler()}`,true)
                .addField("**Gadgets**",`${c}`)
                .attachFiles([`./maps/${ImgMap}.webp`])
                .setImage(`attachment://${ImgMap}.webp`)
                .setFooter(`Developed by Dark King | Relics Quadron`, bot.user.displayAvatarURL());
               
                message.channel.send({embed: aEmbed}).then(eMessage => {
                    eMessage.react('👍')
                    .then(()=>eMessage.react('👎'))
                });
        

        function choice(arr){
            return arr[Math.floor(Math.random() * arr.length)];
        }
            
        function map(){
        var maps = ["Will of the Wisp","Two Thousand Lakes", "Eggshell","Treasure Hunt","Shadow Spirits","Point of View","Riverside Ring","Feast or Famine","Clash Colosseum","Cavern Churn","Grassy Gorge","Safety Centre","Dark Passage","nruhC nrevaC","Victor Valley"];
        return choice(maps);
        }
            
        function brawler(){
            let j = argument;
            //var brawlers = ["Shelly","Nita","Colt","Bull","Jessie","Brock","Dynamike","Bo","Tick","8-bit","Emz","EL Primo","Barley","Poco","Rosa","Rico","Darryl","Penny","Carl","Jacky","Piper","Pam","Frank","Bibi","Bea","Nani","Mortis","Tara","Gene","Max","MR.P","Sprout","Spike","Crow","Leon","Sandy","Gale","Surge"];
            if(j>2 || j<=0){
                message.channel.send(`you can select only 1 or 2 brawler as argument not ${j} `)
                message.delete({embed: sEmbed});
            }else{
            var threeBrawlers = [];
            for (let i=0;i<j;i++){
                var brawlers = ["Shelly","Nita","Colt","Bull","Jessie","Brock","Dynamike","Bo","Tick","8-bit","Emz","EL Primo","Barley","Poco","Rosa","Rico","Darryl","Penny","Carl","Jacky","Piper","Pam","Frank","Bibi","Bea","Nani","Mortis","Tara","Gene","Max","MR.P","Sprout","Spike","Crow","Leon","Sandy","Gale","Surge"];
                threeBrawlers.push(choice(brawlers));
                brawlers.pop(`${threeBrawlers[i]}`);
            }
                    
            return threeBrawlers;
        
        }
            }
                    
            }
    }

    if (!args[0]){
        
       
        
        let sEmbed = new Discord.MessageEmbed()
                .setColor(colours.voilet)
                //.setTitle("Relics Quadron")
                //.setThumbnail(message.guild.iconURL())
                //.setTimestamp()
                //.setDescription("ABC")
                .setAuthor(`${message.guild.name}` , message.guild.iconURL())
                .addField("**Map **", `${randomMaps}`)
                //.setTitle(' M ')
                .addField("**Brawler **",`${brawler()}`)
                .addField("**Gadgets**",`${c}`,true)
                .attachFiles([`./maps/${ImgMap}.webp`])
                .setImage(`attachment://${ImgMap}.webp`)
                .setFooter(`Developed by Dark King | Relics Quadron`, bot.user.displayAvatarURL());
                
                
                
                message.channel.send({embed: sEmbed}).then(eMessage => {
                    eMessage.react('👍')
                    .then(()=>eMessage.react('👎'))
                });

            
                    
                function brawler(){
                    //var brawlers = ["Shelly","Nita","Colt","Bull","Jessie","Brock","Dynamike","Bo","Tick","8-bit","Emz","EL Primo","Barley","Poco","Rosa","Rico","Darryl","Penny","Carl","Jacky","Piper","Pam","Frank","Bibi","Bea","Nani","Mortis","Tara","Gene","Max","MR.P","Sprout","Spike","Crow","Leon","Sandy","Gale","Surge"];
                    var threeBrawlers = [];
                    for (let i=0;i<3;i++){
                        var brawlers = ["Shelly","Nita","Colt","Bull","Jessie","Brock","Dynamike","Bo","Tick","8-bit","Emz","EL Primo","Barley","Poco","Rosa","Rico","Darryl","Penny","Carl","Jacky","Piper","Pam","Frank","Bibi","Bea","Nani","Mortis","Tara","Gene","Max","MR.P","Sprout","Spike","Crow","Leon","Sandy","Gale","Surge"];
                        threeBrawlers.push(choice(brawlers));
                        brawlers.pop(`${threeBrawlers[i]}`);
                    
                            
                    }
                return threeBrawlers;
                }

                
    }
}
        
}

module.exports.config = {
    name:"mb",
    aliases: ["maba","mm"]
}