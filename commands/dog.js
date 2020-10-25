const { MessageEmbed } = require("discord.js");
const got = require('got');
module.exports = {
    name: 'dog',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Fun',
    description: 'ITS A DOG COME HERE',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    const embed = new MessageEmbed();
    got('https://www.reddit.com/r/lookatmydog/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let dogUrl = `https://reddit.com${permalink}`;
        let dogImage = content[0].data.children[0].data.url;
        let dogTitle = content[0].data.children[0].data.title;
        let dogUpvotes = content[0].data.children[0].data.ups;
        let dogNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${dogTitle}`);
        embed.setURL(`${dogUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(dogImage);
        embed.setFooter(`👍 ${dogUpvotes} 💬 ${dogNumComments}`);
        message.channel.send(embed)
    }).catch(console.error)
};