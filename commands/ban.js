module.exports = {
    name: 'ban',
    usage: '(user)',
    guildOnly: false,
    enabled: true,
    level: 2,
    aliases: [],
    category: 'Moderation',
    description: 'bans the mentioned user',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`You do not have permission to use this command.`)
    let banMember = message.mentions.members.first();
    if(!banMember) return message.reply(`You did not mention a user to ban`)
    let banreason = args.slice(1).join(" ");
    if(!banreason) banreason = `No reason specified`;
    message.guild.members.ban(banMember, {reason: `Staff: ${message.author.tag} || Reason: ${banreason}`})
    message.reply(`${banMember} has been banned by ${message.author.tag} for ${banreason}.`)
};