const {Client, GatewayIntentBits } = require('discord.js');
const { TOKEN, PREFIX } = require("./config.json")
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
const commads = require('./commads');
let channel

client.on('ready', () => {
    console.log("Bot is ready!");
    channel = client.channels.cache.get('996793720814960773');
});

client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)){ 
        var ChatWeb = [
            "ПОН", "Мать жива?", "ОК.", "Иди нахуй хуеблот", "Лох обосанный", "Ты чмо и геральт",
            "Ты случайно свою маму не терял? А она у меня под столом.", "Удали доту", "Лучше бы ты засох на трусах своего бати и никогда в жизни не открывал доту",
            "Такое одобряем", "Братик , почаще в зеркало смотрись , там отрицательный айкью замечен", "завали ты уже своё рыло ноющий сын твари ",
            "Саси хуй педик", "Соси хуй у отчима","Я знаю что ты дрочишь на свою мать"

        ];
        var randCh = Math.floor(Math.random() * 12) + 1; 
        if(randCh == 2){
            var RandE = ChatWeb[Math.floor(Math.random() * (ChatWeb.length))];
            message.reply(RandE);   
        };   
        return;  
    }
    const args = message.content.slice(PREFIX.length).toLowerCase().split(' ');

    switch(args[0]) {
        case 'myotchim': 
            commads.handleMyOtchim(message);
            break;
        case 'natural':
            commads.handleNatural(message);
            break;
        case 'dotahero':
            commads.handleDotaHero(message);
            break;
        case 'dotaplay':
            commads.handleDotaPlay(message);
            break;
        case 'dotarange':
            commads.handleDotaRange(message);
            break;
    }
  });

client.login(TOKEN);