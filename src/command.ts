import { helpCommand } from "./command_help.js";
import { exitCommand } from "./command_exit.js";

export type CLIcommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLIcommand>) => void;
}

export function getCommands():Record<string, CLIcommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: exitCommand,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: helpCommand,
        }
    }
}