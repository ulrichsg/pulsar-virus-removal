const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) => {
    return {
        mode,
        entry: './src/main.tsx',
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'docs'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'docs'),
            },
        },
    }
};
