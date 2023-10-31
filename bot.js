const {Client, GatewayIntentBits } = require('discord.js');
const { TOKEN, PREFIX } = require("./config.json")
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
const commands = require('./commads');
const randchat = require('./randomchat');
const allowedServers = ['996793720286490674', '1032711895947411568']; 
const allowedChannel = ['1016287384083640350','1143820839641436230'];
const allowedRandChannel = ['996793720814960773', '1032711896681422920'];
client.on('ready', () => {
    console.log("Bot is ready!");   
});

client.on("messageCreate", message => {
    //checks
    if (message.author.bot) return;
    if (!(allowedServers.includes(message.guild.id))) return;
    if(!(allowedChannel.includes(message.channel.id)) && allowedRandChannel.includes(message.channel.id)) {
        randchat.RundomChat(message);
        return};
    if (!message.content.startsWith(PREFIX))return; 

    //remove the prefix
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    // command
    switch(command) {
        case 'myotchim': 
            commands.MyOtchim(message);
            break;
        case 'natural':
            commands.Natural(message);
            break;
        case 'dotahero':
            commands.DotaHero(message);
            break;
        case 'dotaplay':
            commands.DotaPlay(message);
            break;
        case 'dotarange':
            commands.DotaRange(message);
            break;
        case 'dotaupdate':
            commands.DotaUpdate(message);
            break;
        case 'dotahelp':
            commands.Help(message);
            break;
    }
  });

client.login(TOKEN);