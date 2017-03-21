const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  context: resolve('source'),

  entry: './app.js',

  devServer: {
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    port: 8010
  },

  output: {
    filename: '[name].bundle.js',
    // sourceMapFilename: '[name].map',
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

  plugins: [
    new ExtractTextPlugin('[name].styles.css'),
    new webpack.DefinePlugin({
      'API_BASE_URL': env.prod ? `'https://api.whatplates.com'` : `'http://localhost:8020'`,
      'DEBUG': !env.prod
    }),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
  ],

  devtool: env.prod ? 'source-map' : 'eval'
})
