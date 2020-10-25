const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'poll',
    usage: '(question)',
    guildOnly: false,
    enabled: true,
    level: 1,
    aliases: [],
    category: 'Misc',
    description: 'Create a poll!',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    //check if the user sent an argument
    if(!args[0]) return message.channel.send('Enter a question for the poll!');
        
    //convert the entire message to one string
    let msg = args.slice(0).join(' ');

    //create a new embed with the string and send it to the channel
    let embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`📋 ${msg}`)
      .setAuthor(`Poll created by ${message.author.username}`, message.author.displayAvatarURL())
      .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());
        
    message.delete(); //delete the command that the user typed

    //after the message is sent, react to it with the checkmark and x emojis
    message.channel.send(embed).then(messageReaction => {
      messageReaction.react('✅');
      messageReaction.react('❌');
    });
};