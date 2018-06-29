const dateParser = require('node-date-parser');
const fs = require('fs');
const path = require('path');

const interface = {
	debug : (...messages) => process('debug', messages),
	info : (...messages) => process('info', messages),
	warning : (...messages) => process('warning', messages),
	error : (...messages) => process('error', messages),
}

function process(severity, messages)
{

	let message = `${dateParser('Y-m-d H:i:s,V')} [${severity.toUpperCase()}] `;

	for(let x in messages)
	{
		if(typeof messages[x] == 'object')
			message += JSON.stringify(messages[x], null, 2);
		else
			message += messages[x];

		message += "\n";
	}
		

	writeToFile(message);
	console.log(`\x1b[${getColor(severity)}m%s\x1b[0m`, message);
}

function getColor(severity)
{
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
	if (!fs.existsSync('logs'))
		fs.mkdirSync('logs');

  const stream = fs.createWriteStream(path.join('logs', `${dateParser('Y-m-d_H')}.log`), { flags : 'a' });
	stream.write(line);
}

module.exports = interface;

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