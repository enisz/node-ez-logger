# Node EZ Logger
Simple logging module for node.js

<!-- toc -->

- [Introduction](#introduction)
- [Usage](#usage)
  * [Install](#install)
  * [Require](#require)
  * [Use](#use)
- [Configuration](#configuration)
  * [Date Format](#date-format)
  * [Log Path](#log-path)

<!-- tocstop -->

## Introduction
This module is writing log messages to the console and to files in the log folder.

## Usage
### Install
Install the package with NPM
```
npm install node-ez-logger
```

### Require
In your script file include the module
```
const logger = require('node-ez-logger');
```

### Use
In your code you can log with info(), warning(), error() or debug() methods

```
logger.info('info message in the log');
logger.warning('warning message in the log');
logger.error('error message in the log');
logger.debug('debug message in the log');
```

## Configuration
You have the possibility to change the path, where the file will be placed, and the format of the date in the logfiles and in the console.
### Date Format
``logger.config.dateFormat(format: string): void``
<p>
The timestamp will be written in this format to the console and the logfile. The date format will be parsed by the [node-date-parser](https://www.npmjs.com/package/node-date-parser) module. Default value is: ``Y-m-d H:i:s,V``
</p>

```
logger.config.dateFormat('Y-m-d H:i:s,V');
```
### Log Path
``logger.config.logPath(path: string): void``
<p>
You can specify a different logging path if you need to. By default the files will be created in the logs folder in the same directory where your main file is running.
</p>
> Note: You only have to provide a path! If this path doesn't exist, the script will create it for you.

```
logger.config.logPath('custompath/logs');
```