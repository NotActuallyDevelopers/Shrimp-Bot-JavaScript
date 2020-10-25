const { MessageEmbed } = require("discord.js");
const randomPuppy = require('random-puppy');
module.exports = {
    name: 'cat',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: 'WEW LOOK A CAT',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const subReddits =  [ "cats", "cat"];
    const random = subReddits[ Math.floor(Math.random() * subReddits.length) ];
    const img = await randomPuppy(random);

    const catEmbed = new MessageEmbed()
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`http://reddit.com/${random}`)
        
    message.channel.send(catEmbed);
};