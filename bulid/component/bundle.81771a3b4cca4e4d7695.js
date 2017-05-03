webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

var _input = __webpack_require__(235);

var _input2 = _interopRequireDefault(_input);

var _searchInfo = __webpack_require__(236);

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
			this.setState({
				addressList: list
			});
			addrs = list;
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
						return _react2.default.createElement(_searchInfo2.default, { data: value, key: index, link: value.geohash });
					})
				)
			);
		}
	}]);

	return Address;
}(_react2.default.Component);

exports.default = Address;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
	_inherits(Detail, _React$Component);

	function Detail() {
		_classCallCheck(this, Detail);

		return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
	}

	_createClass(Detail, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/' },
					'rlist'
				),
				_react2.default.createElement(
					'h1',
					null,
					'Detail'
				)
			);
		}
	}]);

	return Detail;
}(_react2.default.Component);

exports.default = Detail;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

var _commonMethod = __webpack_require__(31);

var _commonMethod2 = _interopRequireDefault(_commonMethod);

var _weather = __webpack_require__(239);

var _weather2 = _interopRequireDefault(_weather);

var _swipe = __webpack_require__(238);

var _swipe2 = _interopRequireDefault(_swipe);

var _restaurant = __webpack_require__(237);

var _restaurant2 = _interopRequireDefault(_restaurant);

var _footer = __webpack_require__(233);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loca = {},
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
			loca: loca || {},
			weather: weather || {},
			swipePic: swipePic || [],
			hotWords: hotWords || [],
			restaurant: restaurant || []
		};
		return _this;
	}

	_createClass(Rlist, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(loca);
			var that = this;
			var geohash = _commonMethod2.default.store('loca');
			if (geohash) {
				var loca_url = '/v2/pois/' + geohash;
				fetch(loca_url).then(function (res) {
					return res.json();
				}).then(function (data) {
					that.setState({
						loca: data
					});
					loca = data;
					console.log(loca);
				}).then(function () {
					var weather_url = '/bgs/weather/current?latitude=' + that.state.loca.latitude + '&longitude=' + that.state.loca.longitude;
					var swipe_url = '/v2/index_entry?geohash=' + geohash + '&group_type=1&flags[]=F';
					var hotwords_url = '/shopping/v3/hot_search_words?latitude=' + that.state.loca.latitude + '&longitude=' + that.state.loca.longitude;
					var restaurant_url = '/shopping/restaurants?latitude=' + that.state.loca.latitude + '&longitude=' + that.state.loca.longitude + '&offset=0&limit=20&extras[]=activities&terminal=h5';
					fetch(weather_url).then(function (res) {
						return res.json();
					}).then(function (data) {
						that.setState({
							weather: data
						});
						weather = data;
					});
					fetch(swipe_url).then(function (res) {
						return res.json();
					}).then(function (data) {
						console.log(data);
						that.setState({
							swipePic: data
						});
						swipePic = data;
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
						hotWords = data;
					});
					fetch(restaurant_url).then(function (res) {
						return res.json();
					}).then(function (data) {
						console.log(data);
						that.setState({
							restaurant: data
						});
						restaurant = data;
					});
				});
			} else {
				that.setState({
					loca: {
						name: '请先设置地址哦'
					}
				});
			}
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
									this.state.loca.name
								)
							),
							_react2.default.createElement(_weather2.default, { data: this.state.weather })
						),
						_react2.default.createElement(
							'div',
							{ className: 'header-center' },
							_react2.default.createElement('input', { type: 'text', className: 'rl-search', placeholder: '\u641C\u7D22\u5546\u5BB6\u3001\u5546\u54C1' })
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

/***/ 103:
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

/***/ 207:
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

/***/ 208:
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _swipeJsIso = __webpack_require__(207);

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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(40);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(17);

var _address = __webpack_require__(100);

var _address2 = _interopRequireDefault(_address);

var _detail = __webpack_require__(101);

var _detail2 = _interopRequireDefault(_detail);

var _rlist = __webpack_require__(102);

var _rlist2 = _interopRequireDefault(_rlist);

var _rem = __webpack_require__(103);

var _rem2 = _interopRequireDefault(_rem);

var _iconfont = __webpack_require__(98);

var _iconfont2 = _interopRequireDefault(_iconfont);

var _index = __webpack_require__(99);

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
			geohash: ''
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
					_react2.default.createElement(_reactRouterDom.Route, { path: '/detail', component: _detail2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/address', component: _address2.default })
				)
			);
		}
	}]);

	return Container;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Container, null), document.getElementById('container'));

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(94);

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

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

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
		key: "back",
		value: function back() {
			history.back();
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "bar bar-header bar-light" },
				_react2.default.createElement(
					"h1",
					{ className: "title" },
					_react2.default.createElement("span", { onClick: this.back.bind(this) }),
					this.props.text
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

__webpack_require__(208);

var _header = __webpack_require__(234);

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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(31);

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
			_commonMethod2.default.store('loca', this.props.link);
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(31);

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
				{ href: '#detail-' + data.id },
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
								'p',
								{ className: 'res-info' },
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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactSwipe = __webpack_require__(231);

var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

var _classnames = __webpack_require__(94);

var _classnames2 = _interopRequireDefault(_classnames);

var _commonMethod = __webpack_require__(31);

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

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _commonMethod = __webpack_require__(31);

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

/***/ 31:
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
	}
};

exports.default = method;

/***/ }),

/***/ 94:
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

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[232]);