webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var scrollToAnchor = function scrollToAnchor($) {
		$('a[href*="#"]').on('click', function (event) {
			event.preventDefault();
			var hash = $(this.hash);
			$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
		});
	};
	
	module.exports = scrollToAnchor;

/***/ }

})
//# sourceMappingURL=0.e5c191fc3c3ad558d191.hot-update.js.map