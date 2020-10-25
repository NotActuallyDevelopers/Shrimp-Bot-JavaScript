const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const insta = require("user-instagram");
module.exports = {
    name: 'instagram',
    usage: '(insta user)',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: ['insta-user'],
    category: 'Misc',
    description: 'Search a instagram user!',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    //get the name to search for
    let name = args[0];

    //if there is no name send a message to the channel
    if(!name) return message.channel.send('Enter an account to search for!');

    await insta(name).then(res => {

      //create a new embed with the result info and send it to the channel
      let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(res.fullName)
        .setURL(res.link)
        .setThumbnail(res.profilePicHD)
        .addField('Profile info:', stripIndents`**Username:** ${res.username}
        **Full name:** ${res.fullName}
        **Biography:** ${res.biography.length == 0 ? 'None' : res.biography}
        **Posts:** ${res.postsCount}
        **Followers:** ${res.subscribersCount}
        **Following:** ${res.subscribtions}
        **Private:** ${res.isPrivate ? 'Yes 🔐' : 'No 🔓'}`)
        .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

      message.channel.send(embed);
    }).catch(err => {
      console.log(err);
      return message.reply("Are you sure that account exists?");
    });
};