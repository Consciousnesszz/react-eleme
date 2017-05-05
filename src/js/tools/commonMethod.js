
var method = {
	store: function store (key, data){
		if (data) {
			return localStorage.setItem(key, JSON.stringify(data));
		} else {
			return JSON.parse(localStorage.getItem(key));
		}
	},
	getImg : function(response, attr){
		if (response[attr]) { // 判断是否有图片
			/*  获取图片地址  */
			var _path = response[attr];
			var img_path = "https://fuss10.elemecdn.com";
			if (_path.substring(0, 1) === '/') {
				img_path += _path;
			}else {
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
	scroll: function(target, container){
		var num = target.substring(target.length - 1);
		var _high = this.factory.heightArr[num];

		container.scrollTop = _high;
	},
	touchMove: function(target){
		var _start = 0;
		var _startTop = 0;
		var _end = 0;
		target.addEventListener('touchstart', function(event){
			_start = event.changedTouches[0].pageY;
			_startTop = parseInt(target.style.top) || 0;
			console.log(target.style.top);
		})
		target.addEventListener('touchend', function(event){
			_end = event.changedTouches[0].pageY;
			target.style.top = _startTop - (_start - _end) * 1.5 + 'px';
			console.log(target.style.top);
		})
		target.addEventListener('touchmove', function(event){
			_end = event.changedTouches[0].pageY;
			target.style.top = _startTop - (_start - _end) + 'px';
		})
	},
	factory: {

	}
}


export default method
