/* https://webpack.js.org/configuration/ */
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//https://webpack.js.org/plugins/extract-text-webpack-plugin/#modify-filename
const ExtractGlobalCSS = new ExtractTextPlugin({
   filename:  (getPath) => {
         return getPath('../css/global.css').replace('css/js', 'css');
   },
   allChunks: true
});


const config = {
	entry: {
		global: './_js/global.js',

	},
	output: {
		path: path.resolve(__dirname, '../assets/js'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ 
				test: /\.(js)$/,
				exclude: [
					path.resolve(__dirname, 'node_modules'), 
					path.resolve(__dirname, 'webpack')
				],            
	            use: [
					{
						// https://github.com/babel/babel-loader
	                    loader: "babel-loader",
	                    
	                    //https://babeljs.io/docs/en/presets
	                    options: {
	                        presets: ['@babel/preset-env']
	                    }
	                }
	            ] 
	        },

	        //https://github.com/webpack-contrib/extract-text-webpack-plugin but use alpha ver 4.0 https://github.com/webpack/webpack/issues/6568
	        {
				test: /\.(css|scss)$/,
				use: ExtractGlobalCSS.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								// If you are having trouble with urls not resolving add this setting.
								// See https://github.com/webpack-contrib/css-loader#url
								url: false,
								minimize: true,
								sourceMap: true
							}
						}, 
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]                 
				})
			},         
		]
	},

	devtool: "source-map", //development only?
	resolve: {
		extensions: ['*', '.js']
	},  
	plugins: [
		ExtractGlobalCSS
	]
};

module.exports = config;