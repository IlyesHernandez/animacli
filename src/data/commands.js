/*
 * File Structure:
  * Import module we must to have.
  * Exports all commands.
*/

const Help = require("../commands/help.js")

module.exports._commands = [
    {
        query: Help.getQuery(),
        description: Help.getDescription(),
        utility: Help.getUtility(),
        action: Help.getAction(),
    },
    {
        query: "Help.getQuery()",
        description: "Help.getDescription()",
        utility: "Help.getUtility()",
        action: "Help.getAction()",
    },
]