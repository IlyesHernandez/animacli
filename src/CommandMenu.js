/*
 * File Structure:
  * Import module we must to have.
  * All functions.
  * Exports all functions.
*/

const _style = require('./configuration/chalk.preset.js')

function _CommandsMenu(commands=[]) 
{
    console.log(_style.alert("You using a beta version of AnimaCLI!\n"))
    console.log(`Welcome to ${_style.title("AnimaCLI")}`)
    console.log(`AnimaClI contains ${commands.length} commands, here are all the commmands:`)
    commands.forEach(command => {
        console.log(` * ${command.query}: ${command.description}`);
    })
}

module.exports._CommandsMenu = _CommandsMenu;