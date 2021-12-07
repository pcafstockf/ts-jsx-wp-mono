const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const fs = require("fs");

if ((!process.env.TS_NODE_PROJECT) || (!fs.existsSync(process.env.TS_NODE_PROJECT)))
	throw new Error('Environment variable TS_NODE_PROJECT must point to the projects tsconfig.json file');

module.exports = {
	optimization: {
		splitChunks: { chunks: "all" }
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
						configFile: process.env.TS_NODE_PROJECT
					}
			}],
			exclude: /node_modules/
		}]
	},
	resolve: {
		modules: [
			'node_modules'
		],
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		plugins: [
			new TsconfigPathsPlugin({configFile: process.env.TS_NODE_PROJECT}),
		]
	}
}
