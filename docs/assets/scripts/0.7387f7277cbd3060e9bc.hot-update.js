webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var foodWidget = function foodWidget($) {
	
		var config = {
			slidesToScroll: 1
		};
	
		var carouselElement = $('#slider-items');
		var presentations = {
			text: $('#text-items'),
			picture: $('#picture-items'),
			nums: $('#num-items')
		};
	
		carouselElement.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: config.slidesToScroll,
			arrows: false
		});
	
		carouselElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var diff = currentSlide - nextSlide;
			for (var key in presentations) {
				if ({}.hasOwnProperty.call(presentations, key)) {
					if (diff > 0) {
						presentations[key].slick('slickPrev');
					} else if (diff < 0) {
						presentations[key].slick('slickNext');
					}
				}
			}
		});
	
		presentations.text.slick({
			slidesToShow: config.slidesToScroll,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			swipe: false
		});
	
		presentations.picture.slick({
			slidesToShow: config.slidesToScroll,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			swipe: false
		});
	
		presentations.nums.slick({
			slidesToShow: config.slidesToScroll,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			swipe: false
		});
	};
	
	module.exports = foodWidget;

/***/ }

})
//# sourceMappingURL=0.7387f7277cbd3060e9bc.hot-update.js.map