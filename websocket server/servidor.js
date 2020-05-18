var express = require('express');
var app = express();
var servidor = require('http').createServer(app);
var io = require('socket.io').listen(servidor);
user = [];
connections = [];

servidor.listen(process.env.PORT || 3000);
console.log('Servidor rodando na porta 3000');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Conectado: %s sockets permanecem conectados', connections.length);

    /* desconexões */
    socket.on('disconnect', function(data){
        users.splice(users.indexOf(socket.username), 1);
        connections.splice(connections.indexOf(socket), 1);
        console.log('Desconectado: %s sockets permanecem conectados', connections.length);
    });
   
    /* envio de mensagens */
    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg: data, user: socket.username});
    });
     
});