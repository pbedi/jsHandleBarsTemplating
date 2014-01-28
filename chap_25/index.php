<?php
require 'functions.php';

if (isset($_POST['q'])) {
	connect();

	$actors = get_actors_by_last_name($_POST['q']);

	//print_r($actors);
}
include 'views/index.tmpl.php';
