# Node EZ Logger
Simple logging module for node.js

<!-- toc -->

- [Introduction](#introduction)
- [Usage](#usage)
  * [Install](#install)
  * [Require](#require)
  * [Use](#use)

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