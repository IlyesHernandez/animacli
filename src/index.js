/*
 * File Structure:
  * Import module we must to have.
  * Code
*/

const { _CommandsMenu } = require('./CommandMenu.js')
const { _InputMenu } = require('./InputMenu.js')
const { _commands } = require('./data/commands.js')

_CommandsMenu(_commands)
_InputMenu(_commands)