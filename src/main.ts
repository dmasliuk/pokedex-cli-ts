import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { cleanInput } from "./repl.js";

const rl = createInterface ({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > "
});

function main() {

    rl.prompt();
    rl.on("line", (input) => {
        const inputArray = cleanInput(input);
        if (inputArray.length === 0) {
            rl.prompt();
            return
        }
        console.log(`Your command was: ${inputArray[0]}`)
        rl.prompt()
    })
}

main();