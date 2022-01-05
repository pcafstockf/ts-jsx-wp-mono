process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const path = require("path");
const {merge} = require('webpack-merge');
const kwpConfig = merge(require('./webpack.config'), {});
delete kwpConfig.entry;
delete kwpConfig.output;
delete kwpConfig.devServer;
delete kwpConfig.optimization;

module.exports = function (config) {
	config.set({
		basePath: '',
		plugins: [
			require('karma-webpack'),
			require('karma-jasmine'),
			require('karma-jasmine-html-reporter'),
			require('karma-chrome-launcher')
		],
		frameworks: ['jasmine', 'webpack'],
		reporters: ['progress', 'kjhtml'],
		client: {
			jasmine: {
				// you can add configuration options for Jasmine: https://jasmine.github.io/api/edge/Configuration.html
			},
			clearContext: false, // leave Jasmine Spec Runner output visible in browser
		},
		jasmineHtmlReporter: {
			suppressAll: true // removes the duplicated traces
		},
		webpack: kwpConfig,
		preprocessors: {
			'jasmine-setup.js': ['webpack'],
			'src/**/*.spec.@(js|mjs|jsx|ts|tsx)': ['webpack']
		},
		files: [
			'jasmine-setup.js',   // Need to be sure our helper gets executed in the browser.
			{pattern: 'src/**/*.spec.@(js|mjs|jsx|ts|tsx)', watched: false},  // Webpack does the watching.
		],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		singleRun: false,
		autoWatch: true,
		browsers: ['Chrome']
	})
}
