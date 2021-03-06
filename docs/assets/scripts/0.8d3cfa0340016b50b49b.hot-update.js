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
			fade: true
		});
	};
	
	module.exports = foodWidget;

/***/ }

})
//# sourceMappingURL=0.8d3cfa0340016b50b49b.hot-update.js.map