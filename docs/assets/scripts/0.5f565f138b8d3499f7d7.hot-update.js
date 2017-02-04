webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var foodWidget = function foodWidget($) {
		var carouselElement = $('#slider-items');
	
		carouselElement.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '#text-items'
		});
	
		var textElements = $('#text-items');
	
		textElements.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true
		});
	};
	
	module.exports = foodWidget;

/***/ }

})
//# sourceMappingURL=0.5f565f138b8d3499f7d7.hot-update.js.map