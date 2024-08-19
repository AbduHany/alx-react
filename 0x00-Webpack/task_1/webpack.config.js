const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
}