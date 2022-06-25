/*
 * File Structure:
  * Import module we must to have.
  * All functions.
  * Exports all functions.
*/

const chalk = require('chalk')
const readline = require("readline");
const _style = require("./configuration/chalk.preset.js")

function _InputMenu(commands=[]){
    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interface.question(chalk.cyan("AnimaCLI > "), command => {
        commands.forEach((_command, _index) => {
            if (_command.query !== command)
            {
                if (_index < 0) {
                    console.log(_style.error("This command not found"))
                    _InputMenu(commands)
                }
                _InputMenu(commands)
            } 
            else
            {
                _command.action()
                return null;
            }
        })
    })
}

module.exports._InputMenu = _InputMenu;