var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        './src/index.jsx',
        './index.html'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js',
        filename: '/index.html'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(jpg|png)$/,
            loader: 'file?name=[path][name].[hash].[ext]'
        }, {
            test: /\.css$/,
            loaders: ["style-loader","css-loader","postcss-loader"]
        }, {
            test: /\.html/,
            loader: 'file?name=[name].[ext]'
        }
    ]},
    postcss: () => [
        require('postcss-import')({ addDependencyTo: webpack, path: ['node_modules'] }),
        require('postcss-url')(),
        require('autoprefixer')({ browsers: [ 'last 2 versions' ] }),
        require('precss')(),
    ],
    resolve: {
        extensions: ['', '.js', '.json']
    }
};
