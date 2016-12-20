var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');

const base = {
     context: path.join(__dirname,'source'),
     output: {
      path: path.join(__dirname,'public'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'source/js'
        ]
    }
}

const development = {
    devtool: 'eval',
    devServer:{
      contentBase: path.join(__dirname,'public')
    },
    entry: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './js/index.js',
      './css/styles.scss'
    ],
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        { test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot','babel'] },
        { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
        { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css!sass' },
      ]
    }
  };

const production = {
    entry: [
      './js/index.js',
      './css/styles.scss'
    ],
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
    ],
    module: {
      loaders: [
        { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel'] },
        { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
        { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css!sass' },
      ]
    }
  };


module.exports = Object.assign({}, base, _.includes(process.argv, '--development') ? development : production )
