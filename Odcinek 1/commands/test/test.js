const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('test')
        .setDescription('To jest testowa komenda'),
    async execute(interaction) {
        interaction.reply('Test');
    }
}