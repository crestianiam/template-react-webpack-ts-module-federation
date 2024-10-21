const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('./package.json');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'firstChild',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App',
            },
            remotes: {
                container: 'container@http://localhost:3000/remoteEntry.js',
            },
            shared: {
                'react': {
                    singleton: true,
                    requiredVersion: packageJson.dependencies['react']
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: packageJson.dependencies['react-dom']
                },
            },
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3001,
        hot: true,
        historyApiFallback: true,
    },
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
};