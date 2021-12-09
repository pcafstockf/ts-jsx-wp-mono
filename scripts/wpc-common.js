const fs = require("fs");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const tswpConfig = require('./tswp.config');

if ((!tswpConfig.tsnodeProject) || (!fs.existsSync(tswpConfig.tsnodeProject)))
	throw new Error('"tswp.config" property "tsnodeProject" must point to a project\'s tsconfig.json file');

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
