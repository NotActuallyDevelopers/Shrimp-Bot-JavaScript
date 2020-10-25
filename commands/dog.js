const { MessageEmbed } = require("discord.js");
const randomPuppy = require('random-puppy');
module.exports = {
    name: 'dog',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: 'ITS A DOG COME HERE',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const subReddits =  [ "dogpictures", "lookatmydog"];
    const random = subReddits[ Math.floor(Math.random() * subReddits.length) ];
    const img = await randomPuppy(random);

    const dogEmbed = new MessageEmbed()
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`http://reddit.com/${random}`)
        
    message.channel.send(dogEmbed);
};