import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { cleanInput } from "./repl.js";
import { getCommands } from "./command.js";

const rl = createInterface ({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > "
});

function main() {

    const commands = getCommands();
    rl.prompt();
    rl.on("line", (input) => {
        const inputArray = cleanInput(input);
        const command = inputArray[0];
        if (inputArray.length === 0) {
            rl.prompt();
            return
        };
        switch(command) {
            case "help": {
                commands.help.callback(commands);
                break;
            };
            case "exit": {
                commands.exit.callback(commands);
                break;
            };
            default: {
                console.log("Unknown command")
            }
        }
        rl.prompt()
    })
}

main();