<?php
	
	// Connexion à la base de données
	$dbname="<db-name>";
	$dbuser="<db-user>";
	$dbpwd="<db-password>";
	try
	{
		$bdd = new PDO('mysql:host=localhost;dbname='.$dbname, $dbuser, $dbpwd);
	}
	catch(Exception $e)
	{
		die('Erreur : '.$e->getMessage());
	}

	$query = $bdd->prepare( 'INSERT INTO message VALUES( \'\', :message )' );
	$query->execute( array( 'message' => $_POST[ 'message' ]; ) );
	
?>
