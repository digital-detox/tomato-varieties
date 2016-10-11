'use strict';

var uglify = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            'js/main.min.js': 'js/main.js'
        }
    }
};

module.exports = uglify;