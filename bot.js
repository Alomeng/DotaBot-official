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
const allowedServers = ['ID_server_1', 'ID_server_2']; 
const allowedChannel = ['ID_channel_commands_1','ID_channel_commands_2'];
const allowedRandChannel = ['ID_channel_chat_1', 'ID_channel_chat_2'];
client.on('ready', () => {
    console.log("Bot is ready!");   
});

client.on("messageCreate", message => {
    //checks
    if (!(allowedServers.includes(message.guild.id))) return;
    if(!(allowedChannel.includes(message.channel.id)) && allowedRandChannel.includes(message.channel.id)) {
        randchat.RundomChat(message);
        return};
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX))return; 

    //remove the prefix
    const args = message.content.slice(PREFIX.length).toLowerCase().split(' ');

    // command
    switch(args[0]) {
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
        case 'dhelp':
            commands.Help(message);
            break;
    }
  });

client.login(TOKEN);