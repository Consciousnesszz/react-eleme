// 配置webpack
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('stylesheets/[name]-css.css');
const extractSASS = new ExtractTextPlugin('stylesheets/[name]-sass.css');

module.exports = {
	entry : {  // 入口文件
		bundle : './src/js/app.js',  // 业务逻辑与框架分开
		vendor : ['react', 'react-dom', 'react-router-dom']
	},
	output : {  // 输出
		path : __dirname + '/bulid',
		filename : './component/[name].[chunkhash].js'
	},
	module : { // 配置
		rules : [{
			test : /\.js$/,
			use : [{
				loader: 'babel-loader'
			}],
			exclude : /node_modules/  
		},{
			test : /\.css$/,
			use : extractCSS.extract({
				fallback : 'style-loader',
				use : ['css-loader']
			}),
			exclude : /node_modules/
		},{
			test : /\.scss$/,
			use: extractSASS.extract({
				fallback : 'style-loader',
				use : ['css-loader', 'sass-loader']
			}),
			exclude : /node_modules/
		},{
			test : /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			use: [{
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
			}],
			exclude : /node_modules/
		}]
	},
	plugins : [
		new webpack.optimize.CommonsChunkPlugin({  // 插件
			name : 'vendor',
			filename : './vendor/react.js'
		}),
		new HtmlWebpackPlugin({
			filename : './index.html',
			template : './index.html'
		}),
		extractCSS,
    	extractSASS
	] 
}
