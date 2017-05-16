webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResInfo = function (_React$Component) {
	_inherits(ResInfo, _React$Component);

	function ResInfo() {
		_classCallCheck(this, ResInfo);

		return _possibleConstructorReturn(this, (ResInfo.__proto__ || Object.getPrototypeOf(ResInfo)).apply(this, arguments));
	}

	_createClass(ResInfo, [{
		key: 'render',
		value: function render() {
			var data = this.props.data;
			var img_path = _commonMethod2.default.getImg(data, 'image_path');
			var title = '',
			    tags = [],
			    delivery = '';
			if (!data.is_premium) {
				title = _react2.default.createElement(
					'h4',
					{ className: 'res-title no-brand' },
					data.name
				);
			} else {
				title = _react2.default.createElement(
					'h4',
					{ className: 'res-title' },
					data.name
				);
			}

			if (data.supports) {
				for (var j = 0; j < data.supports.length; j++) {
					if (data.supports[j].icon_name === "保") {
						tags.push(_react2.default.createElement(
							'i',
							{ className: 'tags sure', key: j },
							'\u4FDD'
						));
					} else if (data.supports[j].icon_name === "票") {
						tags.push(_react2.default.createElement(
							'i',
							{ className: 'tags ticket', key: j },
							'\u7968'
						));
					} else if (data.supports[j].icon_name === "准") {
						tags.push(_react2.default.createElement(
							'i',
							{ className: 'tags exact', key: j },
							'\u51C6'
						));
					}
				}
			}

			if (data.delivery_mode) {
				delivery = _react2.default.createElement(
					'div',
					{ className: 'center-tag' },
					_react2.default.createElement(
						'span',
						{ className: 'ontime' },
						'\u51C6\u65F6\u8FBE'
					),
					_react2.default.createElement(
						'span',
						{ className: 'feeder' },
						'\u8702\u9E1F\u4E13\u9001'
					)
				);
			}

			return _react2.default.createElement(
				'a',
				{ href: '#/detail/' + data.id },
				_react2.default.createElement(
					'dl',
					{ className: 'restaurant' },
					_react2.default.createElement(
						'dt',
						{ className: 'res-img' },
						_react2.default.createElement('img', { src: img_path })
					),
					_react2.default.createElement(
						'dd',
						{ className: 'res-dis' },
						_react2.default.createElement(
							'div',
							{ className: 'dis-top' },
							title,
							_react2.default.createElement(
								'div',
								{ className: 'top-tag' },
								tags
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'dis-center' },
							_react2.default.createElement(
								'div',
								{ className: 'res-info' },
								_react2.default.createElement(
									'div',
									{ className: 'r-star' },
									_react2.default.createElement('img', { className: 'rate-star', src: '/src/img/star.png' }),
									_react2.default.createElement('i', { className: 'star-filter', style: { width: (5 - data.rating) / 5 * 100 + '%' } })
								),
								_react2.default.createElement(
									'span',
									null,
									data.rating
								),
								'\u6708\u552E',
								data.recent_order_num,
								'\u5355'
							),
							delivery
						),
						_react2.default.createElement(
							'div',
							{ className: 'dis-bottom' },
							_react2.default.createElement(
								'p',
								{ className: 'res-price' },
								'\uFFE5',
								_react2.default.createElement(
									'span',
									{ className: 'r-begin' },
									data.float_minimum_order_amount
								),
								'\u8D77\u9001 / \u914D\u9001\u8D39\uFFE5',
								_react2.default.createElement(
									'span',
									{ className: 'r-add' },
									data.float_delivery_fee
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'bottom-tag' },
								_react2.default.createElement(
									'span',
									{ className: 'r-distance' },
									(data.distance / 1000).toFixed(2) + 'km'
								),
								' / ',
								_react2.default.createElement(
									'span',
									{ className: 'r-time' },
									data.order_lead_time,
									'\u5206\u949F'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return ResInfo;
}(_react2.default.Component);

exports.default = ResInfo;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _input = __webpack_require__(239);

var _input2 = _interopRequireDefault(_input);

var _searchInfo = __webpack_require__(240);

var _searchInfo2 = _interopRequireDefault(_searchInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addrs = [];

var Address = function (_React$Component) {
	_inherits(Address, _React$Component);

	function Address(props) {
		_classCallCheck(this, Address);

		var _this = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));

		_this.state = {
			text: '',
			addressList: addrs || []
		};
		return _this;
	}

	_createClass(Address, [{
		key: 'update',
		value: function update(list) {
			if (list instanceof Array) {
				this.setState({
					addressList: list
				});
				addrs = list;
			} else {
				this.setState({
					addressList: []
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			return _react2.default.createElement(
				'div',
				{ id: 'address' },
				_react2.default.createElement(_input2.default, { fn: that.update.bind(this) }),
				_react2.default.createElement(
					'div',
					{ className: 'content has-header' },
					this.state.addressList.map(function (value, index) {
						return _react2.default.createElement(_searchInfo2.default, { data: value, key: index });
					})
				)
			);
		}
	}]);

	return Address;
}(_react2.default.Component);

exports.default = Address;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

var _header = __webpack_require__(245);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(246);

var _nav2 = _interopRequireDefault(_nav);

var _foodNav = __webpack_require__(244);

var _foodNav2 = _interopRequireDefault(_foodNav);

var _foodList = __webpack_require__(243);

var _foodList2 = _interopRequireDefault(_foodList);

var _cart = __webpack_require__(241);

var _cart2 = _interopRequireDefault(_cart);

var _cartView = __webpack_require__(242);

var _cartView2 = _interopRequireDefault(_cartView);

var _shopInf = __webpack_require__(247);

var _shopInf2 = _interopRequireDefault(_shopInf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
	_inherits(Detail, _React$Component);

	function Detail(props) {
		_classCallCheck(this, Detail);

		var _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));

		_this.state = {
			resInf: {},
			foodInf: {},
			orderCount: 0,
			orderPrice: 0,
			orderedFood: {},
			cartStatus: false,
			shopInfPos: '100%'
		};
		return _this;
	}

	_createClass(Detail, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var that = this;

			this.setState({
				orderedFood: {} || _commonMethod2.default.store('orderedFood')[this.props.match.params.id]
			});

			// 发送 ajax 请求
			var loca = _commonMethod2.default.store('loca');

			// 商店信息
			var res_url = "https://mainsite-restapi.ele.me/shopping/restaurant/" + this.props.match.params.id + "?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=" + loca.lat + "&longitude=" + loca.lnt;
			fetch(res_url).then(function (res) {
				return res.json();
			}).then(function (data) {
				that.setState({
					resInf: data
				});
			});

			// 食品信息
			var food_url = 'https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=' + this.props.match.params.id;
			fetch(food_url).then(function (res) {
				return res.json();
			}).then(function (data) {

				var orderedFood = _commonMethod2.default.store(that.props.match.params.id);

				if (orderedFood) {
					for (var key in orderedFood) {
						that.setState({
							orderCount: that.state.orderCount + orderedFood[key].num,
							orderPrice: that.state.orderPrice + orderedFood[key].num * orderedFood[key].specfoods[0].price
						});
					}
				} else {
					that.setState({
						orderCount: 0,
						orderPrice: 0
					});
				}
				for (var i in data) {
					for (var j in data[i].foods) {
						// 初始化数量
						data[i].foods[j].num = 0;

						if (orderedFood) {
							// 设置缓存中的数量
							for (var key in orderedFood) {
								if (data[i].foods[j].item_id === key) {
									data[i].foods[j].num = orderedFood[key].num;
								}
							}
						}
					}
				}

				that.setState({
					foodInf: data
				});
			});

			// 绑定整个页面公用的函数
			_commonMethod2.default.factory.showShopInfo = this.showShopInfo.bind(this);
			_commonMethod2.default.factory.plus = this.plus.bind(this);
			_commonMethod2.default.factory.minus = this.minus.bind(this);

			// 记录滚动高度
			_commonMethod2.default.factory.heightArr = [];
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// 注册滚动监听
			//method.touchMove(document.getElementById('scroller'));
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'showShopInfo',
		value: function showShopInfo(val) {
			this.setState({
				shopInfPos: val
			});
		}
	}, {
		key: 'plus',
		value: function plus(foodId) {
			var restaurant_id = this.props.match.params.id;
			var foodInf = this.state.foodInf;
			var num = this.state.orderCount;
			var price = this.state.orderPrice;

			// 查找food
			for (var i in foodInf) {
				for (var j in foodInf[i].foods) {
					if (foodInf[i].foods[j].item_id == foodId) {
						num++;
						foodInf[i].foods[j].num++;
						this.setState({
							orderCount: num,
							orderPrice: price + foodInf[i].foods[j].specfoods[0].price,
							foodInf: foodInf
						});
						this.state.orderedFood[foodId] = foodInf[i].foods[j];
					}
				}
			}

			_commonMethod2.default.store(restaurant_id, this.state.orderedFood);
		}
	}, {
		key: 'minus',
		value: function minus(foodId) {
			var restaurant_id = this.props.match.params.id;
			var foodInf = this.state.foodInf;
			var num = this.state.orderCount;
			var price = this.state.orderPrice;
			// 查找food
			for (var i in foodInf) {
				for (var j in foodInf[i].foods) {
					if (foodInf[i].foods[j].item_id == foodId) {
						num--;
						foodInf[i].foods[j].num--;
						this.setState({
							orderCount: num,
							orderPrice: price - foodInf[i].foods[j].specfoods[0].price,
							foodInf: foodInf
						});
						this.state.orderedFood[foodId] = foodInf[i].foods[j];
					}
				}
			}
			_commonMethod2.default.store(restaurant_id, this.state.orderedFood);
		}
	}, {
		key: 'showCartView',
		value: function showCartView() {
			this.setState({
				cartStatus: !this.state.cartStatus
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			console.log(this.state.resInf.float_minimum_order_amount);
			return _react2.default.createElement(
				'div',
				{ className: 'section', id: 'detail' },
				_react2.default.createElement(
					'div',
					{ className: 'detail-flex' },
					_react2.default.createElement(
						'div',
						{ className: 'shop-header' },
						_react2.default.createElement(_header2.default, { data: this.state.resInf }),
						_react2.default.createElement(_nav2.default, null)
					),
					_react2.default.createElement(
						'div',
						{ className: 'shop-main' },
						_react2.default.createElement(
							'div',
							{ className: 'smain-left' },
							_react2.default.createElement(_foodNav2.default, { data: this.state.foodInf })
						),
						_react2.default.createElement(
							'div',
							{ className: 'smain-right' },
							_react2.default.createElement(
								'div',
								{ className: 'food-wrap', id: 'scroller' },
								function () {
									if (that.state.foodInf[0]) {
										return that.state.foodInf.map(function (val, i) {
											return _react2.default.createElement(_foodList2.default, { num: i, key: i, data: val });
										});
									}
								}()
							)
						)
					),
					_react2.default.createElement(_cartView2.default, { status: this.state.cartStatus, fn: this.showCartView.bind(this) }),
					_react2.default.createElement(_cart2.default, { data: this.state.resInf, count: this.state.orderCount, price: this.state.orderPrice, fn: this.showCartView.bind(this), dif: (this.state.resInf.float_minimum_order_amount - this.state.orderPrice).toFixed(2) })
				),
				_react2.default.createElement(
					'div',
					{ className: 'shop-info-wrap', style: { left: this.state.shopInfPos } },
					_react2.default.createElement(_shopInf2.default, { data: this.state.resInf })
				)
			);
		}
	}]);

	return Detail;
}(_react2.default.Component);

exports.default = Detail;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _header = __webpack_require__(64);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(99);

var _footer2 = _interopRequireDefault(_footer);

var _account = __webpack_require__(248);

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = function (_React$Component) {
	_inherits(Mine, _React$Component);

	function Mine() {
		_classCallCheck(this, Mine);

		return _possibleConstructorReturn(this, (Mine.__proto__ || Object.getPrototypeOf(Mine)).apply(this, arguments));
	}

	_createClass(Mine, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'mine' },
				_react2.default.createElement(_header2.default, { text: '\u6211\u7684' }),
				_react2.default.createElement(
					'div',
					{ className: 'main' },
					_react2.default.createElement(_account2.default, null)
				),
				_react2.default.createElement(_footer2.default, null)
			);
		}
	}]);

	return Mine;
}(_react2.default.Component);

exports.default = Mine;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

var _weather = __webpack_require__(251);

var _weather2 = _interopRequireDefault(_weather);

var _swipe = __webpack_require__(250);

var _swipe2 = _interopRequireDefault(_swipe);

var _searchInp = __webpack_require__(249);

var _searchInp2 = _interopRequireDefault(_searchInp);

var _restaurant = __webpack_require__(100);

var _restaurant2 = _interopRequireDefault(_restaurant);

var _footer = __webpack_require__(99);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 缓存页面信息
var cacheGeo = '',
    title = {},
    weather = {},
    swipePic = [],
    hotWords = [],
    restaurant = [];

var Rlist = function (_React$Component) {
	_inherits(Rlist, _React$Component);

	function Rlist(props) {
		_classCallCheck(this, Rlist);

		var _this = _possibleConstructorReturn(this, (Rlist.__proto__ || Object.getPrototypeOf(Rlist)).call(this, props));

		_this.state = {
			title: title || {},
			weather: weather || {},
			swipePic: swipePic || [],
			hotWords: hotWords || [],
			restaurant: restaurant || []
		};
		return _this;
	}

	_createClass(Rlist, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var that = this;

			var loca = _commonMethod2.default.store('loca');
			if (loca) {
				var geohash = loca.geohash;
				var lat = loca.lat;
				var lnt = loca.lnt;
			}
			if (loca && swipePic.length === 0 || geohash && geohash !== cacheGeo) {

				// 缓存地理位置
				cacheGeo = geohash;

				var loca_url = '/v2/pois/' + geohash;
				var swipe_url = '/v2/index_entry?geohash=' + geohash + '&group_type=1&flags[]=F';
				var weather_url = '/bgs/weather/current?latitude=' + lat + '&longitude=' + lnt;
				var hotwords_url = '/shopping/v3/hot_search_words?latitude=' + lat + '&longitude=' + lnt;
				var restaurant_url = '/shopping/restaurants?latitude=' + lat + '&longitude=' + lnt + '&offset=0&limit=20&extras[]=activities&terminal=h5';

				fetch(loca_url).then(function (res) {
					return res.json();
				}).then(function (data) {
					that.setState({
						title: data
					});
					title = data;
				});

				fetch(weather_url).then(function (res) {
					return res.json();
				}).then(function (data) {
					that.setState({
						weather: data
					});
					weather = data;
				});

				fetch(hotwords_url).then(function (res) {
					return res.json();
				}).then(function (data) {
					var arr = [];
					for (var prop in data) {
						arr.push(data[prop].word);
					}
					that.setState({
						hotWords: arr
					});
					hotWords = arr;
				});

				fetch(swipe_url).then(function (res) {
					return res.json();
				}).then(function (data) {
					that.setState({
						swipePic: data
					});
					swipePic = data;
				});

				fetch(restaurant_url).then(function (res) {
					return res.json();
				}).then(function (data) {
					that.setState({
						restaurant: data
					});
					restaurant = data;
				});
			} else if (!loca) {
				that.setState({
					title: {
						name: '请先设置地址哦'
					}
				});
			}
		}
	}, {
		key: 'loadMore',
		value: function loadMore() {
			console.log(1);
			var restaurant_url = '/shopping/restaurants?latitude=' + lat + '&longitude=' + lnt + '&offset=0&limit=20&extras[]=activities&terminal=h5';
			fetch(url).then(function (res) {
				res.json();
			}).then(function (data) {
				console.log(data);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'rlist' },
				_react2.default.createElement(
					'div',
					{ className: 'r-wrap' },
					_react2.default.createElement(
						'div',
						{ className: 'header' },
						_react2.default.createElement(
							'div',
							{ className: 'header-top' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/address' },
								_react2.default.createElement('span', { className: 'icon-loca' }),
								_react2.default.createElement(
									'h2',
									{ className: 'location' },
									this.state.title.name
								)
							),
							_react2.default.createElement(_weather2.default, { data: this.state.weather })
						),
						_react2.default.createElement(
							'div',
							{ className: 'header-center' },
							_react2.default.createElement(_searchInp2.default, null)
						),
						_react2.default.createElement(
							'div',
							{ className: 'header-bottom' },
							_react2.default.createElement(
								'ul',
								null,
								this.state.hotWords.map(function (value, index) {
									return _react2.default.createElement(
										'li',
										{ key: index },
										value
									);
								})
							)
						)
					),
					_react2.default.createElement(_swipe2.default, { data: this.state.swipePic }),
					_react2.default.createElement(
						'div',
						{ className: 'content' },
						_react2.default.createElement(
							'h3',
							{ className: 'c-title' },
							'\u63A8\u8350\u5546\u5BB6'
						),
						_react2.default.createElement(
							'section',
							null,
							this.state.restaurant.map(function (value, index) {
								return _react2.default.createElement(_restaurant2.default, { data: value, key: index });
							})
						)
					)
				),
				_react2.default.createElement(_footer2.default, null)
			);
		}
	}]);

	return Rlist;
}(_react2.default.Component);

exports.default = Rlist;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _input = __webpack_require__(252);

var _input2 = _interopRequireDefault(_input);

var _sortNav = __webpack_require__(253);

var _sortNav2 = _interopRequireDefault(_sortNav);

var _restaurant = __webpack_require__(100);

var _restaurant2 = _interopRequireDefault(_restaurant);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.state = {
			restaurants: [],
			keyword: '',
			sortStatus: ''
		};
		return _this;
	}

	_createClass(Search, [{
		key: 'sendRequest',
		value: function sendRequest(keyword) {
			var that = this;
			this.setState({
				keyword: keyword
			});
			var loca = _commonMethod2.default.store('loca');
			var url = '/shopping/v1/restaurants/search?latitude=' + loca.lat + '&longitude=' + loca.lnt + '&keyword=' + keyword + '&offset=0&search_item_type=2&limit=20&extras[]=activities';
			fetch(url).then(function (res) {
				return res.json();
			}).then(function (data) {
				var arr = [];
				var defaultArr = [];
				for (var prop in data) {
					data[prop].restaurant_with_foods.map(function (val, i) {
						val.restaurant.sortE = i;
						arr.push(val.restaurant);
					});
				}
				that.setState({
					restaurants: arr
				});
			});
		}
	}, {
		key: 'sortRes',
		value: function sortRes(sortType, big) {
			var arr = this.state.restaurants;
			arr.sort(function (a, b) {
				if (big) {
					return b[sortType] - a[sortType];
				}
				return a[sortType] - b[sortType];
			});
			this.setState({
				restaurants: arr
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.sendRequest(this.props.match.params.keyword);
			_commonMethod2.default.factory.sortRes = this.sortRes.bind(this);
		}
	}, {
		key: 'showFilter',
		value: function showFilter(val) {
			this.setState({
				sortStatus: val
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'search' },
				_react2.default.createElement(_input2.default, { keyword: this.state.keyword, fn: this.sendRequest.bind(this), sort: this.state.sortStatus }),
				_react2.default.createElement(_sortNav2.default, { sort: this.state.sortStatus, fn: this.showFilter.bind(this) }),
				_react2.default.createElement(
					'section',
					null,
					this.state.restaurants.map(function (val, i) {
						return _react2.default.createElement(_restaurant2.default, { data: val, key: i });
					})
				)
			);
		}
	}]);

	return Search;
}(_react2.default.Component);

exports.default = Search;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function resize() {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth,
	    html = document.getElementsByTagName('html')[0];
	html.style.fontSize = clientWidth / 3.75 + "px";
}
resize();
window.addEventListener("resize", resize);

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

/*
 * Swipe 2.0.0
 * Brad Birdsall
 * https://github.com/thebird/Swipe
 * Copyright 2013-2015, MIT License
 *
*/

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.Swipe = factory();
    }
}(this, function () {
  'use strict';

  return function Swipe (container, options) {
    // utilities
    var noop = function() {}; // simple no operation function
    var offloadFn = function(fn) { setTimeout(fn || noop, 0); }; // offload a functions execution

    // check browser capabilities
    var browser = {
      addEventListener: !!window.addEventListener,
      touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
      transitions: (function(temp) {
        var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
        for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
        return false;
      })(document.createElement('swipe'))
    };

    // quit if no root element
    if (!container) return;
    var element = container.children[0];
    var slides, slidePos, width, length;
    options = options || {};
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    options.continuous = options.continuous !== undefined ? options.continuous : true;

    function setup() {

      // cache slides
      slides = element.children;
      length = slides.length;

      // set continuous to false if only one slide
      if (slides.length < 2) options.continuous = false;

      //special case if two slides
      if (browser.transitions && options.continuous && slides.length < 3) {
        element.appendChild(slides[0].cloneNode(true));
        element.appendChild(element.children[1].cloneNode(true));
        slides = element.children;
      }

      // create an array to store current positions of each slide
      slidePos = new Array(slides.length);

      // determine width of each slide
      width = container.getBoundingClientRect().width || container.offsetWidth;

      element.style.width = (slides.length * width) + 'px';

      // stack elements
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];

        slide.style.width = width + 'px';
        slide.setAttribute('data-index', pos);

        if (browser.transitions) {
          slide.style.left = (pos * -width) + 'px';
          move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
        }

      }

      // reposition elements before and after index
      if (options.continuous && browser.transitions) {
        move(circle(index-1), -width, 0);
        move(circle(index+1), width, 0);
      }

      if (!browser.transitions) element.style.left = (index * -width) + 'px';

      container.style.visibility = 'visible';

    }

    function prev() {

      if (options.continuous) slide(index-1);
      else if (index) slide(index-1);

    }

    function next() {

      if (options.continuous) slide(index+1);
      else if (index < slides.length - 1) slide(index+1);

    }

    function circle(index) {

      // a simple positive modulo using slides.length
      return (slides.length + (index % slides.length)) % slides.length;

    }

    function slide(to, slideSpeed) {

      // do nothing if already on requested slide
      if (index == to) return;

      if (browser.transitions) {

        var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

        // get the actual position of the slide
        if (options.continuous) {
          var natural_direction = direction;
          direction = -slidePos[circle(to)] / width;

          // if going forward but to < index, use to = slides.length + to
          // if going backward but to > index, use to = -slides.length + to
          if (direction !== natural_direction) to =  -direction * slides.length + to;

        }

        var diff = Math.abs(index-to) - 1;

        // move all the slides between index and to in the right direction
        while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);

        to = circle(to);

        move(index, width * direction, slideSpeed || speed);
        move(to, 0, slideSpeed || speed);

        if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place

      } else {

        to = circle(to);
        animate(index * -width, to * -width, slideSpeed || speed);
        //no fallback for a circular continuous if the browser does not accept transitions
      }

      index = to;
      offloadFn(options.callback && options.callback(index, slides[index]));
    }

    function move(index, dist, speed) {

      translate(index, dist, speed);
      slidePos[index] = dist;

    }

    function translate(index, dist, speed) {

      var slide = slides[index];
      var style = slide && slide.style;

      if (!style) return;

      style.webkitTransitionDuration =
      style.MozTransitionDuration =
      style.msTransitionDuration =
      style.OTransitionDuration =
      style.transitionDuration = speed + 'ms';

      style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
      style.msTransform =
      style.MozTransform =
      style.OTransform = 'translateX(' + dist + 'px)';

    }

    function animate(from, to, speed) {

      // if not an animation, just reposition
      if (!speed) {

        element.style.left = to + 'px';
        return;

      }

      var start = +new Date();

      var timer = setInterval(function() {

        var timeElap = +new Date() - start;

        if (timeElap > speed) {

          element.style.left = to + 'px';

          if (delay) begin();

          options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

          clearInterval(timer);
          return;

        }

        element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

      }, 4);

    }

    // setup auto slideshow
    var delay = options.auto || 0;
    var interval;

    function begin() {

      interval = setTimeout(next, delay);

    }

    function stop() {

      delay = 0;
      clearTimeout(interval);

    }


    // setup initial vars
    var start = {};
    var delta = {};
    var isScrolling;

    // setup event capturing
    var events = {

      handleEvent: function(event) {

        switch (event.type) {
          case 'touchstart': this.start(event); break;
          case 'touchmove': this.move(event); break;
          case 'touchend': offloadFn(this.end(event)); break;
          case 'webkitTransitionEnd':
          case 'msTransitionEnd':
          case 'oTransitionEnd':
          case 'otransitionend':
          case 'transitionend': offloadFn(this.transitionEnd(event)); break;
          case 'resize': offloadFn(setup); break;
        }

        if (options.stopPropagation) event.stopPropagation();

      },
      start: function(event) {

        var touches = event.touches[0];

        // measure start values
        start = {

          // get initial touch coords
          x: touches.pageX,
          y: touches.pageY,

          // store time to determine touch duration
          time: +new Date()

        };

        // used for testing first move event
        isScrolling = undefined;

        // reset delta and end measurements
        delta = {};

        // attach touchmove and touchend listeners
        element.addEventListener('touchmove', this, false);
        element.addEventListener('touchend', this, false);

      },
      move: function(event) {

        // ensure swiping with one touch and not pinching
        if ( event.touches.length > 1 || event.scale && event.scale !== 1) return;

        if (options.disableScroll) event.preventDefault();

        var touches = event.touches[0];

        // measure change in x and y
        delta = {
          x: touches.pageX - start.x,
          y: touches.pageY - start.y
        };

        // determine if scrolling test has run - one time test
        if ( typeof isScrolling == 'undefined') {
          isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
        }

        // if user is not trying to scroll vertically
        if (!isScrolling) {

          // prevent native scrolling
          event.preventDefault();

          // stop slideshow
          stop();

          // increase resistance if first or last slide
          if (options.continuous) { // we don't add resistance at the end

            translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
            translate(index, delta.x + slidePos[index], 0);
            translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

          } else {

            delta.x =
              delta.x /
                ( (!index && delta.x > 0 ||         // if first slide and sliding left
                  index == slides.length - 1 &&     // or if last slide and sliding right
                  delta.x < 0                       // and if sliding at all
                ) ?
                ( Math.abs(delta.x) / width + 1 )      // determine resistance level
                : 1 );                                 // no resistance if false

            // translate 1:1
            translate(index-1, delta.x + slidePos[index-1], 0);
            translate(index, delta.x + slidePos[index], 0);
            translate(index+1, delta.x + slidePos[index+1], 0);
          }
          options.swiping && options.swiping(-delta.x / width);

        }

      },
      end: function(event) {

        // measure duration
        var duration = +new Date() - start.time;

        // determine if slide attempt triggers next/prev slide
        var isValidSlide =
              Number(duration) < 250 &&         // if slide duration is less than 250ms
              Math.abs(delta.x) > 20 ||         // and if slide amt is greater than 20px
              Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

        // determine if slide attempt is past start and end
        var isPastBounds =
              !index && delta.x > 0 ||                      // if first slide and slide amt is greater than 0
              index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

        if (options.continuous) isPastBounds = false;

        // determine direction of swipe (true:right, false:left)
        var direction = delta.x < 0;

        // if not scrolling vertically
        if (!isScrolling) {

          if (isValidSlide && !isPastBounds) {

            if (direction) {

              if (options.continuous) { // we need to get the next in this direction in place

                move(circle(index-1), -width, 0);
                move(circle(index+2), width, 0);

              } else {
                move(index-1, -width, 0);
              }

              move(index, slidePos[index]-width, speed);
              move(circle(index+1), slidePos[circle(index+1)]-width, speed);
              index = circle(index+1);

            } else {
              if (options.continuous) { // we need to get the next in this direction in place

                move(circle(index+1), width, 0);
                move(circle(index-2), -width, 0);

              } else {
                move(index+1, width, 0);
              }

              move(index, slidePos[index]+width, speed);
              move(circle(index-1), slidePos[circle(index-1)]+width, speed);
              index = circle(index-1);

            }

            options.callback && options.callback(index, slides[index]);

          } else {

            if (options.continuous) {

              move(circle(index-1), -width, speed);
              move(index, 0, speed);
              move(circle(index+1), width, speed);

            } else {

              move(index-1, -width, speed);
              move(index, 0, speed);
              move(index+1, width, speed);
            }

          }

        }
        
        delay = options.auto || 0;

        // kill touchmove and touchend event listeners until touchstart called again
        element.removeEventListener('touchmove', events, false);
        element.removeEventListener('touchend', events, false);

      },
      transitionEnd: function(event) {

        if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

          if (delay) begin();

          options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        }

      }

    };

    // trigger setup
    setup();

    // start auto slideshow if applicable
    if (delay) begin();


    // add event listeners
    if (browser.addEventListener) {

      // set touchstart event on element
      if (browser.touch) element.addEventListener('touchstart', events, false);

      if (browser.transitions) {
        element.addEventListener('webkitTransitionEnd', events, false);
        element.addEventListener('msTransitionEnd', events, false);
        element.addEventListener('oTransitionEnd', events, false);
        element.addEventListener('otransitionend', events, false);
        element.addEventListener('transitionend', events, false);
      }

      // set resize event on window
      window.addEventListener('resize', events, false);

    } else {

      window.onresize = function () { setup(); }; // to play nice with old IE

    }

    // expose the Swipe API
    return {
      setup: function() {

        setup();

      },
      slide: function(to, speed) {

        // cancel slideshow
        stop();

        slide(to, speed);

      },
      prev: function() {

        // cancel slideshow
        stop();

        prev();

      },
      next: function() {

        // cancel slideshow
        stop();

        next();

      },
      stop: function() {

        // cancel slideshow
        stop();

      },
      getPos: function() {

        // return current index position
        return index;

      },
      getNumSlides: function() {

        // return total number of slides
        return length;
      },
      kill: function() {

        // cancel slideshow
        stop();

        // reset element
        element.style.width = '';
        element.style.left = '';

        // reset slides
        var pos = slides.length;
        while(pos--) {

          var slide = slides[pos];
          slide.style.width = '';
          slide.style.left = '';

          if (browser.transitions) translate(pos, 0, 0);
        }

        // removed event listeners
        if (browser.addEventListener) {

          // remove current event listeners
          element.removeEventListener('touchstart', events, false);
          element.removeEventListener('webkitTransitionEnd', events, false);
          element.removeEventListener('msTransitionEnd', events, false);
          element.removeEventListener('oTransitionEnd', events, false);
          element.removeEventListener('otransitionend', events, false);
          element.removeEventListener('transitionend', events, false);
          window.removeEventListener('resize', events, false);

        } else {
          window.onresize = null;
        }
      }
    };
  };
}));


