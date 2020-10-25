const { MessageEmbed } = require("discord.js");
const got = require('got');
module.exports = {
    name: 'cat',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: 'WEW LOOK A CAT',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const embed = new MessageEmbed();
    got('https://www.reddit.com/r/cat/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let catUrl = `https://reddit.com${permalink}`;
        let catImage = content[0].data.children[0].data.url;
        let catTitle = content[0].data.children[0].data.title;
        let catUpvotes = content[0].data.children[0].data.ups;
        let catNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${catTitle}`);
        embed.setURL(`${catUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(catImage);
        embed.setFooter(`👍 ${catUpvotes} 💬 ${catNumComments}`);
        message.channel.send(embed)
    }).catch(console.error)
};