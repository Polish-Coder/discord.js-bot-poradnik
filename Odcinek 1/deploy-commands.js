const { REST, Routes } = require('discord.js');
const fs = require('fs');

const commands = [];

for (const folder of fs.readdirSync('./commands')) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);

        commands.push(command.data.toJSON());
    }
}

const rest = new REST({ version: '10' }).setToken('TOKEN');

(async () => {
    try {
        console.log('Rozpoczęto aktualizację komend');

        const data = await rest.put(Routes.applicationCommands('ID'), { body: commands })

        console.log('Zaktualizowano komendy');
    } catch (error) {
        console.error(error);
    }
})();