/***/ }),

/***/ 213:
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _swipeJsIso = __webpack_require__(212);

var _swipeJsIso2 = _interopRequireDefault(_swipeJsIso);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSwipe = function (_Component) {
  _inherits(ReactSwipe, _Component);

  function ReactSwipe() {
    _classCallCheck(this, ReactSwipe);

    return _possibleConstructorReturn(this, (ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).apply(this, arguments));
  }

  _createClass(ReactSwipe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var swipeOptions = this.props.swipeOptions;


      this.swipe = (0, _swipeJsIso2.default)(this.refs.container, swipeOptions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swipe.kill();
      this.swipe = void 0;
    }
  }, {
    key: 'next',
    value: function next() {
      this.swipe.next();
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.swipe.prev();
    }
  }, {
    key: 'slide',
    value: function slide() {
      var _swipe;

      (_swipe = this.swipe).slide.apply(_swipe, arguments);
    }
  }, {
    key: 'getPos',
    value: function getPos() {
      return this.swipe.getPos();
    }
  }, {
    key: 'getNumSlides',
    value: function getNumSlides() {
      return this.swipe.getNumSlides();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          className = _props.className,
          style = _props.style,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { ref: 'container', id: id, className: 'react-swipe-container ' + className, style: style.container },
        _react2.default.createElement(
          'div',
          { style: style.wrapper },
          _react2.default.Children.map(children, function (child) {
            if (!child) {
              return null;
            }

            var childStyle = child.props.style ? (0, _objectAssign2.default)({}, style.child, child.props.style) : style.child;

            return _react2.default.cloneElement(child, { style: childStyle });
          })
        )
      );
    }
  }]);

  return ReactSwipe;
}(_react.Component);

