// Utility
if (typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

( function($, window, document, undefined) {
		var Twitter = {
			init: function( options, elem ) {
				var self = this;
				self.elem = elem;
				self.$elem = $( elem );
				self.url = '/chap_28/index.php';
				(typeof options === 'string')?
					self.search = options:
					self.search = options.search;
				self.options = $.extend( {}, $.fn.queryTwitter.options, options);
				self.searchStr = self.options.search;
				self.refresh(1);
			},

			refresh: function( length ) {
				var self = this;
				setTimeout(function() {
					self.fetch(length).done( function( results) {
						results = self.limit(results, self.options.limit);
						self.buildFrag(results);
						self.display();
						
						if(typeof self.options.onComplete === 'function'){
							self.options.onComplete.apply( self.elem, arguments);
						}

						if ( self.options.refresh ) {
							self.refresh();
						}
					});
				}, length || self.options.refresh );
			},

			fetch: function(flag) {
				var str = this.search;
				if(flag === undefined) {
					
					str = this.randomString();
					this.searchStr = str;
					console.log(str);
				}
				return $.ajax({
					url: this.url,
					type:'POST',
					data: {q: str},
					dataType: 'json'
				});
			},
			display: function() {
				var self = this;
				
				self.tweets.unshift ('Search string: <b style="font-size:1.2em;text-transform:uppercase;">'+self.searchStr+'</b><br>');
				if( self.options.transition === 'none' || !self.options.transition ) {
					self.$elem.html( self.tweets);
				} else {
					self.$elem[ self.options.transition ](self.options.duration, function(){
						$(this).html(self.tweets)[ self.options.transition ] ( self.options.duration );
					});
				}
				
			},

			buildFrag: function(results) {
				var self = this;

				self.tweets = $.map(results, function(obj, i){
					return $(self.options.wrapEachWith).append( obj.first_name + ' ' + obj.last_name)[0];
				});
				if(self.tweets.length === 0){
					self.tweets.push('<li>No records to display</li>');
				}
				//console.log(self.tweets);
			},
			limit: function(obj, count) {
				return obj.slice(0, count);
			},
			randomString: function() {
				var chars = "abcdefghiklmnopqrstuvwxyz"
				var string_length = 1;
				var randomstring = '';
				for (var i=0; i<string_length; i++) {
					var rnum = Math.floor(Math.random() * chars.length);
					randomstring += chars.substring(rnum,rnum+1);
				}
				return randomstring;
			}
		};

	$.fn.queryTwitter = function( options ) {
		//console.log('called');
		return this.each(function() {
			var twitter = Object.create( Twitter );
			twitter.init(options, this);
		});
	};

	$.fn.queryTwitter.options = {
		search: 'a',
		wrapEachWith: '<li></li>',
		limit: 10,
		refresh: null,
		onComplete: null,
		transition: 'fadeToggle',
		duration: 500
	};

})( jQuery, window, document );