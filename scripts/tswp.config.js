/**
 * This module exports and instance of this configuration class whose properties control the various pieces of a webpack build.
 * See the ReadMe-Webpack.md file in this directory for more detail.
 */
class TswpConfig {
	constructor() {
		/*
			Must be present, can be changed, but must point to a valid tsconfig.json file that is to be used for compiling the webpack target (default process.env.TS_NODE_PROJECT).
		*/
		this.tsnodeProject = process.env.TS_NODE_PROJECT;
		/*
			Configure everything needed to import '.scss' files into your ts/tsx files.
		*/
		this.supportScss = true;
		/*
			Configure webpack to automatically generate an index.html file (default is to generate).  See:
				https://webpack.js.org/plugins/html-webpack-plugin/
		*/
		this.indexHtmlOptions = {filename: 'index.html'};
		/*
			Allow webpack to automatically generate a manifest.json file.
		*/
		this.generateManifest = true;
		/*
			Controls which files are *not* processed by TypeScript before being passed to webpack.
			If you target is es5, you probably need to change this property from it's default value of RegExp: /node_modules/.
			If any of the packages you depend on (aka node_modules) are es6+, they need to be down-leveled to es5.
			This is historically done with Babel, but since all valid JavaScript is also valid TypeScript, we can simply run es6+ code through TypeScript to downlevel it.
			This is inspired by the combination of:
				https://stackoverflow.com/questions/53154986/babel-not-transpiling-imported-node-modules-to-es5-includes-es2015-syntax
				https://webpack.js.org/configuration/module/#condition
			You will want a function something like:
				tswpConfig.tsnodeExclude = function(path) {
					const nonEs5SyntaxPackages = ['react-router'];  // has some 'let' variables.
					if (nonEs5SyntaxPackages.some( pkg => path.match(pkg)))
						return false;
					return path.match("node_modules");  // otherwise node_modules should *not* be run through TypeScript.
				}
		 */
		this.tsnodeExclude = /node_modules/;
		/*
			Optionally copy static files to the output (default is undefined; aka no copy).  See:
				https://webpack.js.org/plugins/copy-webpack-plugin/
		 */
		this.staticCopyPatterns = undefined;
		/*
			Ask the devServer to serve static files to the client from this directory (default is undefined).  See:
				https://webpack.js.org/plugins/copy-webpack-plugin/
		 */
		this.staticServeDir = undefined;

		/*
		 *  If defined, this configuration will be passed to the webpack.DefinePlugin.
		 */
		this.preDefines = undefined;
	}
}

module.exports = new TswpConfig();
