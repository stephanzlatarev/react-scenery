var webpack = require('webpack');
var path = require('path');

var SOURCE_DIR = path.resolve(__dirname, 'src');
var TARGET_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: SOURCE_DIR + '/Scene.js',
  output: {
    path: TARGET_DIR,
    filename: 'react-scenery.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: SOURCE_DIR,
        loader: 'babel-loader',
        query: {
          presets:[
            'es2015',
            'react'
          ]
        }
      }
    ]
  },
  externals: {
    "jquery": "jQuery"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;
