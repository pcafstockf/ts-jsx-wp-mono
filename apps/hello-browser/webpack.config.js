const path = require('path');
const {merge} = require('webpack-merge');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const scriptsDir = path.resolve('scripts');

process.env.TS_NODE_PROJECT = process.env.TS_NODE_PROJECT || path.resolve(__dirname, process.env.NODE_ENV === 'test' ? 'tsconfig.spec.json' : 'tsconfig.app.json');

const config = {
	entry: path.join(__dirname, 'src/main.ts'),
	output: {
		publicPath: "/",
		path: path.resolve(path.join('build', 'hello-browser'))
	},
	devServer: {
		historyApiFallback: true,
		static: [path.resolve(__dirname, 'static')],
	},
	plugins: [
		new CopyPlugin({
			patterns: [{from: path.resolve(__dirname, 'static')}]
		}),
		new WebpackManifestPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'src', 'index.ejs'),
			title: 'Greetings'
		})
	]
};

const envConfig = process.env.NODE_ENV === 'production' ? require(path.join(scriptsDir, 'wpc-prod')) : require(path.join(scriptsDir, 'wpc-dev'));
module.exports = merge(
	require(path.join(scriptsDir, 'wpc-common')),
	require(path.join(scriptsDir, 'wpc-web')),
	envConfig,
	config
);
