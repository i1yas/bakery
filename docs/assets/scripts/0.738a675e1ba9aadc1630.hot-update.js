webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _header = __webpack_require__(7);
	
	var _header2 = _interopRequireDefault(_header);
	
	__webpack_require__(5);
	
	var _foodWidget = __webpack_require__(6);
	
	var _foodWidget2 = _interopRequireDefault(_foodWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _header2.default)(_jquery2.default);
		(0, _foodWidget2.default)(_jquery2.default);
	});

/***/ },

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
//# sourceMappingURL=0.738a675e1ba9aadc1630.hot-update.js.map