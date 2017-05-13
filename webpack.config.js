var webpack = require('webpack');
var path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  context: APP_DIR,
  entry: {
    app: './app.js',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  //entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'  // keys will be used as name here
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        include : APP_DIR,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    // Copy Webpack Plugin, to copy files from source to dist folder, eg: images etc
    new CopyWebpackPlugin([
      { 
        from:  '../assets', 
        to: BUILD_DIR + '/assets'
      },
      {
        from: "../index.html",
        to: BUILD_DIR
      }
    ])
  ]
};

module.exports = config;