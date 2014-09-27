module.exports = ->

	# Load Grunt modules.
	@loadNpmTasks "grunt-contrib-clean"
	@loadNpmTasks "grunt-contrib-copy"
	@loadNpmTasks "grunt-contrib-jshint"
	@loadNpmTasks "grunt-contrib-watch"
	@loadNpmTasks "grunt-karma"
	@loadNpmTasks "grunt-notify"

	# Load configuration file.
	userConfig = require("./config.js")

	# Configure Grunt tasks.
	taskConfig =
  
		###
		The JavaScript source and unit tests are linted based on the policies listed in
		`options`. No globals are defined.
		###
		jshint:
			src: ["<%= app_files.js %>"]
			test: ["<%= app_files.jsunit %>"]
			options:
				curly: true
				immed: true
				undef: true
				unused: true
				newcap: true
				noarg: true
				sub: true
				boss: true
				eqnull: true
	
			globals: {}
	        
		# Configure Karma.
		karma:
			options:
				configFile: "./karma/karma-unit.js"
	
			unit:
				port: 9019
				background: true
	
			continuous:
				singleRun: true
	
		###
		For rapid development, set up a watch that checks to see if any of the files
		listed below change, and then executes the listed tasks when they do.
		###
		watch:
	
			###
			Live Reload should work for all tasks by default. This is overridden in some
			tasks (like this file) where browser resources are unaffected. It runs by
			default on port 35729, which the browser plugin should auto-detect.
			###
			options:
				livereload: true
	
			# When the JavaScript source files changes, lint it and run the unit tests.
			jssrc:
				files: ["<%= app_files.js %>"]
				tasks: [
					"jshint:src"
					"karma:unit:run"
				]
	
			###
			When the unit test file changes, lint it and run the unit tests. No live-
			reloading, since the tests don't run in the browser.
			###
			jsunit:
				files: ["<%= app_files.jsunit %>"]
				tasks: [
					"jshint:test"
					"karma:unit:run"
				]
				options:
					livereload: false


	# Run Grunt tasks.
	@initConfig @util._.extend(taskConfig, userConfig)

	# Register Grunt tasks.
	@registerTask "default", ["watch"]