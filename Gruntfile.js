'use strict';

module.exports = function(grunt)
{
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['source/styles/**/*.scss'],
                tasks: ['styles']
            },
            scripts: {
                files: ['source/js/**/*.js'],
                tasks: ['browserify']
            }
        },
        sass: require('./grunt/sass'),
        postcss: require('./grunt/postcss'),
        cssmin: require('./grunt/cssmin'),
        browserify: require('./grunt/browserify'),
        uglify: require('./grunt/uglify'),
        browserSync: {
            bsFiles: {
                src : ['js/*.js', 'img/*', 'css/*.css', '*.html']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        }
    });

    grunt.registerTask('styles', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('scripts', ['browserify', 'uglify']);
    grunt.registerTask('build', ['styles', 'scripts']);
    grunt.registerTask('serve', ['build', 'browserSync', 'watch']);
    grunt.registerTask('default', ['build']);
};