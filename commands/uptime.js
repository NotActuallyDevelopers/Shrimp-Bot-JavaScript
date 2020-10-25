const ms = require('ms');
module.exports = {
    name: 'uptime',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'System',
    description: 'Shows the uptime of the bot!',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    message.channel.send(`I have been online for: \`${ms(client.uptime, { long: true })}\``);
};