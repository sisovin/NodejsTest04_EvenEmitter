'use strict';

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        // When Error: ENOENT: no such file or directory, open 'C:\Users\user\Documents\NodejsTest04\logs\eventlog.txt'
        // The directory 'logs' does not exist. Create it.
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        // Testing the appendFile method
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlog.txt'), logItem);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;

//console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));
//console.log(uuid());
console.log('\nBreak the line.\n')
//console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
//console.log(uuid());
//console.log();

