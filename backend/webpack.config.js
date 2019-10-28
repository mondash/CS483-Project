const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env = 'development') => {
    return {
        mode: env,
        target: 'node',
        entry: './src/server.js',
        devtool: env === 'development' ? 'inline-source-map' : undefined,
        output: {
            path: path.resolve(__dirname, './build'),
            filename: 'backend.bundle.js'
        },
        externals: [nodeExternals()]
    };
};
