webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var foodWidget = function foodWidget($) {
		// const carouselElement = $('#slider-items');
	
		// carouselElement.slick({
		// 	infinite: true,
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	arrows: false
		// });
	
		var textElements = $('#text-items');
		textElements.css('width', '300px');
	
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
//# sourceMappingURL=0.4fa354ea0cbe47feda68.hot-update.js.map