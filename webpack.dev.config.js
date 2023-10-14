const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        host: 'localhost',
        port: 3000,
        hot: true,
        static: path.resolve(__dirname, './dist'),
    },
};
