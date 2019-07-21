const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const { prefix, website } = require("../../botconfig.json")
 
module.exports = {
    config: {
        name: "website",
        category: "miscellaneous",
        usage: `${prefix}website`,
        description: "",
        accessableby: "Owner",
        status: "Working",
        aliases: ["web", "site", "bot", "botsite", "wb", "bw"]
    },
    run: async (bot, message, args) => {
        message.channel.send("Working on it...").then(m => {
        
        let wbEmbed = new RichEmbed()
        .setTitle(`${bot.user.username}'s Website Status`, `${bot.user.displayAvatarURL}`)
        .addField("Website is under construction","🚧")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Website URL:", website)
        .setFooter("Tripix Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
        .setColor(red_light)
        .setTimestamp()
        message.react("✅")
        message.react("🔴");
        message.react("🚧");
        m.edit(wbEmbed)

    })
  }
}