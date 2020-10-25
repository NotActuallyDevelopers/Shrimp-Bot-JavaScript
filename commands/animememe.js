const { MessageEmbed } = require("discord.js");
const randomPuppy = require('random-puppy');
module.exports = {
    name: 'animememe',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: ["animeme"],
    category: 'Fun',
    description: `I mean cmon, u don't know by now?`,
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const subReddits = [ "Animememes", "MemesOfAnime" ];
    const random = subReddits[ Math.floor(Math.random() * subReddits.length) ];
    const img = await randomPuppy(random);

    const animemeEmbed = new MessageEmbed()
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`http://reddit.com/${random}`)
        
    message.channel.send(animemeEmbed);
};