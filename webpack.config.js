var webpack = require('webpack')

module.exports = {
	entry: './public/index.js',

  	output: {
    	path: __dirname,
    	publicPath:'/',
    	filename: 'bundle.js'
  	},
  	module: {
  		loaders: [{
  			test: /\.js|\.jsx$/,
  			exclude: /node_modules/,
  			loader: 'babel-loader',
  			query: {
  				presets: ['es2015', 'react']
  			}
  		}]
  	},
  	resolve: {
  		extensions: ['.js', '.jsx']
  	}
};