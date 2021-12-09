const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const {WebpackManifestPlugin} = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tswpConfig = require('./tswp.config');

module.exports = {
	output: {
		publicPath: "/"
	},
	plugins: [],
	module: {
		rules: [],
	}
};
if (process.env.NODE_ENV !== 'production')
	module.exports.devServer = {historyApiFallback: true};

if (tswpConfig.staticServeDir)
	module.exports.devServer.static = tswpConfig.staticServeDir;

if (tswpConfig.supportScss) {
	module.exports.plugins.push(new MiniCssExtractPlugin());
	module.exports.module.rules.push({
				test: /\.s[ac]ss$/i,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: process.env.NODE_ENV !== "production",
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: process.env.NODE_ENV !== "production",
						},
					},
				],
	});
}

if (tswpConfig.staticCopyPatterns) {
	module.exports.plugins.push(
		new CopyPlugin({
			patterns: tswpConfig.staticCopyPatterns
		})
	);
}

if (tswpConfig.indexHtmlOptions)
	module.exports.plugins.push(new HtmlWebpackPlugin(tswpConfig.indexHtmlOptions));

if (tswpConfig.generateManifest)
	module.exports.plugins.push(new WebpackManifestPlugin());
