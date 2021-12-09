const path = require('path');
const {merge} = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");
const tswpConfig = require('../../scripts/tswp.config');

tswpConfig.tsnodeProject = process.env.TS_NODE_PROJECT || path.resolve(__dirname, process.env.NODE_ENV === 'test' ? 'tsconfig.spec.json' : 'tsconfig.app.json');
tswpConfig.indexTemplate = path.resolve(__dirname, 'src', 'index.ejs');
tswpConfig.staticCopyPatterns = [{from: path.resolve(__dirname, 'static')}];
tswpConfig.staticServeDir = [path.resolve(__dirname, 'static')];

const config = {
	entry: path.join(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(path.join('build', 'hello-browser'))
	}
};

const envConfig = process.env.NODE_ENV === 'production' ? require(path.join('scripts', 'wpc-prod')) : require(path.join('scripts', 'wpc-dev'));
module.exports = merge(
	require(path.join('scripts', 'wpc-common')),
	require(path.join('scripts', 'wpc-web')),
	envConfig,
	config
);
