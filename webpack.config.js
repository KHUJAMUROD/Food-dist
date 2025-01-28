'use strict';

const { debug } = require('console');
let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bowser_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presents: [['@babel/present-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"

            }]]
          }
        }

      }

    ]
  }
};