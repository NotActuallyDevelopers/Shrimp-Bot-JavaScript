module.exports = {
    name: 'kick',
    usage: '(user)',
    guildOnly: false,
    enabled: true,
    level: 1,
    aliases: [],
    category: 'Moderation',
    description: 'kicks the mentioned user',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`You do not have permission`);
    let kuser = message.mentions.members.first()
    if(!kuser) return console.log(`no user stated to be kicked.`)
    let kreason = args.slice(1).join(" ");
    if(!kreason) kreason = `No reason specified.`;
    kuser.kick(`Staff: ${message.author.tag} || Reason: ${kreason}`)
    message.reply(`${kuser} has been kicked by ${message.author.tag} for ${kreason}.`)
};