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
  // add this handful of plugins that optimize the build
  // when we're in production
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']}},
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  postcss: function () {
        return [require('autoprefixer'), require('precss')];
  }
};
