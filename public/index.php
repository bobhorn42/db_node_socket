<?php
// Connexion à la base de données
$dbname="testmini";
$dbuser="root";
$dbpwd="n$37HNUCT";
try
{
    $bdd = new PDO('mysql:host=localhost;dbname='.$dbname, $dbuser, $dbpwd);
}
catch(Exception $e)
{
    die('Erreur : '.$e->getMessage());
}
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO test</title>
  </head>
  <body>
    <form id="msg">
		<input id="m" type="text" placeHolder="Message" />
		<input type="submit" value="Send" />
	</form>
	<div>
		<ul id="messages">
			<?php 
				$query = $bdd->prepare("SELECT `messages` FROM `".$dbname."`.`message`;");
				$query->execute();
				
				// revoir la suite
				$messages = $query->fetchAll( PDO::FETCH_OBJ );
				foreach( $messages as $message ):
			?>
				<li><?php echo $message->messages; ?></li>
			<?php endforeach; ?>
		</ul>
	</div>
  </body>
</html>
