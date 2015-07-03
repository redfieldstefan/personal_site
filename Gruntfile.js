'use strict';

var webpack = require('webpack')

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
          filename: 'bundle.min.js'
        },
        plugins: [
          new webpack.optimize.UglifyJsPlugin({minimize: true})
         ]
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
        src: 'style/img/**/*',
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

    watch: {
      files: watchFiles,
      html: {
        files: ['./app/**/*.html'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['./app/**/*.css'],
        options: {
          livereload: true
        }
      },
      tasks: ['build']
    },

    nodemon: {
      dev: {
        src: watchFiles
      }
    }
  });

  grunt.registerTask('build', ['webpack:client', 'copy:html', 'copy:css', 'copy:images'])
};