ReactSwipe.propTypes = {
  swipeOptions: _propTypes2.default.shape({
    startSlide: _propTypes2.default.number,
    speed: _propTypes2.default.number,
    auto: _propTypes2.default.number,
    continuous: _propTypes2.default.bool,
    disableScroll: _propTypes2.default.bool,
    stopPropagation: _propTypes2.default.bool,
    swiping: _propTypes2.default.func,
    callback: _propTypes2.default.func,
    transitionEnd: _propTypes2.default.func
  }),
  style: _propTypes2.default.shape({
    container: _propTypes2.default.object,
    wrapper: _propTypes2.default.object,
    child: _propTypes2.default.object
  }),
  id: _propTypes2.default.string,
  className: _propTypes2.default.string
};
ReactSwipe.defaultProps = {
  swipeOptions: {},
  style: {
    container: {
      overflow: 'hidden',
      visibility: 'hidden',
      position: 'relative'
    },

    wrapper: {
      overflow: 'hidden',
      position: 'relative'
    },

    child: {
      float: 'left',
      width: '100%',
      position: 'relative',
      transitionProperty: 'transform'
    }
  },
  className: ''
};
exports.default = ReactSwipe;
module.exports = exports['default'];


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(16);

var _address = __webpack_require__(103);

var _address2 = _interopRequireDefault(_address);

