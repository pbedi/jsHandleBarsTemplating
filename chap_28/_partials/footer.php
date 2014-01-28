	</div>
	<script src="/js/jquery-2.0.3.js" type="text/javascript"></script>
	<script src="/js/handlebars-v1.3.0.js" type="text/javascript"></script>
	<script src="js/searchPlugin.js"></script>
	<script>
	$('div.tweets').queryTwitter({
		search: 'c',
		limit: 5,
		onComplete: function() {
			//console.log(arguments);
		},
		//refresh: 4000,
		transition: 'none'
	});
	</script>
</body>
</html>