webpackHotUpdate(0,{

/***/ 7:
/***/ function(module, exports) {

	'use strict';
	
	var navbar = function navbar($) {
		var modifier = 'opened';
		var blockClass = '.header';
	
		var navigationElements = {
			navigation: $(blockClass + '__navigation'),
			menu: $(blockClass + '__menu'),
			icons: $(blockClass + '__icons')
		};
	
		var mobileNav = $(blockClass + '__mobile-nav');
	
		mobileNav.on('click', function () {
			for (var element in navigationElements) {
				if ({}.hasOwnProperty(navigationElements, element)) {
					navigationElements[element].toogleClass(blockClass + '__' + element + '_' + modifier);
				}
			}
		});
	};
	
	module.exports = navbar;

/***/ }

})
//# sourceMappingURL=0.8d25ecd73dfbf4764d7a.hot-update.js.map