const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const prefix = botconfig.prefix;


module.exports.run = async(bot,message,args) =>{

   
    if(message.member.roles.cache.find(r => r.name === "Admin") || message.member.roles.cache.find(r => r.name === "''") || message.member.roles.cache.find(r => r.name === "..") ||  message.member.roles.cache.find(r => r.name === "Tournament Admin" )){ 
            //if(args[2])return; 
    //let argument = args[0];
    //let argument_1 = args[1];

    //let c = Math.random()<0.5 ? "On" : "Off";
    //let randomMaps  = map();
    //let ImgMap = randomMaps.split(" "). join("");

    function choice(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    

    function map(){
        var maps1 = ["Skull Creek","Scorched Stone","Rockwall Brawl","Feast or Famine","Double Trouble","Stormy Plains","nruhC nrevaC","Two Thousand Lakes"]
        var maps = ["Will of the Wisp","Two Thousand Lakes", "Eggshell","Treasure Hunt","Shadow Spirits","Point of View","Riverside Ring","Feast or Famine","Clash Colosseum","Cavern Churn","Grassy Gorge","Safety Center","Dark Passage","nruhC nrevaC","Victor Valley"];
        return choice(maps1);
    }

    function brawler(j){

        var threeBrawlers = [];
        if (j === 1){
            var brawlers = ["Shelly","Nita","Colt","Bull","Jessie","Brock","Bo","Emz","EL Primo","Poco","Rosa","Rico","Darryl","Penny","Carl","Jacky","8-Bit"];
            threeBrawlers.push(choice(brawlers));
            return threeBrawlers;
            
        }else{
            var brawlers = ["Shelly","Nita","Colt","Bull","Jessie","Brock","Bo","Emz","EL Primo","Poco","Rosa","Rico","Darryl","Penny","Carl","Jacky","Piper","Pam","Frank","Bibi","Bea","Nani","Tara","Gene","Max","MR.P","8-Bit"];
            var res = brawlers.sort(() => 0.5 - Math.random());
            let Tb = res.slice(brawlers,3);
            return Tb;
        }   
    
    }
    

    const ayy = bot.emojis.cache.find(emoji => emoji.name === "verify");

    
    message.channel.send(`**Match Info:-\n1-WaitTime is 3:08pm for round 1 and 5min after lobby creation for round 2 and 3.\n\n2-Bot should be disabled.\n\n3-After finishing the match first go to app and refresh it then come back to discord and put results in "Game tv app result" channel if you failed to do this(within 7 mins after waittime)whole lobby will be disqualified.\n\n\nFOR ROUND 1 AND 2\nMap            :-  ${map()} \nBrawler      :-  ${brawler()}\nGadget       :- ${Math.random()<0.5 ? "On" : "Off"}\n\nFOR FINAL ROUND\nMap            :-  ${map()}\nBrawler      :-  ${brawler(1)}\nGadget       :-  ${Math.random()<0.5 ? "On" : "Off"}\n\nDON'T START BEFORE WAIT TIME**`).then(eMessage => {
        eMessage.react(ayy);
    });


    

}
}    



module.exports.config = {
    name:"sm",
    aliases: [""],
    usage: "//usage",
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
}
