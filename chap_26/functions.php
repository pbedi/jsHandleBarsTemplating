<?php

function isXHR() {
	return isset( $_SERVER[	'HTTP_X_REQUESTED_WITH']);
}

function connect() {
	global $pdo;
	$pdo = new PDO("mysql:host=localhost;dbname=sakila", "admin","b33m3r");
}

function get_actors_by_last_name($letter) {
	global $pdo;

	$stmt = $pdo->prepare('
		SELECT a.`actor_id`, a.`first_name`, a.`last_name` 
		FROM sakila.actor a
		WHERE a.`last_name` LIKE :letter
		LIMIT 50');
	$stmt->execute( array(':letter' => $letter . '%' ) );

	return $stmt->fetchAll( PDO::FETCH_OBJ );

	//SELECT a.`actor_id`, a.`first_name`, a.`last_name` FROM sakila.actor a;
}

function get_actor_info($actor_id) {
	global $pdo;

	$stmt = $pdo->prepare('
		SELECT a.`film_info`, a.`first_name`, a.`last_name` 
		FROM sakila.actor_info a
		WHERE a.`actor_id` LIKE :actor_id
		LIMIT 1');
	$stmt->execute( array(':actor_id' => $actor_id  ) );

	return $stmt->fetch( PDO::FETCH_OBJ );
}
