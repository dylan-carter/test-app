var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (contents) {
    console.log('this is the contents of the new message:', contents);
});
