'use strict';

var sass = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            'css/main.css': 'source/styles/main.scss'
        }
    }
};

module.exports = sass;