var _search = __webpack_require__(107);

var _search2 = _interopRequireDefault(_search);

var _detail = __webpack_require__(104);

var _detail2 = _interopRequireDefault(_detail);

var _rlist = __webpack_require__(106);

var _rlist2 = _interopRequireDefault(_rlist);

var _mine = __webpack_require__(105);

var _mine2 = _interopRequireDefault(_mine);

var _rem = __webpack_require__(108);

var _rem2 = _interopRequireDefault(_rem);

var _iconfont = __webpack_require__(101);

var _iconfont2 = _interopRequireDefault(_iconfont);

var _index = __webpack_require__(102);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
	_inherits(Container, _React$Component);

	function Container(props) {
		_classCallCheck(this, Container);

		var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

		_this.state = {
			shopId: '',
			searchWord: ''
		};
		return _this;
	}

	_createClass(Container, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouterDom.HashRouter,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _rlist2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/detail/:id', component: _detail2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/address', component: _address2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/search/:keyword', component: _search2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/mine', component: _mine2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/search/:keyword', component: _search2.default })
				)
			);
		}
	}]);

	return Container;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Container, null), document.getElementById('container'));

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Food = function (_React$Component) {
	_inherits(Food, _React$Component);

	function Food() {
		_classCallCheck(this, Food);

		return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).apply(this, arguments));
	}

	_createClass(Food, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
		// 绑定加减事件

	}, {
		key: 'plus',
		value: function plus() {
			var foodId = this.refs.dl.getAttribute('data-foodid');
			_commonMethod2.default.factory.plus(foodId);
		}
	}, {
		key: 'minus',
		value: function minus() {
			var foodId = this.refs.dl.getAttribute('data-foodid');
			_commonMethod2.default.factory.minus(foodId);
		}
	}, {
		key: 'render',
		value: function render() {
			var img_path = _commonMethod2.default.getImg(this.props.data, 'image_path');
			return _react2.default.createElement(
				'dl',
				{ className: 'food', ref: 'dl', 'data-foodid': this.props.data.item_id },
				_react2.default.createElement(
					'dt',
					{ className: 'food-img' },
					_react2.default.createElement('img', { src: img_path })
				),
				_react2.default.createElement(
					'dd',
					{ className: 'food-dis' },
					_react2.default.createElement(
						'h5',
						{ className: 'food-name' },
						this.props.data.name
					),
					_react2.default.createElement(
						'p',
						{ className: 'food-title' },
						this.props.data.description
					),
					_react2.default.createElement(
						'p',
						{ className: 'food-nearly' },
						'月售' + this.props.data.month_sales + ' 好评率' + this.props.data.satisfy_rate + '%'
					),
					_react2.default.createElement(
						'div',
						{ className: 'food-price' },
						_react2.default.createElement(
							'span',
							{ className: 'price' },
							'￥' + this.props.data.specfoods[0].price
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'i',
								{ className: 'foods-minus', onClick: this.minus.bind(this), style: { visibility: this.props.data.num ? 'visible' : 'hidden' } },
								'-'
							),
							_react2.default.createElement(
								'span',
								{ className: 'foods-num', style: { visibility: this.props.data.num ? 'visible' : 'hidden' } },
								this.props.data.num
							),
							_react2.default.createElement(
								'i',
								{ className: 'foods-plus', onClick: this.plus.bind(this) },
								'+'
							)
						)
					)
				)
			);
		}
	}]);

	return Food;
}(_react2.default.Component);

