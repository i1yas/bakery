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
			swipe: false
		});
	
		var pictureItems = $('#pictureItems');
	
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
//# sourceMappingURL=0.8d93f2ce5ed8aa106e8c.hot-update.js.map