var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// On gère les requêtes HTTP des utilisateurs en leur renvoyant les fichiers du dossier 'public'
app.use("/", express.static(__dirname + "/public"));

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
  socket.on('newmessage', function (message) {
	  console.log( 'Message received: ' + message );
	  socket.emit('newmessage', message);
  });
  
  /**
   * Réception de l'événement 'catch'
   */
  socket.on('catch', function (message) {
	  console.log( 'Catch: ' + message );
  });
});

// On lance le serveur en écoutant les connexions arrivant sur le port 3000
http.listen(8080, function(){
  console.log('Server is listening on *:8080');
});