exports.default = Food;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

__webpack_require__(213);

var _header = __webpack_require__(64);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input() {
		_classCallCheck(this, Input);

		return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
	}

	_createClass(Input, [{
		key: 'search',
		value: function search(event) {
			var that = this;
			var keyWord = event.target.value;
			if (keyWord !== '') {
				event.target.nextSibling.style.display = 'block';
			} else {
				event.target.nextSibling.style.display = 'none';
			}
			var url = 'https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby?keyword=' + keyWord + '&offset=0&limit=20';
			clearTimeout(that.timer);
			that.timer = setTimeout(function () {
				fetch(url).then(function (res) {
					return res.json();
				}).then(function (data) {
					that.props.fn(data);
				});
			}, 300);
		}
	}, {
		key: 'clear',
		value: function clear(event) {
			event.target.previousSibling.value = '';
			event.target.style.display = 'none';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'top-input' },
				_react2.default.createElement(_header2.default, { text: '\u9009\u62E9\u5730\u5740' }),
				_react2.default.createElement(
					'div',
					{ className: 'bar bar-subheader' },
					_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u5730\u5740', onChange: this.search.bind(this) }),
					_react2.default.createElement('span', { onClick: this.clear.bind(this) })
				)
			);
		}
	}]);

	return Input;
}(_react2.default.Component);

