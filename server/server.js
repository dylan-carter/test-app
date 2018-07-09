
// -------------------------
// ---- (SET UP SCRIPT) => {
// -------------------------

// A) LOAD MODULES - BUILT IN
// -------------------------
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// -------------------------

// B) LOAD MODULES - APP SPECIFIC
// -------------------------

// -------------------------

// C) LOAD MODULES - APP SPECIFIC
// -------------------------

// -------------------------



// -------------------------
// ---- };
// -------------------------


// ESTABLISH LISTENING SERVER
// -------------------------
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log(`New user connected. User id: ${socket.id}`);

    socket.on('createMessage', (message) => {
        console.log('createMessage:', message);
        socket.emit('newMessage', message);
    });

    socket.on('disconnect', () => {
        console.log(`User has been disconnected. User id: ${socket.id}`);
    });

});

server.listen(port, () => {
    console.log(`Server has been established on port ${port}`);
});
// -------------------------
