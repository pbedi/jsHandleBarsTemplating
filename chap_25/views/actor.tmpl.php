<?php include '_partials/header.php'; ?>

<?php
	if(isset($info)) {
		echo "<h1>{$info->first_name} {$info->last_name}</h1>";
		echo "<p>{$info->film_info}</>";
	} else {
		echo "<p>No results available.</p>";
	} 
?>
<P><a href="index.php">Back</a></P>
<?php include '_partials/footer.php'; ?>