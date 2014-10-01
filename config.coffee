# This file/module contains all configuration for the build process.
module.exports =
  
  ###
  This is a collection of file patterns that refer to our app code. `js` is all
  project javascript, minus tests. `html` is just our main HTML file, and `unit`
  contains our app's unit tests.
  ###
  app_files:
    js: ["./js/spriteloader.js"]
    jsunit: ["./js/spriteloader.spec.js"]
    coffee: ["./*.coffee"]
    html: ["./index.html"]
  
  # This is the mock file used during testing only.
  test_files:
    js: ["./js/mocks.js"]