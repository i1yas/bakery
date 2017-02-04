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
		var arrows = {
			left: $('#slider-left-arrow'),
			right: $('#slider-right-arrow')
		};
	
		carouselElement.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: config.slidesToScroll,
			arrows: false
		});
	
		carouselElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			for (var key in presentations) {
				if ({}.hasOwnProperty.call(presentations, key)) {
					presentations[key].slick('slickGoTo', nextSlide);
				}
			}
		});
	
		arrows.left.on('click', function () {
			carouselElement.slick('slickPrev');
		});
		arrows.right.on('click', function () {
			carouselElement.slick('slickNext');
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
//# sourceMappingURL=0.bd80512d2dd46e1cd3b4.hot-update.js.map