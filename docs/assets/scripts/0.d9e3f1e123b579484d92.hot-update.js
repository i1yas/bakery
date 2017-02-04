webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var scrollToAnchor = function scrollToAnchor($) {
		$('a[href*="#"]').on('click', function (event) {
			event.preventDefault();
			$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
		});
	};
	
	module.exports = scrollToAnchor;

/***/ }

})
//# sourceMappingURL=0.d9e3f1e123b579484d92.hot-update.js.map