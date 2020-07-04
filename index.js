const Discord = require('discord.js');
const bot = new Discord.Client();
const api = require('imageapi.js');

var pfx ='!!';


bot.on('ready', ()=>{

    bot.user.setStatus('dnd');
    bot.user.setActivity('Playing Minecraft with friends');


})
bot.on('message',async message =>{

    const parts = message.content.split(' ');
    const command = parts.shift().toLowerCase();

    if(command === pfx + 'coords'){

        let embed = new Discord.MessageEmbed()
        .setTitle(`Realm Coords`)
        .setDescription(`Some Coords we have explored`)
        .setThumbnail(`${bot.user.displayAvatarURL()}`)
        .addField('Spawn: ', 'X:2364 Y:64 Z:6065\n\n')
        .addField('Mushroom Land: ', 'X:3055 Y:73 Z:6209\n\n')
        .addField('Ice Land: ', 'X:2844 Y:63 Z:8606 \n\n')
        .addField('Mesa Biome: ', 'X:4470 Y:77 Z:11954\n\n')
        .addField('Stronghold: ', 'X:3352 Y:62 Z:11003\n\n')

        message.channel.send(embed);

    }

    if(command === pfx + 'anime'){

        message.channel.send(`if it didn't work try again untill it does.`);
        let subreddits = [
          "anime_irl",
          "AnimeGirls",
          "AnimeGirls",
          "anime_irl",
          "AnimeGirls",
          "Animemes",
          "Animemes",
          "Animemes",
          "Animemes",
          "Animemes",
          "Animemes",
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]

        let img = await api(subreddit);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Anime`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor(`RANDOM`)
        .setImage(img)
        message.channel.send(embed).catch(err => console.error(err));

      }

      if(command === pfx + 'meme'){

        message.channel.send(`if it didn't work try again untill it does.`);
        let subreddits = [
          "comedyheaven",
          "dank",
          "meme",
          "memes"
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]

        let img = await api(subreddit);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Meme`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor(`RANDOM`)
        .setImage(img)
        message.channel.send(embed);


      }
})

bot.login(process.env.token);