const {merge} = require("webpack-merge");
const commonConfig = require('./wpc-common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webConfig = {
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
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
			},
		],
	}
};
module.exports = merge(commonConfig, webConfig);
