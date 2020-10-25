module.exports = {
    name: 'gnome',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Misc',
    description: 'GET GNOMEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
    if(!args[0]) return message.reply('Enter a user to gnome!');

    //deletes the command message so the user is anonymous 
    message.delete();
    
    //get the first person they mentioned in the message
    let user = message.mentions.users.first();
    
    //send a funny message in the channel to that person
    message.channel.send(`${user} Ho ho ho ha ha, ho ho ho he ha. Hello there, old chum. I’m g'not a g'nelf. I’m g'not a g'noblin. I’m a g'nome!! And you’ve been, GNOOOMED!!!`);
};