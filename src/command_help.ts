import { getCommands } from "./command.js";

export function helpCommand() {
    const commands = getCommands();
    console.log("Welcome to the Pokedex!\nUsage:\n");
    Object.entries(commands).forEach(([name, command]) => {
        console.log(`${name}: ${command.description}`)
    });
}