const { EmbedBuilder } = require('discord.js');

function handleMyOtchim(message) {
    var random = Math.floor(Math.random() * 500) + 1;
    message.channel.send('Идёт подсчёт отчимов.....')
    setTimeout( () =>{ message.channel.send('Почти закончил....')}, 4000)
    setTimeout( () => {message.channel.send('Количество ваших отчимов: '+random)}, 5500)
}
  
function handleNatural(message) {
    let member = message.mentions.users.first() || message.author
    var randN = Math.floor(Math.random() * 100) + 1;
    const embed = new EmbedBuilder()
        .setTitle("РАСПОЗНОВАНИЕ НАТУРАЛА")
        .setDescription(`${member} НАТУРАЛ НА `+randN+`%`)
        .setTimestamp(Date.now())
    message.reply({embeds: [embed]})
}

function handleDotaHero(message){
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

function handleDotaPlay(message){
    var DotaPlay = [
        "Ебать да ты лох, проиграл в сухую!", "Вот нихуя себе не слил рейтинг, молодец!!",
        "Пиздец чуть-чуть до победы не хватило. Я мне что, мне похуй.", "Чуть не слился еблан!",
        "Ха лох на вайпере слился!", "Да с читами каждый может побеждать", "Ха лох проиграл! Ну это неудивительно, так как в первые минуты мид просрал",
        "Пиздец, а как у тебя дота вылетела?", "ПО-Е-БАТЬ!"
    ];
    var RandElement = DotaPlay[Math.floor(Math.random() * (DotaPlay.length))];
    message.channel.send("Вы начали катку!")
    setTimeout(()=>{message.channel.send("Где-то середина катки")},6000)
    setTimeout(()=>{message.channel.send(RandElement)},10000)
}

function handleDotaRange(message){
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
    setTimeout(()=>{message.channel.send("Учитываем количество ваших отчимов")}, 2000)
    setTimeout(()=>{message.channel.send("Не забываем о ваших оскорблениях родителей")}, 4000)
    setTimeout(()=>{message.channel.send("Почти закончили")}, 8000)
    setTimeout(() => {    
        message.channel.send("Твой ранг: "+sam)
        message.channel.send("Твой текущий рейтинга: "+RandRange)
    }, 10000)
    
}
  
  module.exports = {
    handleMyOtchim,
    handleNatural,
    handleDotaHero,
    handleDotaPlay,
    handleDotaRange,
  };
