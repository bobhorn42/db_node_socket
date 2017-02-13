<?php
	
	include_once "dbconnect.php";
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
