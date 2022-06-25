/*
 * File Structure:
  * Import module we must to have.
  * All functions.
  * Exports all functions.
*/

const chalk = require("chalk");

function title(content) 
{
    return chalk.bold(chalk.cyan(content));
}

function alert(content)
{
  return chalk.bold(chalk.yellow(content))
}

function error(err)
{
  return chalk.bold(chalk.red(err))
}

module.exports.title = title;
module.exports.alert = alert;
module.exports.error = error;