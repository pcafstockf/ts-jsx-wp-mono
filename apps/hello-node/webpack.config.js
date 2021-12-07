const path = require('path');
const {merge} = require('webpack-merge');
const scriptsDir = path.resolve('scripts');

process.env.TS_NODE_PROJECT = process.env.TS_NODE_PROJECT || path.resolve(__dirname, process.env.NODE_ENV === 'test' ? 'tsconfig.spec.json' : 'tsconfig.app.json');

const config = {
	entry: path.join(__dirname, 'src/main.ts'),
	output: {
		path: path.resolve(__dirname, '../../', 'build', 'hello-node')
	},
};

const envConfig = process.env.NODE_ENV === 'production' ? require(path.join(scriptsDir, 'wpc-prod')) : require(path.join(scriptsDir, 'wpc-dev'));
module.exports = merge(
	require(path.join(scriptsDir, 'wpc-common')),
	envConfig,
	config
);