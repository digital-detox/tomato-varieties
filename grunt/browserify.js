'use strict';

var browserify = {
    dist: {
        files: {
            'js/main.js': 'source/js/main.js'
        },
        options: {
            transform: ['babelify']
        }
    }
};

module.exports = browserify;