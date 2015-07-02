//Javscript File

module.exports = function(grunt) {
  // Do grunt-related things in here

  grunt.initConfig({

  	jshint: {
    all: ['Gruntfile.js','js/**/*.js', 'lib/**/*.js', 'test/**/*.js']
  },

  htmlmin: {                                     // Task 
    dist: {                                      // Target 
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'index.html': 'index.html'     // 'destination': 'source' 
 
      }
    },
    dev: {                                       // Another target 
      files: {
        'index.html': 'index.html',
      }
    }
  },
  
  sass: {                              // Task 
    dist: {                            // Target 
      options: {                       // Target options 
        style: 'expanded'
      },
      files: {                         // Dictionary of files 
        'styles.css': 'styles.scss',       // 'destination': 'source' 
      }
    }
  }

  });
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['jshint'],['sass'],['htmlmin']);

};