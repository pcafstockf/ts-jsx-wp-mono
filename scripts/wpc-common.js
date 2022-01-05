const path = require('path');
const fs = require("fs");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const tswpConfig = require('./tswp.config');

if ((!tswpConfig.tsnodeProject) || (!fs.existsSync(tswpConfig.tsnodeProject)))
	throw new Error('"tswp.config" property "tsnodeProject" must point to a project\'s tsconfig.json file');
// if env is defined, TsconfigPathsPlugin completely ignores the options that were passed to it (below).
// We could 'delete' (https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/45), but this better ensures consistency.
process.env.TS_NODE_PROJECT = path.resolve(tswpConfig.tsnodeProject);

module.exports = {
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				loader: "source-map-loader"
			},
			{
			test: /\.(js|mjs|jsx|ts|mts|tsx)$/,
			use: [{
					loader: 'ts-loader',
					options: {
						transpileOnly: true,    // No need to slow down if we are using a real IDE.
						configFile: tswpConfig.tsnodeProject
					}
			}],
				exclude: tswpConfig.tsnodeExclude
		}]
	},
	resolve: {
		modules: [
			'node_modules'
		],
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		plugins: [
			new TsconfigPathsPlugin({configFile: tswpConfig.tsnodeProject}),
		]
	}
}
