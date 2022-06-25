/*
 * File Structure:
  * Import module we must to have.
  * Export function
*/

const _style = require("../configuration/chalk.preset.js")
const { _commands } = require("../data/commands.js")

module.exports = () => {
    console.log(_style.title("Help Pannel"));
    console.log(_commands);
    _commands.forEach((_command) => {
        console.log(chalk.cyan(`${_command.query}`))
        console.log(` * How to use (<name> is a require setting, but, <name?> is a unrequire setting): ${_command.utility}`);
        console.log(` * Description: ${_command.description}`);
        console.log(); // space before new command
    })
}