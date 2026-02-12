import { cleanInput } from "./repl.js";
import { initState, State } from "./state.js";

function main() {

    const state = initState();
    state.rl.prompt();
    state.rl.on("line", (input) => {
        const inputArray = cleanInput(input);
        const command = inputArray[0];
        if (inputArray.length === 0) {
            state.rl.prompt();
            return
        };
        switch(command) {
            case "help": {
                state.commands.help.callback(state);
                break;
            };
            case "exit": {
                state.commands.exit.callback(state);
                break;
            };
            default: {
                console.log("Unknown command")
            }
        }
        state.rl.prompt()
    })
}

main();