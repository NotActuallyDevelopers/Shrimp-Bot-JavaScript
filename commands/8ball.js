function doMagic8Ball() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}
module.exports = {
    name: '8ball',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: '8ball ye, that is it',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    if (!args[0] || !message.content.endsWith("?")) {
        return message.channel.send("U forgot to end it with '?' or you didn't fill in anything -_-");
    }
    message.channel.send('🎱' + doMagic8Ball());
};