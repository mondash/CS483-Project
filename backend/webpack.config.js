const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
    return {
        mode: env === 'dev' ? 'development' : 'production',
        target: 'node',
        entry: './src/server.js',
        devtool: 'inline-source-map',
        output: {
            path: path.resolve(__dirname, './build'),
            filename: 'backend.bundle.js',
        },
        externals: [nodeExternals()],
    };
};