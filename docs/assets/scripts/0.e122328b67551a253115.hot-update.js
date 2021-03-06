webpackHotUpdate(0,{

/***/ 7:
/***/ function(module, exports) {

	'use strict';
	
	var navbar = function navbar($) {
		var modifier = 'opened';
		var blockClass = 'header';
	
		var navigationElements = {
			navigation: $('.' + blockClass + '__navigation'),
			menu: $('.' + blockClass + '__menu'),
			icons: $('.' + blockClass + '__icons')
		};
	
		var mobileNav = $(blockClass + '__mobile-nav');
	
		mobileNav.on('click', function () {
			debugger;
			for (var element in navigationElements) {
				if ({}.hasOwnProperty.call(navigationElements, element)) {
					navigationElements[element].toggleClass(blockClass + '__' + element + '_' + modifier);
				}
			}
		});
	};
	
	module.exports = navbar;

/***/ }

})
//# sourceMappingURL=0.e122328b67551a253115.hot-update.js.map