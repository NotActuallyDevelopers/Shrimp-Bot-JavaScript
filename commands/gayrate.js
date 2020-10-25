const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'howgay',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: 'How gay are u',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const gayrateEmbed = new MessageEmbed()
        .setTitle(`gay r8 machine`)
        .setColor('RANDOM')
        .setDescription(`you are ${Math.floor(Math.random() * 101)}% gae 🏳️‍🌈`);
        
    message.channel.send(gayrateEmbed);
};
