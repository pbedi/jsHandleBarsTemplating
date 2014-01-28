<?php

require 'functions.php';

connect();
if (isset($_GET['actor_id']))
$info = get_actor_info($_GET['actor_id']);
#print_r($info);
include 'views/actor.tmpl.php';