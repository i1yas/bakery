webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _header = __webpack_require__(5);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _scrollAnchor = __webpack_require__(8);
	
	var _scrollAnchor2 = _interopRequireDefault(_scrollAnchor);
	
	__webpack_require__(6);
	
	var _foodWidget = __webpack_require__(7);
	
	var _foodWidget2 = _interopRequireDefault(_foodWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _header2.default)(_jquery2.default);
		(0, _scrollAnchor2.default)(_jquery2.default);
		(0, _foodWidget2.default)(_jquery2.default);
	});

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var scrollToAnchor = function scrollToAnchor($) {
		$('a[href*=#]').on('click', function (event) {
			event.preventDefault();
			$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
		});
	};
	
	module.exports = scrollToAnchor;

/***/ }

})
//# sourceMappingURL=0.4f6cd805a774edd19122.hot-update.js.map