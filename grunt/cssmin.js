'use strict';

var cssmin = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            'css/main.min.css': 'css/main.css'
        }
    }
};

module.exports = cssmin;