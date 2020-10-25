const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'avatar',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: ["pfp"],
    category: 'Misc',
    description: 'Shows the users avatar',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    let User = message.mentions.users.first() || message.author
    let UserImage = User.displayAvatarURL({dynamic: true, size: 512 })

    let DiscordEmbed = new MessageEmbed()
    .setTitle(`**SHRIMP BOT AVATAR (${User.username})**`)
    .setDescription(`[Click for Avatar Link](${UserImage})`)
    .setColor("RANDOM")
    .setImage(UserImage);
    
    message.channel.send(DiscordEmbed)   
};