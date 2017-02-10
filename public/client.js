var socket = io();
var i, j;

/*** Gestion des événements ***/

/**
 * Envoi d'un message
 */
$('#msg form').submit(function (e) {
  e.preventDefault();
  var message = {
    text : $('#m').val()
  };
  $('#m').val('');
  if (message.text.trim().length !== 0) { // Gestion message vide
    socket.emit('newmessage', message);
  }
  $('#msg input').focus(); // Focus sur le champ du message
  
    // Ajax call for saving datas
	$.ajax({
		url: "./public/insertNewMessage.php",
		type: "POST",
		data: { message: message.text },
		success: function(data) {
			socket.emit('catch', 'Ajax call OK');
		}
	});
	
	return false;
});

/**
 * Réception d'un message
 */
socket.on( 'message', function( data ) {
	var actualContent = $( "#messages" ).html();
	var newMsgContent = '<li>' data.message + '</li>';
	var content = newMsgContent + actualContent;
	
	$( "#messages" ).html( content );
});
