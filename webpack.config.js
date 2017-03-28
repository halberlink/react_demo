'use strict';

const webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	devtool:'eval-source-map',
	entry:{
		app:'./app/app.js',
	},
	output:{
		path:__dirname,
		filename:"[name].bundle.js",
	},
	devServer:{
		hot:true,
		inline:true
	},
	module:{
		loaders:[
			{
				test:/\.js?$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			},
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			}
		],

	},
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname+"/template/index.html?t=[hash:5]"
		}),
		new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
	],
	resolve:{
		extensions:['.js','.jsx','.css'],
	}
};