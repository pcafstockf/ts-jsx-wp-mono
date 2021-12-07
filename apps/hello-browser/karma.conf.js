process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const {merge} = require('webpack-merge');
const webpackConf = require('./webpack.config');
const kwpConfig = merge(webpackConf, {});
delete kwpConfig.entry;
delete kwpConfig.output;
delete kwpConfig.devServer;

module.exports = function (config) {
	config.set({
		basePath: '',
		plugins: [
			require('karma-webpack'),
			require('karma-jasmine'),
			require('karma-jasmine-html-reporter'),
			require('karma-chrome-launcher'),
		],
		frameworks: ['jasmine', 'webpack'],
		webpack: kwpConfig,
		preprocessors: {
			'src/**/*.spec.@(js|mjs|jsx|ts|tsx)': ['webpack'],
		},
		reporters: ['progress', 'kjhtml'],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		jasmineHtmlReporter: {
			suppressAll: true // removes the duplicated traces
		},
		files: [
			{pattern: 'src/**/*.spec.@(js|mjs|jsx|ts|tsx)', watched: false},  // Webpack does the watching.
		],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity,
		webpackServer: {
			noInfo: true
		}
	})
}
