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
	
		// const textElements = $('#text-items');
	
		// textElements.slick({
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	arrows: false,
		// 	fade: true
		// });
	};
	
	module.exports = foodWidget;

/***/ }

})
//# sourceMappingURL=0.d9f79e287a0d1400282b.hot-update.js.map