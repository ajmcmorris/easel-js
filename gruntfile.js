module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  
  pkg: grunt.file.readJSON('package.json'),

  jshint: {
    all: ['gruntfile.js','js/**/*.js' ,'lib/**/*.js', 'test/**/*.js']
  },

  htmlmin: {                                     // Task 
    dist: {                                      // Target 
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'index.html': 'index.html',     // 'destination': 'source' 
      }
    },
    dev: {                                       // Another target 
      files: {
        'index.html': 'index.html',
      }
    }
  },

  });

  // Load the plugin that provides the "Html-min" task.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the plugin that provides the "jshint" task.
  //grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default',['htmlmin'],['jshint']);

};