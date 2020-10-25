const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'simprate',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: 'How much of a simp are you',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const simprateEmbed = new MessageEmbed()
        .setTitle(`simp r8 machine`)
        .setColor('RANDOM')
        .setDescription(`you are ${Math.floor(Math.random() * 101)}% a simp`);
        
    message.channel.send(simprateEmbed);
};