const { EmbedBuilder } = require('discord.js');

function MyOtchim(message) {
    var random = Math.floor(Math.random() * 500) + 1;
    message.channel.send('Начинается подсчёт отчимов!')
        .then(sentMessage => {
        let dots = '.';
        const loading = setInterval(() => {
            if(dots.length < 4){
                dots += '.';
            }else { 
                dots='.';
            }
            sentMessage.edit(`Загрузка${dots}`);
        }, 800);
        setTimeout(() => {
            clearInterval(loading);
            sentMessage.edit('Почти закончил')}, 9000);
            setTimeout( () =>{ sentMessage.edit('Количество ваших отчимов: '+random)}, 12500);
        });   
}
  
function Natural(message) {
    let member = message.mentions.users.first() || message.author
    var randN = Math.floor(Math.random() * 100) + 1;
    const embed = new EmbedBuilder()
        .setTitle("РАСПОЗНОВАНИЕ НАТУРАЛА")
        .setDescription(`${member} НАТУРАЛ НА `+randN+`%`)
        .setTimestamp(Date.now())
    message.reply({embeds: [embed]})
}

function DotaHero(message){
    var dota2Characters = [
        " Abaddon", " Alchemist", " Ancient Apparition", " Anti-Mage", " Arc Warden",
        " Axe", " Bane", " Batrider", " Beastmaster", " Bloodseeker",
        " Bounty Hunter", " Brewmaster", " Bristleback", " Broodmother",
        " Centaur Warrunner", " Chaos Knight", " Chen",  " Clinkz", " Clockwerk",
        " Crystal Maiden", " Dark Seer", " Dark Willow", " Dazzle", " Death Prophet",
        " Disruptor", " Doom", " Dragon Knight", " Drow Ranger", " Earth Spirit",
        " Earthshaker", " Elder Titan", " Ember Spirit", " Enchantress", " Enigma",
        " Faceless Void", " Grimstroke",  " Gyrocopter", " Huskar",  " Invoker",
        " Io",  " Jakiro", " Juggernaut", " Keeper of the Light",  " Kunkka", " Legion Commander",
        " Leshrac", " Lich", " Lifestealer", " Lina", " Lion", " Lone Druid",
        " Luna", " Lycan", " Magnus",  " Mars", " Medusa",  " Meepo",  " Mirana",
        " Monkey King", " Morphling", " Naga Siren", " Nature's Prophet", " Necrophos",  " Night Stalker",
        " Nyx Assassin", " Ogre Magi", " Omniknight", " Oracle", " Outworld Destroyer",
        " Pangolier", " Phantom Assassin",  " Phantom Lancer", " Phoenix", " Puck",
        " Pudge", " Pugna", " Queen of Pain",  " Razor",  " Riki",  " Rubick",  " Sand King",   " Shadow Demon", " Shadow Fiend",
        " Shadow Shaman", " Silencer", " Mage", " Slardar", " Slark",
        " Snapfire", " Sniper", " Spectre", " Spirit Breaker", " Storm Spirit", " Sven",
        " Techies", " Templar Assassin",  " Terrorblade", " Tidehunter", " Timbersaw",  " Tinker",
        " Tiny", " Treant Protector", " Troll Warlord", " Tusk", " Underlord", " Undying",  " Ursa",  " Vengeful Spirit",  " Venomancer",   " Viper",
        " Visage", " Void Spirit",  " Warlock",  " Weaver", " Windranger", " Winter Wyvern",  " Witch Doctor",  " Wraith King", " Zeus"
      ]; 

    var RandElement = dota2Characters[Math.floor(Math.random() * (dota2Characters.length))]; // Выбор случайного элемента из массива
    message.channel.send("Сегодня ты должен выйграть на"+RandElement)
}