exports.default = Input;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
	_inherits(Info, _React$Component);

	function Info() {
		_classCallCheck(this, Info);

		return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
	}

	_createClass(Info, [{
		key: 'setAddr',
		value: function setAddr() {
			_commonMethod2.default.store('loca', {
				geohash: this.props.data.geohash,
				lat: this.props.data.latitude,
				lnt: this.props.data.longitude
			});
			location.hash = '/';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ onClick: this.setAddr.bind(this), className: 'list-item' },
				_react2.default.createElement(
					'h4',
					null,
					this.props.data.name
				),
				_react2.default.createElement(
					'p',
					null,
					this.props.data.address
				)
			);
		}
	}]);

	return Info;
}(_react2.default.Component);

exports.default = Info;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_React$Component) {
	_inherits(Cart, _React$Component);

	function Cart() {
		_classCallCheck(this, Cart);

		return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
	}

	_createClass(Cart, [{
		key: "render",
		value: function render() {
			var that = this;
			console.log(this.props.dif);
			return _react2.default.createElement(
				"div",
				{ className: "shop-footer" },
				_react2.default.createElement(
					"div",
					{ className: "shop-cart" },
					_react2.default.createElement(
						"div",
						{ className: "cart-img", onClick: this.props.fn },
						_react2.default.createElement("i", { className: "iconfont icon-gouwuchekong" })
					),
					_react2.default.createElement(
						"div",
						{ className: "cart-price" },
						_react2.default.createElement(
							"p",
							null,
							'￥' + Math.abs(this.props.price.toFixed(2))
						),
						function () {
							if (that.props.data.piecewise_agent_fee) {
								return _react2.default.createElement(
									"span",
									null,
									that.props.data.piecewise_agent_fee.tips
								);
							}
						}()
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "shop-send", style: { background: this.props.dif >= 0 ? '#ccc' : '#0096ff' } },
					this.props.dif >= 0 ? '还差￥' + this.props.dif + '起送' : '马上配送'
				)
			);
		}
	}]);

	return Cart;
}(_react2.default.Component);

exports.default = Cart;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartView = function (_React$Component) {
	_inherits(CartView, _React$Component);

	function CartView() {
		_classCallCheck(this, CartView);

		return _possibleConstructorReturn(this, (CartView.__proto__ || Object.getPrototypeOf(CartView)).apply(this, arguments));
	}

	_createClass(CartView, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'show-cart-foods', onClick: this.props.fn, style: { display: this.props.status ? 'block' : 'none' } },
				_react2.default.createElement(
					'dl',
					{ className: 'show-info' },
					_react2.default.createElement(
						'dt',
						{ className: 'show-header' },
						_react2.default.createElement(
							'h4',
							{ className: 'show-title' },
							'\u8D2D\u7269\u8F66'
						),
						_react2.default.createElement(
							'div',
							{ className: 'clear' },
							'\u6E05\u7A7A'
						)
					),
					_react2.default.createElement(
						'dd',
						{ className: 'show-content' },
						_react2.default.createElement('ul', null)
					)
				)
			);
		}
	}]);

	return CartView;
}(_react2.default.Component);

exports.default = CartView;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

var _food = __webpack_require__(238);

var _food2 = _interopRequireDefault(_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FoodList = function (_React$Component) {
	_inherits(FoodList, _React$Component);

	function FoodList() {
		_classCallCheck(this, FoodList);

		return _possibleConstructorReturn(this, (FoodList.__proto__ || Object.getPrototypeOf(FoodList)).apply(this, arguments));
	}

	_createClass(FoodList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!document.getElementsByName('target' + (this.props.num - 1))[1]) {
				var height = 0;
			} else {
				var height = document.getElementsByName('target' + (this.props.num - 1))[1].offsetHeight;
				height += _commonMethod2.default.factory.heightArr[_commonMethod2.default.factory.heightArr.length - 1];
			}
			_commonMethod2.default.factory.heightArr.push(height);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'food-item', name: 'target' + this.props.num },
				_react2.default.createElement(
					'h4',
					{ 'data-title': this.props.data.name },
					this.props.data.name,
					_react2.default.createElement(
						'span',
						{ className: 's-r-dis' },
						this.props.data.description
					)
				),
				this.props.data.foods.map(function (val, i) {
					return _react2.default.createElement(_food2.default, { key: i, data: val });
				})
			);
		}
	}]);

	return FoodList;
}(_react2.default.Component);

exports.default = FoodList;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_React$Component) {
	_inherits(Cart, _React$Component);

	function Cart() {
		_classCallCheck(this, Cart);

		return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
	}

	_createClass(Cart, [{
		key: 'toTarget',
		value: function toTarget(event) {
			var target = event.target.getAttribute('name');
			_commonMethod2.default.scroll(target, document.getElementById('scroller'));
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			if (this.props.data[0]) {
				return _react2.default.createElement(
					'ul',
					{ className: 'food-nav' },
					this.props.data.map(function (val, i) {
						return _react2.default.createElement(
							'li',
							{ key: i, name: 'target' + i, onClick: that.toTarget.bind(this) },
							val.name
						);
					})
				);
			} else {
				return _react2.default.createElement('ul', { className: 'food-nav' });
			}
		}
	}]);

	return Cart;
}(_react2.default.Component);

exports.default = Cart;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'back',
		value: function back() {
			history.back();
		}
	}, {
		key: 'showInfo',
		value: function showInfo() {
			_commonMethod2.default.factory.showShopInfo(0);
		}
	}, {
		key: 'render',
		value: function render() {
			var response = this.props.data;
			var img_path = _commonMethod2.default.getImg(response, 'image_path');
			if (img_path) {
				return _react2.default.createElement(
					'div',
					{ className: 'shop-title', onClick: this.showInfo.bind(this), style: { backgroundImage: "url(" + img_path + "?imageMogr/format/webp/thumbnail/!40p/blur/50x40/)" } },
					_react2.default.createElement(
						'div',
						{ className: 's-t-top' },
						_react2.default.createElement('i', { className: 'icon-arrow', id: 'back', onClick: this.back.bind(this) })
					),
					_react2.default.createElement(
						'div',
						{ className: 's-t-center' },
						_react2.default.createElement(
							'dl',
							{ className: 'shop-name' },
							_react2.default.createElement(
								'dt',
								{ className: 'shop-img' },
								_react2.default.createElement('img', { src: img_path })
							),
							_react2.default.createElement(
								'dd',
								{ className: 'shop-dis' },
								_react2.default.createElement(
									'ul',
									null,
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'h3',
											null,
											response.name
										)
									),
									function () {
										if (response.delivery_mode) {
											return _react2.default.createElement(
												'li',
												null,
												'蜂鸟专送 / ' + response.order_lead_time + '分钟送达 / ' + response.piecewise_agent_fee.tips
											);
										} else {
											return _react2.default.createElement(
												'li',
												null,
												'商家配送 / ' + response.order_lead_time + '分钟送达 / ' + response.piecewise_agent_fee.tips
											);
										}
									}(),
									function () {
										if (response.promotion_info) {
											return _react2.default.createElement(
												'li',
												null,
												'公告：' + response.promotion_info
											);
										} else {
											return _react2.default.createElement(
												'li',
												null,
												'\u516C\u544A\uFF1A\u6B22\u8FCE\u5149\u4E34\uFF0C\u7528\u9910\u9AD8\u5CF0\u671F\u8BF7\u63D0\u524D\u4E0B\u5355\uFF0C\u8C22\u8C22\u3002'
											);
										}
									}(),
									_react2.default.createElement('li', { className: 'go-shop-detail' })
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 's-t-bottom' },
						_react2.default.createElement(
							'div',
							null,
							function () {
								if (response.activities[0].icon_name === '新') {
									return _react2.default.createElement(
										'i',
										{ className: 'new' },
										'\u65B0'
									);
								} else {
									return _react2.default.createElement(
										'i',
										{ className: 'cut' },
										'\u51CF'
									);
								}
							}(),
							_react2.default.createElement(
								'span',
								null,
								function () {
									return response.activities[0].description;
								}()
							)
						),
						_react2.default.createElement(
							'div',
							null,
							function () {
								return response.activities.length + '个活动';
							}()
						)
					)
				);
			} else {
				return _react2.default.createElement('div', { className: 'shop-title' });
			}
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "shop-nav" },
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"div",
							null,
							_react2.default.createElement(
								"span",
								{ className: "active" },
								"\u5546\u54C1"
							)
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"div",
							null,
							_react2.default.createElement(
								"span",
								null,
								"\u8BC4\u4EF7"
							)
						)
					)
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(64);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_React$Component) {
	_inherits(Cart, _React$Component);

	function Cart() {
		_classCallCheck(this, Cart);

		return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
	}

	_createClass(Cart, [{
		key: 'render',
		value: function render() {
			var that = this;
			return _react2.default.createElement(
				'div',
				{ className: 'shop-info-content' },
				_react2.default.createElement(_header2.default, { text: '\u5546\u5BB6\u8BE6\u60C5' }),
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'h4',
							null,
							'\u6D3B\u52A8\u4E0E\u5C5E\u6027'
						),
						_react2.default.createElement('ul', null)
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'h4',
							null,
							'\u98DF\u54C1\u76D1\u7763\u5B89\u5168\u516C\u793A'
						)
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'h4',
							null,
							'\u5546\u5BB6\u4FE1\u606F'
						)
					)
				)
			);
		}
	}]);

	return Cart;
}(_react2.default.Component);

