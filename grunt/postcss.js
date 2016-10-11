'use strict';

var postcss = {
    options: {
        map: true,
        processors: [
            require('autoprefixer-core')({
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            })
        ]
    },
    dist: {
        files: {
            'css/main.css': 'css/main.css'
        }
    }
};

module.exports = postcss;