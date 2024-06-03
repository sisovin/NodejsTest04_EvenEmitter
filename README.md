# NodejsTest04 : Event Emitter
In the provided code, an EventEmitter is being used in Node.js to create custom events and handle them asynchronously. Here's a breakdown of how it works:

1. In the index.js file:
- logEvents is a function imported from the 'logEvents' module.
- The EventEmitter class is imported from the 'events' module.
- A custom class MyEmitter is created that extends the EventEmitter class.
- An instance of MyEmitter is initialized as myEmitter.
- An event listener is added to myEmitter for the 'log' event which will call the logEvents function when the event is emitted.
- After a timeout of 2 seconds, the 'log' event is emitted with the message 'Log event emitted!'.

2. In the logEvents.js file:
- The logEvents function takes a message as its argument.
- The current date and time are formatted using the date-fns library and a unique identifier is generated using the uuid library.
- A log item string is created with the formatted date, uuid, and message.
- The log item is logged to the console.
- If the 'logs' directory does not exist, it is created using fsPromises.mkdir.
- The log item is appended to the 'eventlog.txt' file in the 'logs' directory using fsPromises.appendFile. If an error occurs, it is caught and logged to the console.

Overall, this code structure demonstrates how to use an EventEmitter in Node.js to create and handle custom events. It also showcases asynchronous file operations using the fs module and fsPromises to log events to a file.


