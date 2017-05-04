
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
	factory: {

	}
}


export default method
