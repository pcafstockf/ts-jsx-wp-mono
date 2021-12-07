const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const scriptsDir = path.resolve('scripts');

process.env.TS_NODE_PROJECT = process.env.TS_NODE_PROJECT || path.resolve(__dirname, process.env.NODE_ENV === 'test' ? 'tsconfig.spec.json' : 'tsconfig.app.json');

const config = {
	entry: path.join(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../../', 'build', 'hello-browser')
	},
	devServer: {
		static: [path.join(__dirname, 'public')],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Faster React',
			template: path.join(__dirname, 'public/index.html'),
			favicon: path.join(__dirname, 'public/favicon.ico'),
			manifest: path.join(__dirname, 'public/manifest.json')
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
