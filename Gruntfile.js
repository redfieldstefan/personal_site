'use strict';

module.exports = function (grunt) {

  var path = require('path');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var watchFiles = ['Gruntfile.js','./app/**/*.js', './app/**/*.css', './app/**/*.html'];

  grunt.initConfig({

    webpack: {
      client: {
        entry: __dirname + '/app/js/client.js',
        output: {
          path: path.join(__dirname, '/build'),
          filename: 'bundle.js'
        }
      }
    },

    copy: {
      html: {
        cwd: 'app/',
        expand: true,
        flatten: false,
        src:'**/*.html',
        dest:'build/',
        filter: 'isFile'
      },
      images: {
        cwd: 'app/',
        expand: true,
        flatten: false,
        src: 'style/images/**/*',
        dest: 'build/'
      },
      css: {
        cwd: 'app/',
        expand: true,
        flatten: false,
        src: 'style/**/*.css',
        dest: 'build/',
        filter: 'isFile'
      }
    },

    clean: {
      dev: {
        src: 'build/'
      }
    },

    nodemon: {
      dev: {
        src: watchFiles
      }
    }
  });

  grunt.registerTask('build', ['webpack:client', 'copy:html', 'copy:css', 'copy:images'])
};
