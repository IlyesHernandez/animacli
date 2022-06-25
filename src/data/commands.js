/*
 * File Structure:
  * Import module we must to have.
  * Exports all commands.
*/

const help = require("../commands/help.js")

module.exports._commands = [
    {
        query: "help",
        description: "A simple pannel for all know about command.",
        utility: "help",
        action: help()
    },
]