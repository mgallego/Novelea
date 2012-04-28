var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {

    socket.on('envio', function (data) {
        
        socket.broadcast.emit('respuesta', { respuesta: data.respuesta });
        
    });

});