exports.default = Cart;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _classnames = __webpack_require__(31);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_React$Component) {
	_inherits(Account, _React$Component);

	function Account(props) {
		_classCallCheck(this, Account);

		var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

		_this.state = {
			isLogin: false
		};
		return _this;
	}

	_createClass(Account, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'account' },
				_react2.default.createElement(
					'div',
					{ className: 'm-a-top' },
					_react2.default.createElement(
						'dl',
						null,
						_react2.default.createElement(
							'dt',
							{ className: 'user-img' },
							_react2.default.createElement(
								'svg',
								{ viewBox: '0 0 122 122', id: 'avatar-default', width: '100%', height: '100%' },
								_react2.default.createElement('path', { fill: '#DCDCDC', fillRule: 'evenodd', d: 'M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z' })
							)
						),
						_react2.default.createElement(
							'dd',
							{ className: 'user-info' },
							_react2.default.createElement(
								'p',
								null,
								this.isLogin ? 'handsome man' : '登录/注册'
							),
							_react2.default.createElement(
								'span',
								null,
								this.isLogin ? '183****6666' : '登录后享受更多特权'
							),
							_react2.default.createElement('i', { className: 'icon-arrow' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'm-a-bottom' },
					_react2.default.createElement(
						'div',
						{ className: 'info-item' },
						_react2.default.createElement(
							'p',
							{ className: (0, _classnames2.default)(this.state.isLogin ? 'orange' : 'not-orange') },
							this.state.isLogin ? '34.00<span>元</span>' : ''
						),
						_react2.default.createElement(
							'span',
							null,
							'\u4F59\u989D'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'info-item' },
						_react2.default.createElement(
							'p',
							{ className: (0, _classnames2.default)(this.state.isLogin ? 'red' : 'not-red') },
							this.state.isLogin ? '0<span>个</span>' : ''
						),
						_react2.default.createElement(
							'span',
							null,
							'\u4F18\u60E0'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'info-item' },
						_react2.default.createElement(
							'p',
							{ className: (0, _classnames2.default)(this.state.isLogin ? 'green' : 'not-green') },
							this.state.isLogin ? '5600<span>分</span>' : ''
						),
						_react2.default.createElement(
							'span',
							null,
							'\u79EF\u5206'
						)
					)
				)
			);
		}
	}]);

	return Account;
}(_react2.default.Component);