function DotaPlay(message){
    var DotaPlay = [
        "Ебать да ты лох, проиграл в сухую!", "Вот нихуя себе не слил рейтинг, молодец!!",
        "Пиздец чуть-чуть до победы не хватило. Я мне что, мне похуй.", "Чуть не слился еблан!",
        "Ха лох на вайпере слился!", "Да с читами каждый может побеждать", "Ха лох проиграл! Ну это неудивительно, так как в первые минуты мид просрал",
        "Пиздец, а как у тебя дота вылетела?", "ПО-Е-БАТЬ!", "Уф как жёстко отыграл на сапорте", "Хорошо проафкашел?", 
        "Иди лучше в три в ряд покатай, как раз для тебя", "Невероятно! Ты слился!"
    ];
    var RandElement = DotaPlay[Math.floor(Math.random() * (DotaPlay.length))];
    message.channel.send("Вы начали катку!")
        .then(sentMessage =>{
            var num = 0;
            const loading = setInterval(() => {
                num += 2;
                sentMessage.edit(`Катка идёт ${num}%`);
            }, 150);
            setTimeout(() => {
                clearInterval(loading);
                sentMessage.edit("Катка закончилась!");
               }, 7900);
        });
    setTimeout(()=>{message.channel.send(RandElement)}, 17000);
}

function DotaRange(message){
    let sam = ' ';
    var DotaRang = [
        "Рекрут", "Страж", "Рыцарь", "Герой", "Легенда", "Властелин", "Божество", "Титан"
    ];
    var RandRange = Math.floor(Math.random() * 6034) + 1;
    if(RandRange < 770) sam = DotaRang[0];
    else if(RandRange > 769 && RandRange < 1540) sam = DotaRang[1];
    else if(RandRange > 1539 && RandRange < 2310) sam = DotaRang[2];
    else if(RandRange > 2309 && RandRange < 3080) sam = DotaRang[3];
    else if(RandRange > 3079 && RandRange < 3850) sam = DotaRang[4];
    else if(RandRange > 3849 && RandRange < 4620) sam = DotaRang[5];
    else if(RandRange > 4619 && RandRange < 5621) sam = DotaRang[6];
    else if(RandRange > 5620) sam = DotaRang[7];
    message.channel.send("Начинаем подсчёт твоего рейтинга!")
    .then(sentMessage => {
        let dots = '.';
        const loading = setInterval(() => {
            if(dots.length < 4){
                dots += '.';
            }else { 
                dots='.';
            }
            sentMessage.edit(`Учитываем количество ваших отчимов${dots}`);
        }, 800);
        setTimeout(() => {
            clearInterval(loading);
            const loading1 = setInterval(() => {
                if(dots.length < 4){
                    dots += '.';
                }else { 
                    dots='.';
                }
                sentMessage.edit(`Не забываем о ваших оскорблениях родителей${dots}`);
            }, 800);
        setTimeout(() => {
               clearInterval(loading1);
               sentMessage.edit("Твой ранг: "+sam +"\nТвой текущий рейтинга: "+RandRange);
            }, 14000);
            }, 7000);
        });
    
}

function DotaUpdate(message){
    message.channel.send("Обновление началось")
        .then(sentMessage =>{
            var num = 0;
            const loading = setInterval(() => {
                num += 2;
                sentMessage.edit(`Идёт обновление доты ${num}%`);
            }, 50);
            setTimeout(() => {
                clearInterval(loading);
                var RandUp = Math.floor(Math.random() * 4) + 1;
                if(RandUp == 2){
                    sentMessage.edit("ВЫ УСПЕШНО ОБНОВИЛИ ДОТУ!!!!");
                }else{
                    sentMessage.edit("Ошибка:(ноль, хуй саси, пять нулей, семь блядей) \n дота не обновилась(");
                }
               }, 3000);
        });
}

function Help(message){
    const embed = new EmbedBuilder()
        .setTitle("ПОМОЩЬ")
        .setDescription("На данный момент существует такие команды как: \n /myotchim \n /natural \n /dotahero \n /dotaplay \n /dotarange \n /dotaupdate \n /dhelp")
        .setTimestamp(Date.now())
    message.channel.send({embeds: [embed]})
}
  
  module.exports = {
    MyOtchim,
    Natural,
    DotaHero,
    DotaPlay,
    DotaRange,
    DotaUpdate,
    Help,
  };