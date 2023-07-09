const Logger = require('./logger');

const logger = new Logger;

//since we extended the EventEmitter() class in logger.js file we are able to use .on() method (listener) in our logger instance. The .on() listener takes 
logger.on('message', (data)=> {
    console.log('Called Listener:', data);
})

logger.log('Hello world!', 'This is appending text');