exports.default = Account;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInp = function (_React$Component) {
	_inherits(SearchInp, _React$Component);

	function SearchInp() {
		_classCallCheck(this, SearchInp);

		return _possibleConstructorReturn(this, (SearchInp.__proto__ || Object.getPrototypeOf(SearchInp)).apply(this, arguments));
	}

	_createClass(SearchInp, [{
		key: 'sendKey',
		value: function sendKey(event) {
			if (event.keyCode === 13) {
				location.hash = '/search/' + event.target.value;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('input', { type: 'text', onKeyUp: this.sendKey.bind(this), className: 'rl-search', placeholder: '\u641C\u7D22\u5546\u5BB6\u3001\u5546\u54C1' });
		}
	}]);

	return SearchInp;
}(_react2.default.Component);

exports.default = SearchInp;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactSwipe = __webpack_require__(236);

var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

var _classnames = __webpack_require__(31);

var _classnames2 = _interopRequireDefault(_classnames);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swipe = function (_React$Component) {
	_inherits(Swipe, _React$Component);

	function Swipe(props) {
		_classCallCheck(this, Swipe);

		var _this = _possibleConstructorReturn(this, (Swipe.__proto__ || Object.getPrototypeOf(Swipe)).call(this, props));

		_this.state = {
			index: 0
		};
		return _this;
	}

	_createClass(Swipe, [{
		key: 'render',
		value: function render() {
			var that = this;
			return _react2.default.createElement(
				'div',
				{ className: 'swipe-wrap' },
				_react2.default.createElement(
					_reactSwipe2.default,
					{ className: 'carousel', swipeOptions: { continuous: false, callback: function callback(index) {
								that.setState({ index: index });
							} } },
					_react2.default.createElement(
						'div',
						{ className: 'swipe' },
						this.props.data.slice(0, 8).map(function (value, index) {
							var img_path = _commonMethod2.default.getImg(value, 'image_url');
							return _react2.default.createElement(
								'div',
								{ className: 'swipe-item', key: index },
								_react2.default.createElement('img', { src: img_path }),
								_react2.default.createElement(
									'p',
									null,
									value.title
								)
							);
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'swipe' },
						this.props.data.slice(8, 16).map(function (value, index) {
							var img_path = _commonMethod2.default.getImg(value, 'image_url');
							return _react2.default.createElement(
								'div',
								{ className: 'swipe-item', key: index },
								_react2.default.createElement('img', { src: img_path }),
								_react2.default.createElement(
									'p',
									null,
									value.title
								)
							);
						})
					)
				),
				_react2.default.createElement(
					'ul',
					{ id: 'position' },
					_react2.default.createElement('li', { className: (0, _classnames2.default)({ 'cur': this.state.index === 0 }) }),
					_react2.default.createElement('li', { className: (0, _classnames2.default)({ 'cur': this.state.index === 1 }) })
				)
			);
		}
	}]);

	return Swipe;
}(_react2.default.Component);

exports.default = Swipe;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weather = function (_React$Component) {
	_inherits(Weather, _React$Component);

	function Weather() {
		_classCallCheck(this, Weather);

		return _possibleConstructorReturn(this, (Weather.__proto__ || Object.getPrototypeOf(Weather)).apply(this, arguments));
	}

	_createClass(Weather, [{
		key: 'render',
		value: function render() {
			var img_path = _commonMethod2.default.getImg(this.props.data, 'image_hash') + '?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/';
			return _react2.default.createElement(
				'div',
				{ className: 'weather' },
				_react2.default.createElement(
					'div',
					{ className: 'des' },
					_react2.default.createElement(
						'p',
						null,
						this.props.data.temperature,
						'\xB0'
					),
					_react2.default.createElement(
						'p',
						null,
						this.props.data.description
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'pic' },
					_react2.default.createElement('img', { src: img_path })
				)
			);
		}
	}]);

	return Weather;
}(_react2.default.Component);

exports.default = Weather;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(31);

var _classnames2 = _interopRequireDefault(_classnames);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadInp = function (_React$Component) {
	_inherits(HeadInp, _React$Component);

	function HeadInp(props) {
		_classCallCheck(this, HeadInp);

		var _this = _possibleConstructorReturn(this, (HeadInp.__proto__ || Object.getPrototypeOf(HeadInp)).call(this, props));

		_this.state = {
			value: _this.props.keyword
		};
		return _this;
	}

	_createClass(HeadInp, [{
		key: 'back',
		value: function back() {
			history.back();
		}
	}, {
		key: 'search',
		value: function search(event) {
			this.setState({
				value: event.target.value
			});
			var that = this;
			var keyword = event.target.value;
			clearTimeout(that.timer);
			that.timer = setTimeout(function () {
				that.props.fn(keyword);
			}, 300);
		}
	}, {
		key: 'clear',
		value: function clear(event) {
			this.setState({
				value: ''
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'search-inp' },
				_react2.default.createElement('span', { className: 's-back', onClick: this.back.bind(this) }),
				_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0', value: this.state.value, onChange: this.search.bind(this) }),
				_react2.default.createElement('i', { className: (0, _classnames2.default)({ cancel: this.state.value }), onClick: this.clear.bind(this) }),
				_react2.default.createElement('div', { className: (0, _classnames2.default)({ cloth: this.props.sort !== '' }) })
			);
		}
	}]);

	return HeadInp;
}(_react2.default.Component);

exports.default = HeadInp;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(31);

var _classnames2 = _interopRequireDefault(_classnames);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

var _sortOptions = __webpack_require__(254);

var _sortOptions2 = _interopRequireDefault(_sortOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadInp = function (_React$Component) {
	_inherits(HeadInp, _React$Component);

	function HeadInp(props) {
		_classCallCheck(this, HeadInp);

		var _this = _possibleConstructorReturn(this, (HeadInp.__proto__ || Object.getPrototypeOf(HeadInp)).call(this, props));

		_this.state = {
			sortType: '',
			showing: false
		};
		return _this;
	}

	_createClass(HeadInp, [{
		key: 'close',
		value: function close() {
			this.setState({
				showing: false
			});
			this.props.fn('');
		}
	}, {
		key: 'sortType',
		value: function sortType(event) {
			if (event.target.tagName == 'LI' && !this.state.showing) {
				this.setState({
					showing: true
				});
				this.props.fn(event.target.type);
			} else if (this.state.showing) {
				this.close();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'sort-nav' },
				_react2.default.createElement(
					'ul',
					{ onClick: this.sortType.bind(this) },
					_react2.default.createElement(
						'li',
						{ type: 'food' },
						'\u7F8E\u98DF'
					),
					_react2.default.createElement(
						'li',
						{ type: 'sort' },
						'\u6392\u5E8F'
					),
					_react2.default.createElement(
						'li',
						{ className: 'border0', type: 'filter' },
						'\u7B5B\u9009'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)({ hide: this.props.sort === '' }) },
					_react2.default.createElement(_sortOptions2.default, { fn: this.close.bind(this) })
				)
			);
		}
	}]);

	return HeadInp;
}(_react2.default.Component);

exports.default = HeadInp;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortOptions = function (_React$Component) {
	_inherits(SortOptions, _React$Component);

	function SortOptions() {
		_classCallCheck(this, SortOptions);

		return _possibleConstructorReturn(this, (SortOptions.__proto__ || Object.getPrototypeOf(SortOptions)).apply(this, arguments));
	}

	_createClass(SortOptions, [{
		key: 'sort',
		value: function sort(event) {
			if (event.target.tagName === 'P') {
				_commonMethod2.default.factory.sortRes(event.target.getAttribute('type'), event.target.getAttribute('dir'));
				this.props.fn();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'sort-options' },
				_react2.default.createElement(
					'ol',
					{ onClick: this.sort.bind(this) },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', null),
						_react2.default.createElement(
							'p',
							{ type: 'sortE' },
							'\u667A\u80FD\u6392\u5E8F'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', null),
						_react2.default.createElement(
							'p',
							{ type: 'distance' },
							'\u8DDD\u79BB\u6700\u8FD1'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', null),
						_react2.default.createElement(
							'p',
							{ type: 'recent_order_num', dir: 'big' },
							'\u9500\u91CF\u6700\u9AD8'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', null),
						_react2.default.createElement(
							'p',
							{ type: 'float_minimum_order_amount' },
							'\u8D77\u9001\u4EF7\u6700\u4F4E'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', null),
						_react2.default.createElement(
							'p',
							{ type: 'order_lead_time' },
							'\u914D\u9001\u901F\u5EA6\u6700\u5FEB'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', null),
						_react2.default.createElement(
							'p',
							{ type: 'rating', dir: 'big' },
							'\u8BC4\u5206\u6700\u9AD8'
						)
					)
				)
			);
		}
	}]);

	return SortOptions;
}(_react2.default.Component);

exports.default = SortOptions;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(8);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'back',
		value: function back() {
			var hash = location.hash.split('/')[1];
			if (hash === 'detail') {
				_commonMethod2.default.factory.showShopInfo('100%');
			} else {
				history.back();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'bar bar-header bar-light' },
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					_react2.default.createElement('span', { onClick: this.back.bind(this) }),
					this.props.text
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var method = {
	store: function store(key, data) {
		if (data) {
			return localStorage.setItem(key, JSON.stringify(data));
		} else {
			return JSON.parse(localStorage.getItem(key));
		}
	},
	getImg: function getImg(response, attr) {
		if (response[attr]) {
			// 判断是否有图片
			/*  获取图片地址  */
			var _path = response[attr];
			var img_path = "https://fuss10.elemecdn.com";
			if (_path.substring(0, 1) === '/') {
				img_path += _path;
			} else {
				img_path += '/' + _path.substring(0, 1) + "/" + _path.substring(1, 3) + "/" + _path.substring(3);
				if (_path.indexOf('jpeg') > 0) {
					img_path += ".jpeg";
				} else if (_path.indexOf('png') > 0) {
					img_path += ".png";
				} else if (_path.indexOf('gif') > 0) {
					img_path += ".gif";
				}
			}
			return img_path;
		} else {
			return "";
		}
	},
	scroll: function scroll(target, container) {
		var num = target.substring(target.length - 1);
		var _high = this.factory.heightArr[num];

		container.scrollTop = _high;
	},
	touchMove: function touchMove(target) {
		var _start = 0;
		var _startTop = 0;
		var _end = 0;
		target.addEventListener('touchstart', function (event) {
			_start = event.changedTouches[0].pageY;
			_startTop = parseInt(target.style.top) || 0;
			console.log(target.style.top);
		});
		target.addEventListener('touchend', function (event) {
			_end = event.changedTouches[0].pageY;
			target.style.top = _startTop - (_start - _end) * 1.5 + 'px';
			console.log(target.style.top);
		});
		target.addEventListener('touchmove', function (event) {
			_end = event.changedTouches[0].pageY;
			target.style.top = _startTop - (_start - _end) + 'px';
		});
	},
	factory: {}
};

exports.default = method;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(31);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

		_this.state = {
			hash: location.hash
		};
		return _this;
	}

	_createClass(Footer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'footer' },
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: '#/', className: (0, _classnames2.default)({ active: this.state.hash === '#/' }) },
							_react2.default.createElement('i', { className: 'iconfont icon-changyonglogo40' }),
							'\u5916\u5356'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: '#/find', className: (0, _classnames2.default)({ active: this.state.hash === '#/find' }) },
							_react2.default.createElement('i', { className: 'iconfont icon-zhinanzhen' }),
							'\u53D1\u73B0'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: '#/menu', className: (0, _classnames2.default)({ active: this.state.hash === '#/menu' }) },
							_react2.default.createElement('i', { className: 'iconfont icon-cshy-orders' }),
							'\u8BA2\u5355'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: '#/mine', className: (0, _classnames2.default)({ active: this.state.hash === '#/mine' }) },
							_react2.default.createElement('i', { className: 'iconfont icon-wode' }),
							'\u6211\u7684'
						)
					)
				)
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ })

},[237]);