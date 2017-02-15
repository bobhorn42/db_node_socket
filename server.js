var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Server listens on port 8080
http.listen(8080, function(){
  console.log('Server is listening on *:8080');
});

io.on('connection', function (socket) {

  /**
   * Log de connexion et de déconnexion des utilisateurs
   */
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconected');
  });

  /**
   * Réception de l'événement 'newmessage' et réémission vers l'utilisateur
   */
  socket.on('newmessage', function (data) {
	  console.log( 'Message received: ' + data );
	  socket.emit('newmessage', data);
  });
  
  /**
   * Réception de l'événement 'catch'
   */
  socket.on('catch', function (data) {
	  console.log( 'Catch: ' + data );
  });
});
