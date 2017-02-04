webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var scrollToAnchor = function scrollToAnchor($) {
		$('a[href*="#"]').on('click', function (event) {
			event.preventDefault();
			var offset = $(this.hash).offset();
			if (offset) {
				$('html,body').animate({ scrollTop: offset.top }, 500);
			}
		});
	};
	
	module.exports = scrollToAnchor;

/***/ }

})
//# sourceMappingURL=0.a6331cd1d9baf144e5c7.hot-update.js.map