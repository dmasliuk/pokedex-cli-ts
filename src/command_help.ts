import { getCommands } from "./command.js";
import { State } from "./state.js";

export function helpCommand(state: State) {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    Object.entries(state.commands).forEach(([name, command]) => {
        console.log(`${name}: ${command.description}`)
    });
}