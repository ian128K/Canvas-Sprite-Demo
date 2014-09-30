module.exports = function ( karma ) {
	karma.set({
		/* 
		 * Where to look for files, starting from the location of this file.
		 */
		basePath: '../',

		/*
		 * The list of file patterns to load into the browser during testing.
		 */
		files: [
			JASMINE,
			JASMINE_ADAPTER,
			'js/main.js'
		],
		exclude: [],
		frameworks: [ "jasmine" ],
		plugins: [ 'karma-jasmine', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-safari-launcher', 'karma-story-reporter' ],
		preprocessors: {},

		/*
		 * How to report, by default.
		 */
		reporters: 'dots',

		/*
		 * Set which port the browser should connect to, which port the test runner
		 * operates on, and the URL path for the browser to use.
		 */
		port: 9018,
		urlRoot: '/',

		/* 
		 * Disable file watching by default.
		 */
		autoWatch: false,

		/*
		 * The list of browsers to launch to test on. Manually navigating to
		 * http://localhost:9018/ to run tests is also possible. The window/tab can
		 * be left open and the tests will automatically occur there during the
		 * build. This has the aesthetic advantage of not launching a browser every
		 * time you save.
		 */
		browsers: [
			'Chrome',
			'Firefox',
			'Safari'
		]
	});
};