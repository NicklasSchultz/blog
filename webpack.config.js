var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: { path: __dirname+"/app/", filename: 'bundle.js' },
  debug: true,
  devtool : 'inline-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']}},
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" }
    ]
  },
  postcss: function () {
        return [require('autoprefixer'), require('precss')];
  }
};
