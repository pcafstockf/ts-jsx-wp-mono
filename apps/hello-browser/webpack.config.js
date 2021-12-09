const path = require('path');
const {merge} = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");
const tswpConfig = require('../../scripts/tswp.config');

tswpConfig.tsnodeProject = process.env.TS_NODE_PROJECT || path.resolve(__dirname, process.env.NODE_ENV === 'test' ? 'tsconfig.spec.json' : 'tsconfig.app.json');
tswpConfig.indexHtmlOptions.template = path.resolve(__dirname, 'src', 'index.ejs');
tswpConfig.indexHtmlOptions.title = 'Greetings';
tswpConfig.staticCopyPatterns = [{from: path.resolve(__dirname, 'static')}];
tswpConfig.staticServeDir = [path.resolve(__dirname, 'static')];

const config = {
	entry: path.join(__dirname, 'src/main.ts'),
	output: {
		path: path.resolve('build', 'hello-browser')
	}
};

const envConfig = process.env.NODE_ENV === 'production' ? require(path.resolve('scripts', 'wpc-prod')) : require(path.resolve('scripts', 'wpc-dev'));
module.exports = merge(
	require(path.resolve('scripts', 'wpc-common')),
	require(path.resolve('scripts', 'wpc-web')),
	envConfig,
	config
);
