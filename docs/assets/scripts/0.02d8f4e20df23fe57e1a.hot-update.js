webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var foodWidget = function foodWidget($) {
	
		var config = {
			slidesToScroll: 1
		};
	
		var carouselElement = $('#slider-items');
	
		carouselElement.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: config.slidesToScroll,
			arrows: false,
			asNavFor: '#text-items'
		});
	
		var textElements = $('#text-items');
	
		textElements.slick({
			slidesToShow: config.slidesToScroll,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			fade: true,
			swipe: false,
			asNavFor: '#picture-items'
		});
	
		var pictureItems = $('#picture-items');
	
		pictureItems.slick({
			slidesToShow: config.slidesToScroll,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			fade: true,
			swipe: false
		});
	};
	
	module.exports = foodWidget;

/***/ }

})
//# sourceMappingURL=0.02d8f4e20df23fe57e1a.hot-update.js.map