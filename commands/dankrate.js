const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'dankrate',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: 'LOL DANKKK',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const dankrateEmbed = new MessageEmbed()
        .setTitle(`dank r8 machine`)
        .setColor('RANDOM')
        .setDescription(`you are ${Math.floor(Math.random() * 101)}% dank`);
        
    message.channel.send(dankrateEmbed);
};