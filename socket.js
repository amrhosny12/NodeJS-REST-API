/**
 * this file will manage the connection with the socke.io and w can import it
 * to connect to the server initally (init) and grab the connection later (getIO)
 *  # init - function used in app.js when connection is being established with the server
 *  # getIO, grabs the already existing socket connection 
 */ 

let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer);
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error ("Socket.io is not initialized !");
        }
        return io;
    }
};