const {resolve} = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  context: resolve('source'),

  entry: './app.js',

  devServer: {
    historyApiFallback: true
  },

  output: {
    filename: 'bundle.js',
    path: resolve('public'),
    publicPath: '/'
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [resolve('source'), 'node_modules']
  },

  module: {
    loaders: [
        { test: /\.js/, exclude: /node_modules/, loaders: ['babel-loader'] },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({ loader: 'css-loader?modules&importLoaders=1!postcss-loader' })
      }
    ]
  },

  plugins: [ new ExtractTextPlugin('styles.css') ],

  devtool: env.prod ? 'source-map' : 'eval'
})
