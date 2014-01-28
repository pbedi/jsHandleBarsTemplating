(function  ($) {
	var sliderUL = $('div.slider').css('overflow','hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width, //600
		imgsLen = imgs.length, // 4
		current = 1,
		totalImgsWidth = imgsLen * imgWidth; // 2400
		//console.log(imgsLen);
		
		$('#slider-nav').show().find('button').on('click', function(){
			var direction = $(this).data('dir')
				loc = imgWidth; // 600
			// update current value
			(direction === 'next')? ++current: --current;
			if( current === 0) {
				current = imgsLen;
				direction = 'next';
				loc = totalImgsWidth - imgWidth;

			} else if ( current - 1 === imgsLen) {
				current = 1;
				loc = 0;
			}
			transition(sliderUL, loc, direction);
		});

		function transition( container, loc, direction) {
			var unit;
			if (direction && loc !== 0) {
				unit = ( direction === 'next') ? '-=': '+=';
			}
			container.animate ({
				'margin-left': unit ? (unit + loc) : loc
			});
		}
})(jQuery);