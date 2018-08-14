const date = require('node-date-parser');
const fs = require('fs');
const path = require('path');

let dateFormat = 'Y-m-d H:i:s,V';
let logPath = 'logs';

const interface = {
	config : {
		dateFormat : format => dateFormat = format,
		logPath : path => logPath = path
	},
	debug : (...messages) => process('debug', messages),
	info : (...messages) => process('info', messages),
	warning : (...messages) => process('warning', messages),
	error : (...messages) => process('error', messages),
}

function process(severity, messages)
{
	let messageParts = [];

	for(let x in messages)
	{
		if(typeof messages[x] == 'object')
			messageParts.push(JSON.stringify(messages[x], null, 2));
		else
			messageParts.push(messages[x]);
	}

	let message = `${date.parse(dateFormat)} [${severity.toUpperCase()}] ${messageParts.join("\n")}`;

	writeToFile(message);
	writeToConsole(severity, message);
}

function getColor(severity)
{

		/**
		 * Reset = "\x1b[0m"
		Bright = "\x1b[1m"
		Dim = "\x1b[2m"
		Underscore = "\x1b[4m"
		Blink = "\x1b[5m"
		Reverse = "\x1b[7m"
		Hidden = "\x1b[8m"

		FgBlack = "\x1b[30m"
		FgRed = "\x1b[31m"
		FgGreen = "\x1b[32m"
		FgYellow = "\x1b[33m"
		FgBlue = "\x1b[34m"
		FgMagenta = "\x1b[35m"
		FgCyan = "\x1b[36m"
		FgWhite = "\x1b[37m"

		BgBlack = "\x1b[40m"
		BgRed = "\x1b[41m"
		BgGreen = "\x1b[42m"
		BgYellow = "\x1b[43m"
		BgBlue = "\x1b[44m"
		BgMagenta = "\x1b[45m"
		BgCyan = "\x1b[46m"
		BgWhite = "\x1b[47m"
 */

	let color;

	switch(severity)
	{
		case 'info': color = 37; break;
		case 'warning': color = 33; break;
		case 'error': color = 31; break;
		case 'debug' : color = 34; break;
		default : color = 0; break;
	}

	return color;
}

function writeToFile(line)
{
	if (!fs.existsSync(logPath))
		fs.mkdirSync(logPath);

  const stream = fs.createWriteStream(path.join(logPath, `${date.parse('Y-m-d_H')}.log`), { flags : 'a' });
	stream.write(`${line}\n`);
}

function writeToConsole(severity, message)
{
	console.log(`\x1b[${getColor(severity)}m%s\x1b[0m`, message);
}

module.exports = interface;