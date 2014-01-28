function Slider(container, nav) {
	this.container = container;
	this.nav = nav.show();
	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;
	this.events.mouseOver.call(this);
	this.events.mouseOut.call(this);
	this.countEnter = 0;
	this.countLeave = 0;
}

Slider.prototype.transition = function(coords) {
	this.container.animate({
		'margin-left': coords || -(this.current * this.imgWidth)
	});
};

Slider.prototype.setCurrent = function(dir) {
	var pos = this.current;
	pos += (~~(dir === 'next') || -1);
	this.current = (pos < 0 ) ? this.imgsLen -1 : pos % this.imgsLen;

	return pos;
};
Slider.prototype.events = {
	mouseOver: function(){
		var self = this;
		self.nav.find('button').on('mouseover',function(){
			var dir = $(this).data('dir');
			self.countEnter++;
			console.log('over:'+dir+' :count='+self.countEnter);
		});
	},
	mouseOut: function(){
		var self = this;
		self.nav.find('button').on('mouseout',function(){
			var dir = $(this).data('dir');
			self.countLeave++;
			console.log('out:'+dir+' :count='+self.countLeave);
		});
	}

};
//var slider = new Slider($('div.slider'), $('#slider-nav'));