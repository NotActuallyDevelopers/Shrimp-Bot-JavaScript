const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'serverinfo',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: ['server'],
    category: 'Misc',
    description: 'Shows server info',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    let embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Server Info")
      .setThumbnail(message.guild.iconURL())
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField("**Guild Owner:**", `${message.guild.owner}`, true)
      .addField("**Member Count:**", `${message.guild.memberCount}`, true)
      .addField("**Total Real Members**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
      .addField("**Total Bots**", message.guild.members.cache.filter(member => member.user.bot).size, true)
      .addField("**Total Channels**", message.guild.channels.cache.size, true)
      .addField("**Total Text Channels**", message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
      .addField("**Total Voice Channels**", message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
      .addField("**Created On**", message.guild.createdAt.toLocaleString(), true)
      .setDescription(`${message.guild.roles.cache.map(role => role.toString()).join(' ')}`)
      .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());
    
    message.channel.send(embed);
};