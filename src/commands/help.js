/*
 * File Structure:
  * Import module we must to have.
  * The Class.
  * Export the Class.
*/

const { Command } = require("../class/Command.js");
const { _commands } = require("../data/commands.js");
const _style = require("../configuration/chalk.preset.js")

class Help extends Command {
    constructor(){
        super("help", "A simple pannel for help you to how to use commands.", "help", () => {
            console.log(_style.title("Help Pannel"));
            _commands.forEach((_command) => {
                console.log(`How to use the command ('<name>' is a require setting but '<name?>' is not a require setting): ${_command.utility}`);
                console.log(`Command Description: ${_command.description}`)
            })
        })
    }
}

module.exports = new Help();