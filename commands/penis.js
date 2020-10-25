const { MessageEmbed } = require("discord.js");
function penis() {
    var rand = [' ', '8D', '8=D', '8==D', '8===D', '8====D', '8=====D', '8======D', '8=======D', '8========D', '8=========D', '8==========D', '8===========D', '8============D', '8=============D', '8==============D'];

    return rand[Math.floor(Math.random()*rand.length)];
}
module.exports = {
    name: 'pp',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: ["penis"],
    category: 'Fun',
    description: 'how big is ur pp',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {

    const ppEmbed = new MessageEmbed()
    .setTitle(`${message.author.username}'s peepee`)
    .setColor('RANDOM')
    .setDescription(`${penis()}`);
    
    message.channel.send(ppEmbed);
};