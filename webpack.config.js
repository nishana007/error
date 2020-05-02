const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	context: __dirname,
	entry: './lion/js/new2.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
        test: /\.js$/,
        exclude: /(code|node_modules)/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: /(code|node_modules)/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					'css-loader'
				]
			}
		]
	},
	plugins: [ new HtmlWebPackPlugin(),new MiniCssExtractPlugin() ]
};