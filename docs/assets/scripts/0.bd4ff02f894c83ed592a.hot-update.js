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
			slidesToScroll: config.slidesToScroll,
			slidesToShow: 1,
			arrows: false,
			fade: true,
			swipe: false
		});
	
		presentations.picture.slick({
			slidesToScroll: config.slidesToScroll,
			slidesToShow: 1,
			arrows: false,
			fade: true,
			swipe: false
		});
	
		presentations.nums.slick({
			slidesToScroll: config.slidesToScroll,
			slidesToShow: 1,
			arrows: false,
			fade: true,
			swipe: false
		});
	};
	
	module.exports = foodWidget;

/***/ }

})
//# sourceMappingURL=0.bd4ff02f894c83ed592a.hot-update.js.map